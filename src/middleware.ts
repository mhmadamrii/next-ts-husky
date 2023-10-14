import { authMiddleware } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export default authMiddleware((req: any) => {
    console.log('req', req)
    return NextResponse.next()
})

// Stop Middleware running on static files
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)","/","/(api|trpc)(.*)"],
};