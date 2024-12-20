import {Button} from "@/components/ui/button";
import {BarChart, Calendar, ChevronRight, Layout} from "lucide-react";
import Link from "next/link";
import {Card, CardContent} from "@/components/ui/card";
import {gray} from "next/dist/lib/picocolors";

const features = [
    {
        title: "Intuitive kanban boards",
        description: "Streamline and optimize your workflow with our boards",
        icon: Layout
    },
    {
        title: "Sprints are a breeze to plan now",
        description: "This will help in making one more efficient and stress free",
        icon: Calendar
    },
    {
        title: "Assign and report actively",
        description: "Everything is in control without micro management",
        icon: BarChart
    }
]


export default function Home() {
    return (
        <div className={'min-h-screen'}>
            <section className={'container mx-auto py-20 text-center'}>
                <h1 className={'text-4xl sm:text-6xl lg:text-8xl font-extrabold gradient-title pb-6 flex flex-col'}>Organise
                    your workflow
                    with XrumBoard</h1>
                <h1 className={'flex justify-center items-center py-12 text-4xl text-white-500 animate-pulse'}>Empower
                    your team with
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

            <section id={'features'} className={'bg-gray-900 py-20 px-6'}>
                <div className={'container mx-auto'}>
                    <h3 className={'text-3xl font-bold text-center mb-12 text-purple-300'}>Key Features</h3>
                    <div className={'grid grid-cols-1 lg:grid-cols-3 gap-8'}>
                    {features.map((feature, index) => {
                        return (
                            <Card key={index} className={'bg-gray-700'}>
                                <CardContent className={'pt-4'}>
                                    <feature.icon className={'h-12 w-12 mb-4 text-blue-300'}/>
                                    <h2 className={'text-xl font-bold text-blue-300 mb-2'}>{feature.title}</h2>
                                    <p>{feature.description}</p>
                                </CardContent>
                            </Card>
                        )
                    })}
                    </div>
                </div>
            </section>
        </div>
    );
}
