import React from 'react';
import {SignedIn, SignedOut, UserButton, SignInButton} from "@clerk/nextjs";
import {PenBox, User} from "lucide-react";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import UserMenu from "@/components/user-menu";

function Header(props) {
    return (
        <header className={'flex flex-col gap-5 items-center py-10   sm:flex-row justify-between  py-6 px-6'}>
            <h1 className={'text-4xl text-white-500'}>XrumBoard</h1>

            <nav>
                {/*<Image src={} alt={}/>*/}

                <div className={'flex justify-between items-center  gap-4'}>
                    <Link href="/project/create">
                        <Button variant={'destructive'}>
                            <PenBox size={'small'}/>
                            <span>Create a Project</span>
                        </Button>
                    </Link>

                    <SignedOut>
                        <SignInButton forceRedirectUrl={'/onboarding'}>
                            <Button variant={'outline'}>
                                Login
                            </Button>
                        </SignInButton>
                    </SignedOut>

                    <SignedIn>
                        {/*<UserButton/>*/}
                        <UserMenu/>
                    </SignedIn>
                </div>
            </nav>

        </header>
    );
}

export default Header;
//ok