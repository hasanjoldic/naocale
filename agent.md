# Agent Instructions

## Code Formatting

- All files must be formatted using Prettier with the default configuration
- Run Prettier across all files before committing changes
- Use consistent formatting throughout the codebase

## Component Libraries & Styling

- Use **Tailwind CSS** for all styling
- Use **Radix UI** for component primitives (dialogs, dropdowns, tooltips, etc.)
- Use **Lucide** for all icons
- Prefer utility-first CSS approach with Tailwind classes
- Keep components accessible by leveraging Radix's built-in accessibility features

## Routing

- Use **React Router 7** for all routing needs
- Follow React Router 7 conventions and best practices
- Implement proper route organization and structure

## Data Fetching & State Management

- Use **React Query** (TanStack Query) for all data fetching and mutations
- Leverage React Query's caching and invalidation to keep state consistent across the application
- Use `useQuery` for data fetching
- Use `useMutation` for create, update, and delete operations
- Properly configure query keys for effective cache management
- Utilize query invalidation and refetching to maintain data consistency after mutations
