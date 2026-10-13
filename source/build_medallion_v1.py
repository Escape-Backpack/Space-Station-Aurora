"""Build Aurora station medallion, with the approved shared engraved back."""
from pathlib import Path
import sys, json

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets/medallion"
sys.path.insert(0, str(OUT))
sys.path.insert(0, str(ROOT / "source"))
import medallion_cad as cad
from themed_medallion_fronts_v1 import FRONTS

def main():
    reference = OUT / "sources/Identity_Reference.svg"
    front, trace = FRONTS["Aurora"](reference)
    # Remove sub-nozzle Boolean seams before float32 STL export.
    front = front.simplify(.005, preserve_topology=True)
    trace["outline_simplification_mm"] = .005
    if not front.is_valid or cad.radial_extent(front) > 23.01:
        raise ValueError("Invalid front or relief outside the safe face")
    report, checks = cad.build_model(
        OUT, "Aurora", "v1", front, trace, "Aurora_Medallion_v1_Preview.png",
        "Yellow relief: station hub, modules and solar arrays")
    trace["reference"] = "assets/medallion/sources/Identity_Reference.svg" if reference else None
    report["front_trace"] = trace
    (OUT / "geometry_report_v1.json").write_text(json.dumps(report, indent=2)+"\n")
    files = [
        OUT / "STL/Aurora_Medallion_OnePiece_v1.stl",
        OUT / "STL/Aurora_Back_Lettering_Test_1.2mm_v1.stl",
        OUT / "Front_Relief_v1.svg", OUT / "Back_Engraving_v1.svg",
        OUT / "Aurora_Medallion_v1_Preview.png", OUT / "geometry_report_v1.json",
        OUT / "mesh_check_v1.json", OUT / "lettering_test_mesh_check_v1.json",
        OUT / "README_v1.md", OUT / "medallion_cad.py",
        Path(__file__).resolve(), ROOT / "source/themed_medallion_fronts_v1.py",
    ]
    if reference: files.append(reference)
    cad.package_files(ROOT, OUT / "Aurora_Medallion_Print_Files_v1.zip", files)
    print(json.dumps({"model":"Aurora v1","mesh":checks}, indent=2))

if __name__ == "__main__":
    main()
