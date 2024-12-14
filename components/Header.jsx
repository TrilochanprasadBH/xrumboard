import React from 'react';
import {SignedIn, SignedOut, UserButton, SignInButton} from "@clerk/nextjs";
import {User} from "lucide-react";

function Header(props) {
    return (
        <>
            <SignedOut>
                <SignInButton/>
            </SignedOut>

            <SignedIn>
                <UserButton/>
            </SignedIn>
        </>
    );
}

export default Header;