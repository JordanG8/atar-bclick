---
description: How to add jaw-dropping 3D elements, AI-generated video, and premium design patterns to landing pages using Spline, Freepik Kling, and the taste-skill philosophy
---

# 3D Premium Landing Page Workflow

This skill documents the full workflow for creating immersive 3D landing page hero sections with interactive Spline scenes, AI-generated video backgrounds, and premium design patterns.

## Prerequisites

The following packages must be in `package.json`:

```
@splinetool/react-spline
@splinetool/runtime
framer-motion
lucide-react
```

If missing, install them:
```bash
npm install @splinetool/react-spline @splinetool/runtime framer-motion lucide-react
```

## Architecture

### Component Structure (RSC Safety)

- **Server Components** render static layout (`page.tsx`)
- **Interactive client components** are isolated leaf components with `"use client"` at the top
- The Spline 3D scene MUST be in its own isolated client component (`SplineScene.tsx`)
- The Hero component is `"use client"` because it uses framer-motion animations

### File Layout

```
app/
  components/
    Hero.tsx           # Main hero section (client component)
    SplineScene.tsx    # Isolated Spline 3D loader (client component)
  globals.css          # Utility classes (mesh-gradient, liquid-glass, kinetic-marquee)
  page.tsx             # Server component, imports Hero
```

## Step 1: Create SplineScene Component

Create `app/components/SplineScene.tsx` — an isolated client component that lazy-loads the Spline viewer:

```tsx
"use client";
import React, { Suspense } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function SplineScene() {
  return (
    <div className="w-full h-full relative">
      <Suspense fallback={<LoadingSkeleton />}>
        <Spline
          scene="https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </Suspense>
    </div>
  );
}
```

**Finding a Spline Scene:**
1. Go to https://app.spline.design/community
2. Search for "abstract", "gradient", "interactive", "particles", etc.
3. Click a scene → click "Remix" or "Open" to get access
4. In the Spline editor, click Export → Web Content → Public URL
5. Copy the `prod.spline.design/XXXXX/scene.splinecode` URL
6. For transparent background: In Spline, go to Play Settings → uncheck "Show Background"

**IMPORTANT:** The scene URL MUST be a **published public URL** from the Spline editor's Export panel. Community file UUIDs (like `306ca2a5-d1ab-46ac-a27c-198575c82db0`) do NOT work directly — you must remix and publish your own copy.

**Current working scene:** `https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode`

## Step 2: Generate AI Background Video (Freepik Kling)

### Generate a Source Image

Use the `generate_image` tool to create a reference image matching your landing page aesthetic:

```
Prompt example: "Cinematic dark scene with abstract 3D floating geometric shapes,
deep navy blue background with subtle gold accent lighting, premium tech aesthetic, 8k"
```

### Submit to Freepik Kling API

Use `generate_hero_video.mjs` (local script, gitignored):

```javascript
const API_KEY = "YOUR_FREEPIK_API_KEY"; // Never commit this
const response = await fetch("https://api.freepik.com/v1/ai/image-to-video/kling-v2", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-freepik-api-key': API_KEY,
  },
  body: JSON.stringify({
    image: base64Image,  // data:image/png;base64,...
    prompt: "Your motion prompt here",
    duration: "5",
  })
});
```

### Poll for Completion

The API returns a `task_id`. Poll every 10 seconds:

```javascript
const statusRes = await fetch(
  `https://api.freepik.com/v1/ai/image-to-video/kling-v2/${taskId}`,
  { headers: { 'x-freepik-api-key': API_KEY } }
);
// When status === "COMPLETED", download from data.generated[0]
```

### Download to Public Folder

```javascript
const buf = Buffer.from(await videoBlobRes.arrayBuffer());
fs.writeFileSync('public/hero-video.mp4', buf);
```

**Typical generation time:** 2-5 minutes. Free tier has limited daily quota.

## Step 3: Build the Hero Section

Follow these **taste-skill** principles:

### Layout Rules
- **NEVER center everything.** Use asymmetric split-screen (DESIGN_VARIANCE > 4)
- Use `min-h-[100dvh]` instead of `h-screen` (prevents mobile Safari layout jump)
- Use CSS Grid (`grid grid-cols-1 lg:grid-cols-12`) for the split layout
- Contain with `max-w-[1400px] mx-auto`

### Design Patterns

**Liquid Glass (frosted glass with refraction):**
```css
.liquid-glass {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 4px 24px rgba(0, 0, 0, 0.2);
}
```

**Mesh Gradient Animated Blobs:**
```css
.mesh-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;
  animation: meshFloat 14s ease-in-out infinite;
}
```

**Kinetic Marquee (infinite scrolling text):**
```css
.kinetic-marquee {
  animation: marqueeScroll 30s linear infinite;
}
@keyframes marqueeScroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.333%); }
}
```
Render the items 3x in JSX to create seamless loop.

### Animation Rules
- Use `staggerChildren: 0.15` for cascade reveals
- Use spring physics for CTAs: `type: "spring", stiffness: 200, damping: 20`
- Use `useMotionValue` + `useSpring` for continuous mouse-tracking (NOT useState)
- Add `as const` to ease arrays to fix TypeScript: `ease: [0.22, 1, 0.36, 1] as const`

### Video Background Layer
```tsx
<video autoPlay loop muted playsInline
  className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-lighten"
  src="/hero-video.mp4"
/>
```
Always add gradient overlays on top for text readability.

## Step 4: Dynamic Import for Spline

Use `next/dynamic` with `ssr: false` in the Hero component:

```tsx
const SplineScene = dynamic(() => import("./SplineScene"), {
  ssr: false,
  loading: () => <SkeletonLoader />,
});
```

This prevents SSR hydration issues with the WebGL canvas.

## Step 5: Git Safety

**ALWAYS gitignore:**
- All `.mjs` scripts containing API keys
- `endpoints_results.json` or any API response dumps
- `node_modules/` in sub-projects

**NEVER commit Freepik API keys.** The key format is `FPSX...`.

## Anti-Patterns to Avoid

1. **Centered text over dark image** — use asymmetric split-screen instead
2. **Default placeholder videos** — generate custom AI video matching the brand
3. **Static hero** — add mesh gradients, kinetic marquee, spring-physics CTAs
4. **Simple cube Spline scene** — find/create a premium interactive scene
5. **Emojis in code** — use Lucide/Phosphor icons instead
6. **`h-screen`** — use `min-h-[100dvh]` for mobile safety
7. **Committing API keys** — gitignore all generation scripts

## Verification Checklist

- [ ] `npm run build` compiles with zero errors
- [ ] Spline 3D scene loads and is interactive (mouse drag)
- [ ] Video plays in background
- [ ] Kinetic marquee scrolls infinitely
- [ ] Responsive: stacks properly on mobile viewports
- [ ] No API keys in tracked files
