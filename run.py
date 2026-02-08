import os
from PIL import Image

# ---------------- CONFIG ----------------
INPUT_DIR = "public"
OUTPUT_DIR = "duplic_public"
SIZE_LIMIT_KB = 500

QUALITY_HIGH = 90   # for small images
QUALITY_COMPRESS = 70  # for large images
# ----------------------------------------

os.makedirs(OUTPUT_DIR, exist_ok=True)

SUPPORTED_FORMATS = (".png",)


def convert_image(file_path):
    file_size_kb = os.path.getsize(file_path) / 1024

    quality = QUALITY_HIGH if file_size_kb <= SIZE_LIMIT_KB else QUALITY_COMPRESS

    try:
        img = Image.open(file_path).convert("RGB")

        filename = os.path.splitext(os.path.basename(file_path))[0]
        output_path = os.path.join(OUTPUT_DIR, f"{filename}.webp")

        img.save(
            output_path,
            "webp",
            quality=quality,
            optimize=True,
            method=6
        )

        print(
            f"✔ {filename} | {round(file_size_kb)} KB → "
            f"{round(os.path.getsize(output_path)/1024)} KB | Q={quality}"
        )

    except Exception as e:
        print(f"❌ Failed {file_path}: {e}")


def process_images():
    for file in os.listdir(INPUT_DIR):
        if file.lower().endswith(SUPPORTED_FORMATS):
            convert_image(os.path.join(INPUT_DIR, file))


if __name__ == "__main__":
    print("🚀 Converting + Compressing Images...")
    process_images()
    print("✅ Done!")
