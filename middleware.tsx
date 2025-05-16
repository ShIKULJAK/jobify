// import { authMiddleware } from '@clerk/nextjs'; staro

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
// staro
/* export default authMiddleware({
  publicRoutes: ['/'],
}); */

// public routes in our case '/'
const isPublicRoute = createRouteMatcher(['/']);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) auth().protect();
});

/* export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}; staro */

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
