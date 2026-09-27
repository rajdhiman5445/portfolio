#!/usr/bin/env python3
import os
import re
import json
import subprocess
from PIL import Image

PHOTOS_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "photos")
JSON_PATH = os.path.join(os.path.dirname(__file__), "..", "content", "photography.json")

def get_aspect_ratio(w, h):
    ratio = w / h
    if abs(ratio - 16/9) < 0.15:
        return "16/9"
    elif abs(ratio - 4/3) < 0.12:
        return "4/3"
    elif abs(ratio - 3/2) < 0.12:
        return "3/2"
    elif abs(ratio - 1) < 0.12:
        return "1/1"
    elif abs(ratio - 4/5) < 0.12:
        return "4/5"
    elif abs(ratio - 9/16) < 0.15:
        return "9/16"
    elif abs(ratio - 2/3) < 0.12:
        return "2/3"
    elif abs(ratio - 3/4) < 0.12:
        return "3/4"
    elif ratio > 1.8:
        return "21/9"
    elif ratio > 1:
        return f"{round(ratio, 2)}:1"
    else:
        return f"1:{round(1/ratio, 2)}"

def clean_title_str(raw):
    # Strip common prefixes like 'A photo of', 'A picture of', 'A group of', etc.
    raw = re.sub(r'^(A|An)\s+', '', raw, flags=re.IGNORECASE)
    # Capitalize nicely
    words = raw.split()
    if not words:
        return "Untitled Observation"
    return " ".join(w.capitalize() if w.lower() not in {"a", "an", "the", "and", "but", "or", "for", "nor", "on", "at", "to", "from", "by", "over", "in", "of", "with"} or i == 0 else w.lower() for i, w in enumerate(words))

def infer_series(title):
    t = title.lower()
    if "night" in t or "lit up" in t or "dark" in t or "light" in t or "twilight" in t or "evening" in t:
        return "Night Studies"
    elif "black and white" in t or "monochrome" in t or "silhouette" in t or "shadow" in t:
        return "Monochrome"
    elif "building" in t or "architecture" in t or "facade" in t or "concrete" in t or "facades" in t:
        return "Urban Geometry"
    elif "street" in t or "walking" in t or "people" in t or "commute" in t or "city" in t or "transit" in t:
        return "Street & Motion"
    else:
        return "Observations"

def main():
    # Load existing to preserve manual overrides if any
    existing_by_uid = {}
    if os.path.exists(JSON_PATH):
        try:
            with open(JSON_PATH, "r") as f:
                old_list = json.load(f)
                for item in old_list:
                    # check if uid is in imageUrl or id
                    existing_by_uid[item.get("id")] = item
        except Exception:
            pass

    files = sorted(os.listdir(PHOTOS_DIR))
    entries = []

    for filename in files:
        if not (filename.endswith(".jpg") or filename.endswith(".jpeg") or filename.endswith(".png") or filename.endswith(".webp")):
            continue
        
        # Match unsplash ID
        # e.g. raj-dhiman-09b08JARM_M-unsplash (1).jpg or raj-dhiman-0ww-fJ9E3Wg-unsplash.jpg
        m = re.search(r'raj-dhiman-([a-zA-Z0-9_-]+)-unsplash', filename)
        if m:
            uid = m.group(1)
        else:
            uid = os.path.splitext(filename)[0]

        # Clean filename to URL-safe standard: raj-dhiman-{uid}.jpg
        ext = os.path.splitext(filename)[1].lower()
        clean_name = f"raj-dhiman-{uid}{ext}"
        old_path = os.path.join(PHOTOS_DIR, filename)
        new_path = os.path.join(PHOTOS_DIR, clean_name)
        if old_path != new_path:
            os.rename(old_path, new_path)
            print(f"Renamed: {filename} -> {clean_name}")
        
        # Image dimensions and ratio
        with Image.open(new_path) as img:
            w, h = img.size
            aspect_ratio = get_aspect_ratio(w, h)

        # Check if already in existing
        slug = f"photo-{uid.lower()}"
        existing = existing_by_uid.get(slug) or existing_by_uid.get(uid)

        if existing and existing.get("title") and not existing.get("title").startswith("The City Between"):
            entry = existing
            entry["imageUrl"] = f"/photos/{clean_name}"
            entry["aspectRatio"] = aspect_ratio
            entry["links"]["highRes"] = f"/photos/{clean_name}"
            entries.append(entry)
            continue

        # Fetch title from Unsplash
        print(f"Fetching metadata for {uid}...")
        unsplash_url = f"https://unsplash.com/photos/{uid}"
        title = ""
        try:
            out = subprocess.check_output(
                ["curl", "-sL", unsplash_url],
                timeout=10
            ).decode("utf-8", errors="ignore")
            tm = re.search(r'<title>(.*?) - Free Photo on Unsplash</title>', out)
            if tm:
                title = clean_title_str(tm.group(1).strip())
        except Exception as e:
            print(f"Curl error for {uid}: {e}")

        if not title:
            title = f"Study in {aspect_ratio}"

        series = infer_series(title)
        clean_slug = re.sub(r'[^a-z0-9]+', '-', title.lower()).strip('-')
        if not clean_slug:
            clean_slug = f"photo-{uid.lower()}"
        else:
            clean_slug = f"{clean_slug}-{uid[:6].lower()}"

        notes = f"Captured as part of the '{series}' archive. Exploring light, fleeting momentum, and the texture of spaces when observed with stillness."

        entry = {
            "id": clean_slug,
            "title": title,
            "series": series,
            "year": "2024",
            "location": "Toronto, Canada",
            "camera": "Sony A7 IV",
            "imageUrl": f"/photos/{clean_name}",
            "aspectRatio": aspect_ratio,
            "links": {
                "unsplash": unsplash_url,
                "highRes": f"/photos/{clean_name}"
            },
            "notes": notes
        }
        entries.append(entry)

    with open(JSON_PATH, "w") as f:
        json.dump(entries, f, indent=2)

    print(f"\nSuccessfully generated {len(entries)} photo entries in {JSON_PATH}")

if __name__ == "__main__":
    main()
