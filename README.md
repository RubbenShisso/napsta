# NAPSTA

NAPSTA is a luxury editorial-style brand website built for a high-end cultural and access platform. The experience blends a premium dark aesthetic, art-led storytelling, and tailored concierge messaging into a polished multi-page experience.

This project is built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and React Router. It is designed to feel premium, editorial, and mobile-responsive while remaining fast and lightweight for deployment.

## Overview

NAPSTA presents a refined digital identity around:

- people and cultural access
- contemporary art and curation
- bespoke concierge services
- private experiences and private client enquiries
- founder-led storytelling and trust-building

The site includes multiple branded sections such as the home landing experience, collection showcase, concierge services, art index, experiences, about page, privacy page, and an enquiry flow.

## Tech Stack

- React 19
- Vite 8
- TypeScript
- Tailwind CSS
- React Router
- Framer Motion
- Lucide React
- ESLint

## Features

- Luxury editorial layout with premium dark palette
- Responsive navigation and mobile-friendly structure
- Animated section reveals and route transitions
- Multi-page routing for all major brand pages
- Curated art collection cards and modal previews
- Referral-style agency and concierge messaging
- Enquiry form with UI validation and client-side flow
- SEO-friendly document title handling
- Scroll-to-top behavior on route changes
- Local image assets for reliable visual rendering
- Ready for deployment on Vercel or similar hosts

## Pages Included

- Home
- Concierge
- Art
- Connections
- Experiences
- About
- Enquiry
- Privacy

## Project Structure

```bash
napsta/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── images/
│       ├── art.svg
│       ├── artwork-1.svg
│       ├── artwork-2.svg
│       ├── artwork-3.svg
│       ├── city.svg
│       ├── concierge.svg
│       ├── connections.svg
│       ├── experiences.svg
│       ├── napsta-about.svg
│       ├── napsta-hero.svg
│       └── sculpture.svg
├── src/
│   ├── components/
│   │   ├── CollectionCard.tsx
│   │   ├── Footer.tsx
│   │   ├── FounderSection.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── PageTransition.tsx
│   │   ├── PrivateEnquiryCTA.tsx
│   │   ├── SectionHeader.tsx
│   │   └── ServiceCard.tsx
│   ├── data/
│   │   ├── artworks.ts
│   │   └── services.ts
│   ├── hooks/
│   │   └── useDocumentTitle.ts
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── Art.tsx
│   │   ├── Concierge.tsx
│   │   ├── Connections.tsx
│   │   ├── Enquiry.tsx
│   │   ├── Experiences.tsx
│   │   ├── Home.tsx
│   │   └── Privacy.tsx
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── App.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## Local Development

### Install dependencies

```bash
npm install
```

### Run the application locally

```bash
npm run dev
```

The app should start on a local Vite dev server, commonly at:

```bash
http://localhost:5173
```

### Production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Available Scripts

```bash
npm run dev      # start local development server
npm run build    # generate production build
npm run preview  # preview the built app locally
npm run lint     # run ESLint checks
```

## Styling and Brand System

The design system is built around a premium luxury palette using Tailwind variables and custom theme tokens. Key styling conventions include:

- deep black / charcoal backgrounds
- warm ivory typography
- muted stone tones
- gold-accent highlights
- editorial serif typography for headings
- uppercase tracking for luxury brand cues

This is configured in the global styles and is central to the NAPSTA identity.

## Route Behavior

The app uses React Router with route transitions and scroll reset logic. Every page change triggers a page refresh in the browser scroll position to keep navigation feeling clean and intentional.

## Notes on Images

Local SVG artwork and placeholder brand visuals are stored in the public images directory to avoid broken assets and provide a stable experience in local builds and deployments.

## Deployment

This app is Vercel-ready and can be deployed directly from the project root using a standard Vite React setup.

### Recommended deployment steps

1. Push the project to a GitHub repository.
2. Import the repository into Vercel.
3. Keep the default settings for Vite projects.
4. Deploy.

If using Vercel, standard framework detection should work without custom build configuration.

## Customization

To adapt the site for a real production brand or client, you may want to update:

- brand copy in the components and page metadata
- art collection data in `src/data/artworks.ts`
- service descriptions in `src/data/services.ts`
- app titles and meta logic in the page hooks
- imagery and placeholders in `public/images`
- header links and navigation labels in `src/components/Header.tsx`

## License

This project is intended for portfolio or brand-demo use unless otherwise specified. If you are deploying this for a commercial product, confirm the correct licensing and asset ownership for all visual content used.

## Project Status

This project is a polished front-end implementation for a luxury editorial brand experience and is ready for further expansion, content updates, or production deployment.

## Related Commands

```bash
git init
git add .
git commit -m "Initial NAPSTA build"
git remote add origin <repo-url>
git push -u origin main
```

## Summary

NAPSTA is designed to feel like a premium digital journal for culture, art, access, and private experiences. It combines storytelling, elevated design, and curated luxury interactions to present a strong editorial identity for a modern cultural platform.

