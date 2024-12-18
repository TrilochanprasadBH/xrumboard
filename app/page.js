import {Button} from "@/components/ui/button";
import {ChevronRight} from "lucide-react";
import  Link from "next/link";

export default function Home() {
    return (
        <div className={'min-h-screen'}>
            <section className={'container mx-auto py-20 text-center'}>
                <h1 className={'text-4xl sm:text-6xl lg:text-8xl font-extrabold gradient-title pb-6 flex flex-col'}>Organise your workflow
                    with XrumBoard</h1>
                <h1 className={'flex justify-center items-center py-12 text-4xl text-blue-500'}>Empower your team with
                    our innovative solutions</h1>
                <Link href="/onboarding">
                    <Button size={'lg'} className={'mr-4'}>Click Here
                    <ChevronRight/>
                    </Button>
                </Link>

                <Link href="/#features">
                    <Button size={'lg'} variant={'outline'} className={'mr-4'}>Learn More
                        <ChevronRight/>
                    </Button>
                </Link>
            </section>
        </div>
    );
}
