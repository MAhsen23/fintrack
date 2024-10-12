"use client"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const CounterAnimation = ({ end, duration }: { end: number; duration: number }) => {
    const [count, setCount] = useState(0)
    const nodeRef = useRef(null)
    const inView = useInView(nodeRef, { once: true })

    useEffect(() => {
        if (inView) {
            let start = 0
            const increment = end / (duration / 16)
            const timer = setInterval(() => {
                start += increment
                if (start > end) {
                    setCount(end)
                    clearInterval(timer)
                } else {
                    setCount(Math.floor(start))
                }
            }, 16)
            return () => clearInterval(timer)
        }
    }, [end, duration, inView])

    return <span ref={nodeRef}>{count}</span>
}

export default function Hero() {
    return (
        <motion.section
            id="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="container mx-auto flex flex-col items-center lg:py-28 py-20 px-8 justify-center text-center"
        >
            <motion.h1
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl tracking-wide"
            >
                Elevate Your Financial Future
            </motion.h1>
            <motion.p
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="max-w-[700px] text-base text-muted-foreground sm:text-lg mt-4"
            >
                Expert financial services tailored to your business needs. From bookkeeping to strategic planning, we're your partners in success.
            </motion.p>
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 mt-12"
            >
                <Link href={'/about'}>
                    <Button variant={"default"} size="lg">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
                <Link href={'/contact'}>
                    <Button size="lg" className="shadow-none" variant="outline">
                        Schedule a Consultation
                    </Button>
                </Link>
            </motion.div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="mt-24 w-full"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-border py-8">
                    {[
                        { value: 10, label: "Years of Excellence" },
                        { value: 100, label: "Clients Served" },
                        { value: 98, label: "Client Satisfaction" },
                        { value: 10, label: "Expert Advisors" }
                    ].map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <span className="text-4xl font-bold text-primary mb-2">
                                <CounterAnimation end={stat.value} duration={2000} />
                                {stat.value === 98 && "%"}
                                {stat.value === 100 && "+"}
                            </span>
                            <span className="text-sm text-muted-foreground">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </motion.section>
    )
}