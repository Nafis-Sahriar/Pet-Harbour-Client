import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'
 
// This function can be marked `async` if using `await` inside
export async function proxy(request) 
{
    // get the session.
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(!session)
    {
        return NextResponse.redirect(new URL('/login', request.url))
    }

}
 
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
 
export const config = {
  matcher: ['/dashboard', '/dashboard/my-listings','/dashboard/my-request', '/dashboard/add-pet', '/dashboard/my-request','/dashboard/wish-list', '/all-pets/:path'],
}