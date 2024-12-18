import {Button} from "@/components/ui/button";
import {ChevronRight} from "lucide-react";
import  Link from "next/link";

export default function Home() {
    return (
        <div>
            <section>
                <h1 className={'flex justify-center items-center py-12 text-4xl text-blue-500'}>Organise your workflow
                    with XrumBoard</h1>
                <h1 className={'flex justify-center items-center py-12 text-4xl text-blue-500'}>Empower your team with
                    our innovative solutions</h1>
                <Link href="/onboarding">
                    <Button>Click Here
                    <ChevronRight/>
                    </Button>
                </Link>
            </section>
        </div>
    );
}
