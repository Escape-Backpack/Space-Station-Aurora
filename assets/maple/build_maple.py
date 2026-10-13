"""Convert the approved MAPLE raster to genuine outlined SVG paths and PNG.

No generated artwork or retyped lettering. Colour reduction is part of vector
tracing; only the exterior of the circular badge is transparent.
"""
from pathlib import Path
import shutil
import cv2
import numpy as np
from PIL import Image
import cairosvg

ROOT = Path(__file__).resolve().parents[2]
OUT = Path(__file__).parent
SRC = ROOT / 'source/Images/MAPLE_Logo.png'

def path_for(contour):
    points = cv2.approxPolyDP(contour, 0.5, True).reshape(-1, 2)
    if len(points) < 3:
        return ''
    # Midpoint quadratic smoothing keeps the traced shape and avoids pixel steps.
    mid = (points[-1].astype(float) + points[0]) / 2
    parts = [f'M{mid[0]:.1f},{mid[1]:.1f}']
    for i, point in enumerate(points):
        end = (point.astype(float) + points[(i+1) % len(points)]) / 2
        parts.append(f'Q{point[0]},{point[1]} {end[0]:.1f},{end[1]:.1f}')
    return ' '.join(parts) + 'Z'

def main():
    rgb = np.array(Image.open(SRC).convert('RGB'))
    gray = cv2.cvtColor(rgb, cv2.COLOR_RGB2GRAY)
    contours, _ = cv2.findContours((gray < 135).astype(np.uint8), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    edge = max(contours, key=cv2.contourArea)
    x,y,w,h = cv2.boundingRect(edge)
    pad=8; x-=pad; y-=pad; w+=2*pad; h+=2*pad
    cropped = rgb[y:y+h,x:x+w]
    edge = edge - np.array([x,y])
    # Retain edges; suppress only small texture variations before colour tracing.
    smooth = cv2.bilateralFilter(cropped, 5, 22, 3)
    indexed = Image.fromarray(smooth).quantize(colors=32, method=Image.Quantize.MEDIANCUT)
    labels=np.array(indexed); palette=np.array(indexed.getpalette()).reshape(-1,3)
    clip=path_for(edge)
    inside=np.zeros(labels.shape,dtype=np.uint8);cv2.drawContours(inside,[edge],-1,1,-1)
    parts=[f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}" role="img" aria-labelledby="title desc">',
      '<title id="title">MAPLE — Multidisciplinary Aeronautics &amp; Planetary Launch Establishment</title>',
      '<desc id="desc">Outlined vector trace of the approved badge. Navy lettering and rocket over a red maple leaf on a cream circular badge. Transparent outside the badge.</desc>',
      f'<defs><clipPath id="badge"><path d="{clip}"/></clipPath></defs>',
      '<g clip-path="url(#badge)">',f'<path d="{clip}" fill="#f5f2dd"/>']
    order=sorted(range(len(palette)), key=lambda i: float(palette[i] @ np.array([0.2126,0.7152,0.0722])), reverse=True)
    ranks=np.empty(len(palette),dtype=int)
    for rank,index in enumerate(order): ranks[index]=rank
    ranked=ranks[labels]
    for rank,index in enumerate(order):
        color=palette[index]
        # Cumulative stacked regions eliminate seams between adjacent colours.
        mask=(ranked>=rank).astype(np.uint8)*inside
        contours, hierarchy=cv2.findContours(mask, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_SIMPLE)
        if hierarchy is None: continue
        paths=[]
        for i,c in enumerate(contours):
            if hierarchy[0][i][3] != -1 or cv2.contourArea(c)<6: continue
            path=path_for(c)
            child=hierarchy[0][i][2]
            while child != -1:
                path+=path_for(contours[child]);child=hierarchy[0][child][0]
            paths.append(path)
        if paths:
            fill='#'+''.join(f'{int(v):02x}' for v in color)
            # Small same-colour overlap closes raster contour sampling seams.
            parts.append(f'<path fill="{fill}" stroke="{fill}" stroke-width="0.55" stroke-linejoin="round" fill-rule="evenodd" d="{" ".join(paths)}"/>')
    parts.append('</g></svg>')
    svg='\n'.join(parts)
    (OUT/'MAPLE_Logo.svg').write_text(svg,encoding='utf-8')
    cairosvg.svg2png(bytestring=svg.encode(),write_to=str(OUT/'MAPLE_Logo_Vector_Preview.png'),output_width=2000,output_height=round(2000*h/w))
    for folder in [ROOT/'source/Images',ROOT.parent/'EscapeBackpack/Space Station Aurora/Images']:
        shutil.copy2(OUT/'MAPLE_Logo.svg',folder/'MAPLE_Logo.svg')
        # Versioned spelling avoids overwriting the pre-existing TRansparent.png.
        shutil.copy2(OUT/'MAPLE_Logo_Vector_Preview.png',folder/'MAPLE_Logo_Vector_Preview.png')
    print(f'Saved real SVG paths and transparent PNG; viewBox {w} × {h}.')

if __name__=='__main__':main()

