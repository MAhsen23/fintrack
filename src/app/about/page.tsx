"use client"
import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import WhyChooseUs from '@/components/ourValues/OurValues'
import CTA from '@/components/cta/CTA'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import { motion } from 'framer-motion'
import { Facebook, Linkedin, Twitter } from 'lucide-react'

const teamMembers = [
    { name: "Ozair Mohtshim", role: "Founder & CEO", image: "" },
    { name: "Muhammad Ahsen", role: "Full Stack Developer", image: "/ahsen.jpg" },
    { name: "XYZ", role: "Chief Financial Officer", image: "" },
]
export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <motion.main
                className='flex-1'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <section className="pt-20 pb-4 md:pt-28 md:pb-12">
                    <div className="container mx-auto px-4 md:px-8">
                        <motion.div
                            className="text-center mb-12"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <Badge className="mb-4" variant="outline">About Us</Badge>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">Our Journey in Financial Excellence</h1>
                            <p className="sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                                Discover the story behind FinTrack Accounting and our commitment to your financial success.
                            </p>
                        </motion.div>
                        <motion.div
                            className="flex justify-center"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <div className="relative w-full max-w-7xl aspect-video">
                                <Image
                                    src="/about.jpg"
                                    alt="Fin Track team"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>
                <WhyChooseUs />
                {/* <section className="py-16">
                    <div className="container mx-auto px-4 md:px-8">
                        <motion.h2
                            className="text-3xl font-bold text-center mb-12"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            Meet Our Leadership
                        </motion.h2>
                        <motion.div
                            className="flex flex-col md:flex-row justify-center gap-8 mx-auto"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            {teamMembers.map((member, index) => (
                                <Card key={index} className="w-full max-w-xs flex-shrink-0 overflow-hidden border-border shadow-none">
                                    <CardContent className="flex flex-col items-center p-6">
                                        <Avatar className="w-24 h-24 mb-4">
                                            <AvatarImage src={member.image} alt={member.name} />
                                            <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                        </Avatar>
                                        <h3 className="font-semibold text-lg">{member.name}</h3>
                                        <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                                        <div className="flex space-x-4">
                                            <a href={''} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                                <Twitter size={20} />
                                                <span className="sr-only">Twitter profile of {member.name}</span>
                                            </a>
                                            <a href={''} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                                <Linkedin size={20} />
                                                <span className="sr-only">LinkedIn profile of {member.name}</span>
                                            </a>
                                            <a href={''} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                                <Facebook size={20} />
                                                <span className="sr-only">Facebook profile of {member.name}</span>
                                            </a>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </motion.div>
                    </div>
                </section> */}
                <CTA />
            </motion.main>
            <Footer />
        </div>
    )
}