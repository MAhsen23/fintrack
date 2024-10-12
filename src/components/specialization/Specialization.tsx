import React from 'react'
import { Card, CardTitle } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"

const specializations = [
    { title: "Bookkeeping", image: "/planning.jpg" },
    { title: "Financial Analysis", image: "/analysis.jpg" },
    { title: "Audit & Assurance", image: "/audit.jpg" },
    { title: "Business Consulting", image: "/consulting.jpg" },
    { title: "Wealth Management", image: "/wealth.jpg" },
    { title: "Risk Assessment", image: "/risk.jpg" },
]

export default function SpecializationSection() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Specializations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {specializations.map((spec, index) => (
                        <Card key={index} className="overflow-hidden rounded-md transition-transform duration-300 bg-transparent shadow-none">
                            <div className="relative group">
                                <AspectRatio ratio={16 / 9}>
                                    <Image
                                        src={spec.image}
                                        alt={spec.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                        <CardTitle className="text-2xl font-bold tracking-normal text-center text-white">{spec.title}</CardTitle>
                                    </div>
                                </AspectRatio>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}