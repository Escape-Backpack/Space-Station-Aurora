"""Export approved icon 01; the historical command no longer recreates variants."""
from pathlib import Path
import shutil
import cairosvg
ROOT = Path(__file__).resolve().parents[1]
MASTER = ROOT / 'source/Brand/icon.svg'

def main():
    png = MASTER.with_suffix('.png')
    cairosvg.svg2png(url=str(MASTER), write_to=str(png))
    for folder in [ROOT.parent / 'EscapeBackpack/Space Station Aurora/Brand', ROOT.parent / 'brand/aurora']:
        folder.mkdir(parents=True, exist_ok=True)
        shutil.copy2(MASTER, folder / 'icon.svg')
        shutil.copy2(png, folder / 'icon.png')
    for target in [ROOT.parent / 'escape-backpack-games/assets/aurora-icon.png', ROOT.parent / 'escapepack-site/design/aurora/files/source/Brand/icon.png']:
        if target.parent.exists():
            shutil.copy2(png, target)
    print('Exported approved Aurora icon 01; no alternate icons generated.')

if __name__ == '__main__':
    main()
