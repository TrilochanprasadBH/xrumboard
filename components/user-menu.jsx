"use client"
import React from 'react';
import {UserButton} from "@clerk/nextjs";
import {ChartNoAxesGantt} from "lucide-react";

const UserMenu = () => {
    return (
        <UserButton appearance={{
            elements: {
                avatarBox: 'w-10 h-10 rounded-circle',
            }
        }}>
            <UserButton.MenuItems>
                <UserButton.Link label={"My Organisation"}
                                 labelIcon={<ChartNoAxesGantt
                                     size={15}/>}
                                 href="/onboarding"
                />
                <UserButton.Action label={'manageAccount'}/>
            </UserButton.MenuItems>
        </UserButton>
    );
};

export default UserMenu;