# Security Policy

## Known Vulnerabilities

We use `react-syntax-highlighter@15.6.1` which pulls in `prismjs@1.29.0`.

- `npm audit` reports a moderate **DOM Clobbering** vulnerability in `prismjs`
- This is not exploitable in our context, because:
  - We do **not** render user-supplied HTML
  - We only use Prism for trusted, static code examples in Markdown
  - We sanitize or escape any dynamic input (planned for future comment system)

## Why We Didn't Auto-Fix

Running `npm audit fix --force` installs `react-syntax-highlighter@5.x`, which:
- Breaks all theme imports (`materialLight`, etc.)
- Removes style modules
- Requires a complete rewrite of code style setup

This is a known tradeoff. We will update dependencies when a safe fix becomes available.

---

## Safe Use Guidelines

If we add a comment system or allow public Markdown, we will:
- Sanitize input using libraries like `DOMPurify`
- Never allow inline `<script>` or `on*` attributes
- Escape output or run in isolated rendering components

---

## Audit Output Suppressed

We’ve disabled `npm audit` in `.npmrc` for local development noise reduction.
