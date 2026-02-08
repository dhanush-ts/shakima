import os
from PIL import Image
import tempfile

# -------- CONFIG --------
TARGET_SIZE_KB = 300
START_QUALITY = 90
MIN_QUALITY = 30
QUALITY_STEP = 10

IMAGE_EXTENSIONS = (".webp", ".jpg", ".jpeg", ".png")
# ------------------------

def get_size_kb(path):
    return os.path.getsize(path) / 1024


def compress_until_target(path):
    original_size = get_size_kb(path)

    if original_size <= TARGET_SIZE_KB:
        return

    try:
        img = Image.open(path).convert("RGB")
    except Exception as e:
        print(f"❌ Cannot open {path}: {e}")
        return

    quality = START_QUALITY
    directory = os.path.dirname(path)

    while quality >= MIN_QUALITY:
        # Create temp file
        with tempfile.NamedTemporaryFile(
            suffix=".webp",
            delete=False,
            dir=directory
        ) as tmp:
            temp_path = tmp.name

        img.save(
            temp_path,
            "WEBP",
            quality=quality,
            optimize=True,
            method=6
        )

        new_size = get_size_kb(temp_path)

        print(
            f"🔄 {os.path.basename(path)} | "
            f"{round(original_size)}KB → {round(new_size)}KB | Q={quality}"
        )

        if new_size <= TARGET_SIZE_KB:
            img.close()
            os.replace(temp_path, path)  # atomic replace
            print(f"✅ Done: {os.path.basename(path)}")
            return

        os.remove(temp_path)
        quality -= QUALITY_STEP

    img.close()
    print(f"⚠️ Min quality reached, could not reduce further: {os.path.basename(path)}")


def process_folder(folder):
    for file in os.listdir(folder):
        if file.lower().endswith(IMAGE_EXTENSIONS):
            compress_until_target(os.path.join(folder, file))


if __name__ == "__main__":
    FOLDER = "duplic_public/"

    if not os.path.isdir(FOLDER):
        print("❌ Invalid folder path")
        exit()

    print("🚀 Enforcing image size limit...\n")
    process_folder(FOLDER)
    print("\n🎉 All images processed!")
