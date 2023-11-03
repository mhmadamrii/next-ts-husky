// @ts-nocheck
import { authMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
// export default authMiddleware(() => {
//   return NextResponse.next();
// });
export default authMiddleware({
  publicRoutes: ["/api/webhook/clerk"],
  ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\.[\w]+$)", "/api/webhook/clerk"]
})

// Stop Middleware running on static files
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
