import { Heart } from "lucide-react";

export default function DonatePage() {
    return (
        <div className="container max-w-5xl mx-auto py-12 px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
                <div className="p-3 bg-primary/10 rounded-full">
                    <Heart className="h-6 w-6 text-primary" />
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Support Our Cause</h1>
                <p className="text-muted-foreground max-w-[700px] md:text-xl">
                    Your donation helps us continue our mission. Every contribution makes a difference, no matter how small.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                    <div className="rounded-lg border bg-card p-6">
                        <h3 className="font-medium text-lg mb-4">Why Donate?</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
                                <p>Fund new initiatives and community programs</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
                                <p>Support operational costs and infrastructure</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
                                <p>Help us reach more people in need</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
                                <p>Enable sustainable growth and long-term impact</p>
                            </li>
                        </ul>
                    </div>

                    <div className="rounded-lg border bg-card p-6">
                        <h3 className="font-medium text-lg mb-4">How We Use Donations</h3>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span>Programs & Services</span>
                                    <span className="font-medium">70%</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-2">
                                    <div className="bg-primary h-2 rounded-full" style={{ width: "70%" }} />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span>Operations</span>
                                    <span className="font-medium">20%</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-2">
                                    <div className="bg-primary h-2 rounded-full" style={{ width: "20%" }} />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span>Fundraising</span>
                                    <span className="font-medium">10%</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-2">
                                    <div className="bg-primary h-2 rounded-full" style={{ width: "10%" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg border bg-card p-6 h-full flex items-center">
                    <img src="https://storage.googleapis.com/atime-media-prod/content/5029dfed-a3bd-48a2-8e12-ac38c0d8e692.jpeg" alt="" className="w-full h-full rounded-2xl object-cover"/>
                </div>
            </div>
        </div>
    )
}