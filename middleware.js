import { clerkMiddleware ,createRouteMatcher} from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
    "/onboarding(.*)",
    "/organisation(.*)",
    "/project(.*)",
    "/issue(.*)",
])

export default clerkMiddleware((auth,req)=>{
    if(!auth.userId && isProtectedRoute(req)){
        return NextResponse.redirect('http://localhost:3000/sign-in?after_sign_in_url=http%3A%2F%2Flocalhost%3A3000%2Fonboarding&redirect_url=http%3A%2F%2Flocalhost%3A3000%2F'); // Replace with your actual sign-in URL
    }
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};