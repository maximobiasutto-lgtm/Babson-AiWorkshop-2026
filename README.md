# Agentic Coding for Building Product

This is your starter. By the end of the workshop you will turn it into a small,
working web product that lives at your own public URL and that a real person can use.

Your live site is whatever is in **`index.html`**. Push, and it goes live in about a minute.

## Pick a starter

Open each one in the preview to see what it does, then pick the closest to your idea:

| File | What it is | Turn it into |
|---|---|---|
| `seeds/tracker.html` | A list you add to and check off | Habit tracker, homework list, water log, workout log |
| `seeds/quiz.html` | Answer questions, get a result | A decision helper, a study quiz, a recommender |
| `seeds/gallery.html` | A wall of cards you add to | Photo wall, recommendations, a team, an event board |

`index.html` is a welcome page that links to all three. That is what publishes
until you make one of the seeds your own.

## Make it yours (the agent does the work)

1. In VS Code, open the **Chat** panel and switch the dropdown to **Agent**.
2. Give it one sentence. Name the seed you picked and the real thing you want:
   > **Example.** Start from the tracker seed and turn `index.html` into a tracker for
   > our club fundraiser that shows how close we are to our goal. Keep it to one file for now.
3. **Read what it changed.** Which file did it touch? What did it add?
4. Run it in the preview. If something is broken, that is normal. Tell the agent:
   **READ** the problem out loud, help it **FIND** where it is, **ASK** it to fix
   that specific thing, then **VERIFY** in the preview.
5. Keep steering until it works for the real person you built it for.

## Publish

1. In your repo on GitHub: **Settings -> Pages**, set **Source** to
   **GitHub Actions**. You only do this once.
2. Publish it: tell the agent **commit and push my changes** (or use the Source Control panel in VS Code).
3. The **Deploy to GitHub Pages** action runs. When it finishes, your site is live.
   Find the URL under **Settings -> Pages** or on the finished action.

You do not need to touch `.github/workflows/deploy.yml`. It publishes everything
in this repo automatically.

## Preview while you build

Right-click a file (like `index.html` or a seed in `seeds/`) and choose
**Show Preview**. Your page opens in a **new browser tab** and reloads as the agent
edits. (In a Codespace, use the browser tab, not the small in-editor pane.) You can
also open any preview from the **Ports** tab at the bottom of VS Code.

---

## Notes for the AI agent

When a student asks you to build their product, follow these rules:

- **The published site is `index.html`.** To make a chosen seed the student's
  product, put the working result in `index.html`. You may copy from a file in
  `seeds/` as your starting point.
- **Keep it to a single self-contained file for now.** Inline the CSS and JavaScript
  in `index.html`. One file is easiest to steer in a 90 minute session; the student can
  split it up later. Do not add build tools, frameworks, npm packages, or a server. This
  is a static site on GitHub Pages.
- **Do not create new folders.** The student's product is `index.html` at the repo
  root. Leave `seeds/` untouched so the other starters still work as references. If
  the student later wants extra pages, put them next to `index.html` (for example
  `about.html`) and link with relative paths.
- **Use relative paths only.** Never start a `src`, `href`, or `fetch` path with a
  leading `/`. The site may be served from a subpath, so `seeds/quiz.html` is
  correct and `/seeds/quiz.html` is not.
- **No backend, no secrets, no external accounts.** Save data with `localStorage`
  if it needs to persist. Everything runs in the browser.
- **Make small, readable changes** and explain what you changed so the student can
  follow along.
