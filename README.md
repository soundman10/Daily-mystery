# 🔎 The Daily Mystery

A new detective game every day. Search the scene, question the suspects, compare their alibis, and catch the culprit before you run out of guesses.

**Play it:** [https://soundman10.github.io/Daily-mystery/]

## How to play

1. **Search** the rooms to collect evidence.
2. **Question** each suspect. Not every statement is true.
3. **Accuse** the culprit. You get three guesses.

Cases are meant to be solved by comparing clues, not by trusting any single one. After each case you get a spoiler-free result (🟥🟥🟩) to share.

Results, streaks and the archive are saved in the player's own browser, so nothing is stored on a server.

## How it works

- No backend, no build step, no dependencies. Just plain HTML, CSS and JavaScript.
- Every case is a data object in `cases.js`. The page shows the case whose `date` matches today's date (in the visitor's local time).
- Past cases stay available in the archive. Future-dated cases stay hidden until their day.

```
index.html   the website and game engine
cases.js     all the cases
```

## Adding a new case

1. Open `cases.js` and copy the last case object.
2. Change the `date` (format `YYYY-MM-DD`) and rewrite the content.
3. Keep the comma between cases, then save and redeploy.

Each case has these fields:

| Field | What it does |
| --- | --- |
| `date` | The day the case goes live |
| `title`, `intro` | The case name and the opening story |
| `clues` | Every clue, as `id: text` |
| `rooms` | Places to search. `c` lists the clue ids found there |
| `suspects` | Name, role, their statement (`st`), and `clr`, the clue id that clears them (`null` for the culprit) |
| `culprit` | The id of the guilty suspect |
| `solution` | The reveal: who it was, a summary, and the explanation points |

**Writing a fair case:** give every innocent suspect at least one clue that clears them, give the culprit none, and add a red herring or two. A good case has a trap, such as a clue that points to the wrong person until you notice a detail.

### Preview a case before it goes live

Open the site with the date in the link:

```
https://your-site.example/?date=2026-10-14
```

## Hosting

Any static host works. Upload the folder or push it to a repo:

- **GitHub Pages:** Settings → Pages → deploy from the main branch.
- **Netlify Drop:** drag the folder onto app.netlify.com/drop.
- **Cloudflare Pages:** create a project and use direct upload.

To publish a new case, update `cases.js` and redeploy.
