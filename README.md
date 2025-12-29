# Project Setup

```
D:\gp>pnpm create vite@latest practice-js --template vanilla
.../19b69d6f07b-627c                     |   +1 +
.../19b69d6f07b-627c                     | Progress: resolved 1, reused 0, downloaded 1, added 1, done
|
o  Use rolldown-vite (Experimental)?:
|  No
|
o  Install with pnpm and start now?
|  Yes
|
o  Scaffolding project in D:\gp\practice-js...
|
o  Installing dependencies with pnpm...

   ╭──────────────────────────────────────────╮
   │                                          │
   │   Update available! 10.23.0 → 10.26.2.   │
   │   Changelog: https://pnpm.io/v/10.26.2   │
   │     To update, run: pnpm self-update     │
   │                                          │
   ╰──────────────────────────────────────────╯

Packages: +14
++++++++++++++
Progress: resolved 60, reused 8, downloaded 6, added 14, done

devDependencies:
+ vite 7.3.0
```

---

## Add Tailwind (modern Vite plugin setup — no PostCSS directives)

### 🆕 What’s _actually new_ in Tailwind (important concept)

```css
@import "tailwindcss";
```

The Vite Tailwind plugin internally expands this into:

- base
- components
- utilities

---

### Dev dependencies (minimum)

```bash
pnpm add -D tailwindcss @tailwindcss/vite
```

👉 Notice:
❌ `postcss`
❌ `autoprefixer`
are **no longer required explicitly** in this path.

---

### `vite.config.js`

In the project root create `vite.config.js` with the below content:

```js
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
});
```

---

### `src/style.css`

```css
@import "tailwindcss";
```

That’s it. Clean. Modern. Zero ceremony.

---

## Add Axios (HTTP Client)

```sh
pnpm add axios
```
