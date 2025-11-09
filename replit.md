# Naočale.ba - Eyeglasses Try-at-Home Service

## Overview
This is a React + TypeScript + Vite application for an eyeglasses try-at-home service based in Bosnia and Herzegovina. Customers can select up to 3 frames to try at home for free before purchasing.

## Tech Stack
- **Frontend**: React 19.1 with TypeScript
- **Build Tool**: Vite 7.1
- **Styling**: Tailwind CSS 4.1
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Routing**: React Router 7
- **Backend**: Supabase (PostgreSQL database, authentication, storage)

## Project Structure
- `src/pages/` - Page components (IndexPage, NotFoundPage)
- `src/components/` - Reusable UI components (Header, Hero, FrameCatalog, etc.)
- `src/lib/` - Utility libraries including Supabase client
- `supabase/` - Supabase configuration and migrations

## Key Features
1. **Frame Catalog**: Browse and select up to 3 frames
2. **Try-at-Home Process**: 5-step process visualization
3. **Trust Section**: Benefits and guarantees
4. **Responsive Design**: Mobile-first approach with Tailwind CSS

## Environment Setup
Required environment variables (already configured):
- `VITE_SUPABASE_URL` - Supabase project URL
- `VITE_SUPABASE_PUBLISHABLE_KEY` - Supabase public API key

## Development
- Run `npm run dev` to start the development server on port 5000
- The app is configured to work in the Replit environment with proper host and HMR settings

## Database
The project includes Supabase migrations in `supabase/migrations/`:
- Products table setup
- Update timestamp triggers

## Recent Changes
- **2024-11-09**: Cart/checkout page with customer form
  - Created cart page at /korpa route with full checkout flow
  - Displays selected frames with ability to remove items (updates localStorage)
  - Customer information form with validation (name, email, phone, address)
  - Form validation with localized error messages
  - Success confirmation page after order submission
  - Empty cart state with link to catalog
  - Shopping cart icon in header now navigates to cart page
  - "Moje narudžbe" navigation link now properly routes to cart page
  - "Kako funkcioniše" link now properly navigates to homepage section from any page
  - localStorage cleared after successful submission

- **2024-11-09**: Routing and individual product pages
  - Created dedicated catalog page at /katalog route
  - Created individual product pages at /proizvod/:id with shareable URLs
  - Home page now shows catalog preview (6 featured products) with link to full catalog
  - Updated Header navigation to use React Router Links for proper routing
  - Implemented localStorage for persistent selection state across all pages
  - Added share functionality on product pages (native share API + clipboard fallback)
  - Centralized frames data in src/data/frames.ts for consistency
  - Removed "Slični proizvodi" section from product pages

- **2024-11-09**: Catalog expansion and pagination
  - Expanded catalog from 6 to 15 eyeglasses products
  - Implemented pagination system (9 products per page)
  - Added navigation controls with ChevronLeft/Right icons and page numbers
  - Selection state persists across pagination (can select from multiple pages)
  - Smooth scroll-to-top on page navigation

- **2024-11-09**: Complete UI redesign to Enki Coop aesthetic
  - Implemented Alegreya serif typography for all headings
  - Replaced gray color palette with consistent teal/white theme
  - Updated all components: Header, Hero, FrameCatalog, ProcessSteps, TrustSection, Footer
  - Applied light border treatment (teal-200/20) across all cards
  - Implemented zigzag alternating layout for "Kako funkcioniše?" section with professional stock images
  - Added responsive images for each step: frames display, delivery, trying at home, decision, and prescription
  - Implemented checklist-style layout for "Zašto odabrati nas?" section with circular check marks and icon badges
  - Added hero background image showcasing eyeglasses collection with teal gradient overlay
  - Removed social media links from footer
  
- **2024-11-09**: Initial Replit environment setup
  - Configured Vite for Replit (0.0.0.0:5000, allowedHosts: true, WebSocket HMR)
  - Set up Supabase environment variables (VITE_SUPABASE_URL, VITE_SUPABASE_PUBLISHABLE_KEY)
  - Installed all dependencies
  - Configured development workflow on port 5000
  - Set up deployment configuration for autoscale deployment

## Notes
- WebSocket HMR warnings in console are normal in Replit environment and don't affect functionality
- Site is fully functional with hot module reloading working correctly
