# Mohomed Haflullah — Portfolio

A colorful, animated, single-purpose portfolio built to target Project Coordinator, PMO,
Scrum Master, Project Manager, Associate PM, and Document Controller roles.

## File structure

```
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── images/          ← add your real screenshots here (see below)
```

## Publish to GitHub Pages (haflullah.github.io)

1. In your `haflullah.github.io` repo, delete the old files (or start fresh) and add these
   four items: `index.html`, `css/styles.css`, `js/script.js`, and an `images/` folder.
2. Add your real project screenshots to `images/` using **these exact filenames** (already
   wired into the page):
   - `images/Agile_Trello_Client_Project_Board.png`
   - `images/Notion_PM_Project_Portfolio_MM_Caterings.png`
   - `images/Agile_Jira_Kanban_Board.png`
   - `images/Agile_Jira_Project_Timeline.png`
3. Commit and push to the `main` branch.
4. In **Settings → Pages**, confirm the source is `main` / `root`. Your site will be live at
   `https://haflullah.github.io` within a minute or two.

If an image isn't in the repo yet, the page shows a styled placeholder instead of a broken
image icon, so the site never looks broken while you're adding screenshots.

## Editing content

All text content (bio, experience, projects, certifications, skills) lives in the `DATA`
section at the top of `js/script.js` — edit the arrays there and the page re-renders
automatically. Colors and type live in `css/styles.css` under `:root` at the top if you want
to adjust the palette.

## Local preview

No build step needed — just open `index.html` in a browser, or run a tiny local server:

```
npx serve .
```
