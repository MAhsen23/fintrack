"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import 'swiper/css'
import 'swiper/css/pagination'

interface Review {
    name: string
    position: string
    rating: number
    review: string
}

const reviews: Review[] = [
    {
        name: 'Emily Carter',
        position: 'Head of Finance, Carter Industries',
        rating: 5,
        review: 'Their financial analysis and reporting have provided us with invaluable insights, driving strategic decisions and growth.',
    },
    {
        name: 'Ahmed Khan',
        position: 'Managing Director, Finance Solutions Ltd',
        rating: 5,
        review: 'The accounting services provided were exceptional, streamlining our financial reporting and improving overall efficiency.',
    },
    {
        name: 'Sarah Johnson',
        position: 'CFO, Global Enterprises',
        rating: 5,
        review: 'Their expertise in tax planning and compliance has significantly reduced our tax liabilities and ensured full regulatory compliance.',
    },
    {
        name: 'Zainab Ali',
        position: 'CEO, Prime Accountants',
        rating: 5,
        review: 'They delivered outstanding audit services, helping us identify key areas for improvement and ensuring transparency across our operations.',
    },
    {
        name: 'David Thompson',
        position: 'Founder, Thompson Consultancy',
        rating: 5,
        review: 'The level of professionalism and attention to detail in their bookkeeping services is unmatched, making our financial management seamless.',
    },
    {
        name: 'Michael Brown',
        position: 'Director, Brown & Co.',
        rating: 5,
        review: 'The team’s dedication to client satisfaction and their comprehensive understanding of financial regulations have been instrumental to our success.',
    },
]

const ReviewCard = ({ name, position, rating, review }: Review) => (
    <Card className="h-full shadow-none bg-background border-none">
        <CardContent className="p-6 flex flex-col h-full">
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center text-xl font-semibold mr-4">
                    {name.charAt(0)}
                </div>
                <div>
                    <h3 className="font-semibold text-base">{name}</h3>
                    <p className="text-sm text-muted-foreground">{position}</p>
                </div>
            </div>
            <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`w-4 h-4 ${i < rating ? 'text-primary fill-primary' : 'text-muted-foreground/30'}`}
                    />
                ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{review}</p>
            <div className="mt-4 text-primary/50">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                </svg>
            </div>
        </CardContent>
    </Card>
)

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
}

export default function Reviews() {
    return (
        <section className="py-16">
            <div className="container mx-auto lg:px-16 px-8">
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={{
                        animate: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                >
                    <motion.h2
                        variants={fadeInUp}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-center mb-12"
                    >
                        Client Testimonials
                    </motion.h2>
                    <div className="relative">
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={30}
                            slidesPerView={1}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                            className="!pb-20"
                        >
                            {reviews.map((review, index) => (
                                <SwiperSlide key={index} className="h-auto">
                                    <motion.div variants={fadeInUp} transition={{ duration: 0.5 }} className="h-full">
                                        <ReviewCard {...review} />
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
