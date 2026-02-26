# 🎨 Branding & Styling Documentation

## 📌 Overview

This project uses a centralized global styling system combining:

-   Tailwind CSS
-   Custom CSS utilities
-   Google Fonts
-   Brand color systems (Renaissance Park & Vespera)
-   Light/Dark mode support

------------------------------------------------------------------------

# 1️⃣ Tailwind Integration

Tailwind is imported globally:

``` css
@import "tailwindcss";
```

Tailwind handles layout, spacing, responsiveness, and utility styling.

------------------------------------------------------------------------

# 2️⃣ Typography System

## Google Fonts Included

-   Playfair Display
-   Raleway
-   Nunito

### Utility Classes

``` css
.font-playfair { font-family: "Playfair Display", serif; }
.font-raleway { font-family: "Raleway", sans-serif; }
.font-nunito { font-family: "Nunito", sans-serif; }
```

### Usage

``` html
<h1 class="font-playfair">Luxury Living</h1>
<p class="font-nunito">Modern comfort meets elegance.</p>
```

------------------------------------------------------------------------

# 3️⃣ Theme Variables (Light & Dark Mode)

## Root Variables

``` css
:root {
  --background: #ffffff;
  --foreground: #171717;
}
```

## Dark Mode

``` css
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}
```

Applied globally:

``` css
body {
  background: var(--background);
  color: var(--foreground);
}
```

------------------------------------------------------------------------

# 4️⃣ Button System

## Base Button

``` css
button {
  padding: 10px 25px;
  border-radius: 10px;
  border: 1px solid black;
  cursor: pointer;
}
```

## Variants

-   `.btn-primary`
-   `.btn-secondary`
-   `.btn-danger`
-   `.btn-success`
-   `.btn-warning`
-   `.btn-info`

------------------------------------------------------------------------

# 5️⃣ Renaissance Park Branding

  Class                Hex
  -------------------- ---------
  `.bg-accent-rp`      #0A352D
  `.bg-secondary-rp`   #B18343
  `.bg-primary-rp`     #EAE1D4

Example:

``` html
<div class="bg-accent-rp text-white">
  Renaissance Park Section
</div>
```

------------------------------------------------------------------------

# 6️⃣ Vespera Branding

  Class                     Hex
  ------------------------- ---------
  `.bg-accent-vespera`      #204499
  `.bg-secondary-vespera`   #9DAED0
  `.bg-primary-vespera`     #FBFBFB

Example:

``` html
<div class="bg-accent-vespera text-white">
  Vespera Section
</div>
```

------------------------------------------------------------------------

# 7️⃣ Layout Utilities

## Page Container

``` css
.page {
  width: 100%;
  height: 100dvh;
}
```

## Flex Helpers

-   `.flex-row-center`
-   `.flex-col-center`
-   `.flex-start`
-   `.flex-space-between`
-   `.flex-right`
-   `.flex-left`

------------------------------------------------------------------------

# 🏛️ Branding Strategy

This system supports two brand identities in one codebase:

1.  Renaissance Park (Luxury, Earth-tone theme)
2.  Vespera (Modern, Blue corporate theme)

Brand identity is controlled via utility classes rather than hardcoded
colors.

------------------------------------------------------------------------

# 🚀 Best Practices

-   Use Tailwind for layout first
-   Use brand classes for color consistency
-   Avoid hardcoded colors in components
-   Keep branding centralized
-   Maintain consistent spacing and typography
