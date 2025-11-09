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
- **2024-11-09**: Initial Replit environment setup
  - Configured Vite for Replit (0.0.0.0:5000, WebSocket HMR)
  - Set up Supabase environment variables
  - Installed all dependencies
  - Configured development workflow
