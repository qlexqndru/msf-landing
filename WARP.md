# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Next.js 15.5.2 landing page for the Moldova Security Forum 2025, built with TypeScript, Tailwind CSS, and configured for static export deployment. The project includes a pre-registration system integrated with SeaTable for data storage.

## Common Commands

### Development
```bash
npm run dev          # Start development server on http://localhost:3000
npm run build        # Build for production (static export)
npm start           # Start production server (after build)
npm run lint        # Run ESLint
```

### Build Script
```bash
./build.sh          # Clean build - removes node_modules, .next, out dirs and rebuilds
```

## Architecture & Structure

### Static Export Configuration
- Configured for static export (`output: 'export'`)
- Build output goes to `/out` directory
- Images are unoptimized for static deployment
- Trailing slashes enabled for better static hosting compatibility

### Component Architecture
- **Page Structure**: Single-page application with section-based components
- **Main Layout**: `src/app/layout.tsx` - handles fonts (Geist Sans/Mono), metadata
- **Home Page**: `src/app/page.tsx` - renders all page sections sequentially
- **Component Library**: All UI components in `src/components/` directory

### Key Components
- `Header` - Navigation header
- `Hero` - Main landing section
- `AboutForum`, `KeyTopics`, `LastYear` - Content sections
- `RegisterNow` - Call-to-action section
- `PreRegisterModal` - Complex form modal with validation
- `ContactUs`, `Footer` - Bottom sections

### API Integration
- **Serverless Function**: `functions/api/submit-prereg.js` (Cloudflare Pages format)
- **External Service**: SeaTable integration for form submissions
- **API Endpoint**: `/api/submit-prereg` for form handling
- **CORS**: Configured for cross-origin requests

### Form Handling Pattern
The `PreRegisterModal` demonstrates the standard form pattern:
- State management with `useState`
- Form validation (required fields, checkboxes)
- Loading states during submission
- Error handling with user feedback
- Integration with external API

### Styling System
- **Framework**: Tailwind CSS v4
- **Fonts**: Geist Sans and Geist Mono from Next.js fonts
- **Design**: Gradient backgrounds, rounded corners, blue/purple color scheme
- **Responsive**: Mobile-first design with `md:` breakpoints

### TypeScript Configuration
- Path mapping: `@/*` maps to `./src/*`
- Strict mode enabled
- Target: ES2017
- Next.js plugin integration

## Development Notes

### Form Component Pattern
When creating new forms, follow the `PreRegisterModal` pattern:
- Use controlled components with state management
- Implement proper loading states
- Include form validation
- Handle API errors gracefully
- Use consistent styling classes

### API Function Development
- Functions go in `/functions/api/` directory
- Use Cloudflare Pages function format (`onRequestPost`, `onRequestOptions`)
- Include CORS headers for cross-origin requests
- Implement proper error handling and logging
- Follow the SeaTable integration pattern if extending data collection

### Static Asset Handling
- Images go in `/public/` directory
- Use Next.js `Image` component with `unoptimized: true` for static export
- Logo and branding assets are in root of `/public/`
- Event photos are directly in `/public/` with descriptive filenames

### Build & Deployment
- Project builds to static files in `/out` directory
- `build.sh` script handles clean builds
- No server-side functionality in production (static export)
- API functions run on Cloudflare Pages or similar serverless platform