#!/usr/bin/env python3
"""Add a quiz to the shelf.

Usage:
    python3 add.py path/to/quiz.html "Category" ["Note"] [--title "Title"]

What it does:
  1. Copies the quiz into the quizzes/ folder (if it isn't already there).
  2. Adds one line for it to links.js.

The title defaults to the quiz page's own <title>. A category name that does not
exist yet becomes a new category automatically.

Example:
    python3 add.py ~/Downloads/conditional-practice.html "Verb forms" "20 sentences"
"""
import argparse
import html
import json
import re
import shutil
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
QUIZZES = HERE / "quizzes"
LINKS = HERE / "links.js"
MARKER = "// ADD NEW LINKS ABOVE THIS LINE"


def page_title(path: Path) -> str:
    text = path.read_text(encoding="utf-8", errors="replace")
    m = re.search(r"<title>(.*?)</title>", text, re.I | re.S)
    return html.unescape(m.group(1).strip()) if m else path.stem.replace("-", " ").title()


def main() -> int:
    ap = argparse.ArgumentParser(description="Add a quiz to the shelf.")
    ap.add_argument("quiz", help="path to the quiz .html file")
    ap.add_argument("category", help='category name, e.g. "Verb forms"')
    ap.add_argument("note", nargs="?", default="", help="optional note under the title")
    ap.add_argument("--title", help="title on the shelf (default: the page's own <title>)")
    args = ap.parse_args()

    src = Path(args.quiz).expanduser().resolve()
    if not src.is_file() or src.suffix.lower() != ".html":
        print(f"Not an .html file: {src}")
        return 1

    QUIZZES.mkdir(exist_ok=True)
    dest = QUIZZES / src.name
    if src != dest:
        if dest.exists():
            print(f"{dest.name} already exists in quizzes/. Rename the file or delete the old one first.")
            return 1
        shutil.copy2(src, dest)
        print(f"Copied to quizzes/{dest.name}")

    rel = f"quizzes/{dest.name}"
    text = LINKS.read_text(encoding="utf-8")
    if MARKER not in text:
        print(f"Could not find the marker line in links.js:\n  {MARKER}")
        return 1
    if json.dumps(rel) in text:
        print(f"{rel} is already listed in links.js.")
        return 1

    title = args.title or page_title(dest)
    entry = (
        "    { title: %s, file: %s, category: %s, note: %s },\n"
        % (
            json.dumps(title, ensure_ascii=False),
            json.dumps(rel),
            json.dumps(args.category, ensure_ascii=False),
            json.dumps(args.note, ensure_ascii=False),
        )
    )
    idx = text.index(MARKER)
    line_start = text.rfind("\n", 0, idx) + 1
    LINKS.write_text(text[:line_start] + entry + text[line_start:], encoding="utf-8")
    print(f'Added "{title}" under "{args.category}".')
    return 0


if __name__ == "__main__":
    sys.exit(main())
