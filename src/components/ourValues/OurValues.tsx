import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Briefcase, ShieldCheck, Target } from 'lucide-react'

const reasons = [
    {
        icon: <CheckCircle className="h-8 w-8" />,
        title: "Expert Team",
        description: "Certified professionals with years of experience",
    },
    {
        icon: <Users className="h-8 w-8" />,
        title: "Client-Focused",
        description: "Tailored strategies for your unique needs",
    },
    {
        icon: <Briefcase className="h-8 w-8" />,
        title: "Comprehensive",
        description: "Full spectrum of financial services",
    },
    {
        icon: <ShieldCheck className="h-8 w-8" />,
        title: "Trusted",
        description: "Highest standards of integrity and security",
    },
]

export default function WhyChooseUs() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px_20px]" />
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col items-center mb-16">
                    <Badge className="mb-4" variant="outline">Why Choose Us</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Elevate Your Finance & Accounts</h2>
                    <div className="w-24 h-1 bg-primary rounded-full mb-8" />
                    <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                        At FinTrack Accounting, we're committed to enable your financial journey with expert guidance and innovative solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
                    <Card className="col-span-1 lg:col-span-3 bg-transparent border shadow-none">
                        <CardContent className="p-8">
                            <h3 className="text-2xl font-semibold mb-4 flex items-center">
                                <Target className="mr-2 h-6 w-6" />
                                Our Mission
                            </h3>
                            <p className="text-base leading-relaxed">
                                To provide unparalleled financial expertise and personalized solutions that empower our clients to achieve their goals and secure their financial future. We strive to be the trusted partner in every step of your financial journey, delivering innovative strategies with integrity and excellence.
                            </p>
                        </CardContent>
                    </Card>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((reason, index) => (
                        <Card key={index} className="bg-background/60 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300">
                            <CardContent className="flex flex-col items-center text-center p-6">
                                <div className="mb-4 p-3 bg-[#457D58]/70 text-white rounded-full ring-2 ring-[#457D58]/40 ring-offset-2 ring-offset-background">
                                    {reason.icon}
                                </div>
                                <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
                                <p className="text-sm text-muted-foreground">{reason.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}