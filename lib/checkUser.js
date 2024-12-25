import {currentUser} from "@clerk/nextjs/server";
import {db} from "./prisma";

export const checkUser = async () => {
    const user = await currentUser();

    if (!user) {
        return null;
    }

    try {
        const loggedInUser = await db?.user.findUnique({
            where: {
                clerkUserId: user.id
            }
        });
        if (loggedInUser) {
            return loggedInUser
        }

        //otherwise create new user
        const name = `${user.firstName} ${user.lastName}`;
        const createNewUser = await db?.user?.create({
            data:{
                clerkUserId: user.id,
                name: name,
                imageUrl: user.imageUrl,
                email: user.emailAddresses[0].emailAddress
            }
        })
        return createNewUser;
    } catch (err) {
        console.error(err);
    }
}