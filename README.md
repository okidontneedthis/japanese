# Nihongo Shelf

A page that lists your Japanese practice quizzes by category. It is plain HTML, so it runs
from a folder on your computer and on GitHub Pages. There is nothing to install.

```
nihongo-shelf/
  index.html     the shelf page
  links.js       the list of quizzes and categories
  add.py         optional helper that adds a quiz in one command
  quizzes/       one .html file per quiz
```

## Open it

Double-click `index.html`. It opens in your browser.

## Add a new quiz

**Option 1: one command** (needs Python 3)

```
python3 add.py ~/Downloads/new-quiz.html "Verb forms" "20 sentences"
```

This copies the file into `quizzes/` and adds a line to `links.js`. The title comes from the
quiz page's own title. Add `--title "My title"` to change it.

**Option 2: by hand**

1. Put the quiz `.html` file in the `quizzes/` folder.
2. Open `links.js` and add a line above the `ADD NEW LINKS ABOVE THIS LINE` marker:

   ```js
   { title: "Conditional forms", file: "quizzes/conditional-practice.html", category: "Verb forms", note: "20 sentences" },
   ```

A category name that doesn't exist yet becomes a new category. To control the order the
categories appear in, list them in the `categories` array at the top of `links.js`.

To link to a web page instead of a local file, use `url: "https://..."` in place of `file`.

## Put it on GitHub

```
cd nihongo-shelf
git init
git add .
git commit -m "Add Nihongo Shelf"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/nihongo-shelf.git
git push -u origin main
```

Then in the repository on GitHub: **Settings > Pages > Build and deployment**, set the source to
**Deploy from a branch**, choose **main** and **/ (root)**, and save. After a minute the shelf is at
`https://YOUR-USERNAME.github.io/nihongo-shelf/`.

GitHub Pages is free for public repositories. Private repositories need a paid GitHub plan for
Pages. Anyone can read the files in a public repository.

After the first push, adding a quiz is: add it, then `git add .`, `git commit -m "Add quiz"`,
`git push`.
