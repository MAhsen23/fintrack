"use client"
import { motion } from "framer-motion"
import { PhoneCall, Mail, MapPin, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { FloatingLabelInput } from '../labelInput/LabelInput'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
    { icon: <PhoneCall className="h-4 w-4" />, title: 'Phone', lines: ['+44 7867 621829'] },
    { icon: <Mail className="h-4 w-4" />, title: 'Email', lines: ['kaz.azhan@fintrackaccounting.com'] },
    { icon: <MapPin className="h-4 w-4" />, title: 'Address', lines: ['London, United Kingdom'] },
]

const faqs = [
    {
        question: "What services do you offer?",
        answer: "We offer a wide range of accounting and financial services including tax preparation, bookkeeping, financial planning, and business consulting."
    },
    {
        question: "How can I schedule a consultation?",
        answer: "You can schedule a consultation by filling out the contact form or by calling us directly at +44 7867 621829."
    },
    {
        question: "What industries do you specialize in?",
        answer: "We specialize in a variety of industries including technology, healthcare, ecommerce, and retailing."
    },
    {
        question: "Do you offer virtual consultations?",
        answer: "Yes, we offer virtual consultations to accommodate clients who are unable to visit our office."
    },
    {
        question: "How can I get a quote for your services?",
        answer: "You can get a quote by contacting us through the form or by calling or email us directly."
    },
]

export default function Contact() {
    return (
        <motion.section
            id='contact'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="py-20 md:py-28"
        >
            <div className="container mx-auto px-4 md:px-8">
                <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
                >
                    Get in Touch
                </motion.h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="space-y-8"
                    >
                        <Card className='shadow-none bg-transparent'>
                            <CardContent className="p-6">
                                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                                <div className="space-y-6">
                                    {contactInfo.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                                            className="flex items-center overflow-hidden space-x-4"
                                        >
                                            <div className="bg-secondary/60 p-4 rounded-full text-muted-foreground text-sm">{item.icon}</div>
                                            <div>
                                                <h3 className="font-medium text-base">{item.title}</h3>
                                                {item.lines.map((line, lineIndex) => (
                                                    <p key={lineIndex} className="text-muted-foreground text-sm">{line}</p>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                        {/* <Card className='shadow-none bg-transparent'>
                            <CardContent className="p-6">
                                <h2 className="text-2xl font-semibold mb-6">Office Hours</h2>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center font-medium text-lg">
                                        <span className='text-sm text-muted-foreground'>Monday - Friday</span>
                                        <span className='text-sm text-primary'>9 AM - 5 PM</span>
                                    </div>
                                    <div className="flex items-center justify-between font-medium text-lg">
                                        <span className='text-sm text-muted-foreground'>Saturday - Sunday</span>
                                        <span className='text-sm text-primary'>Closed</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card> */}
                    </motion.div>
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="border p-8 rounded-xl shadow-none"
                    >
                        <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                        <form className="space-y-6">
                            <FloatingLabelInput
                                label="Name *"
                                id="name"
                            />
                            <FloatingLabelInput
                                label="Email *"
                                id="email"
                            />
                            <FloatingLabelInput
                                label="Message *"
                                id="message"
                            />
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button size="lg" className="w-full">
                                    Send Message
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </motion.div>
                        </form>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="mt-24"
                >
                    <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
                    <Card className="w-full shadow-none bg-transparent max-w-3xl mx-auto">
                        <CardContent className="pt-6">
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`item-${index}`}>
                                        <AccordionTrigger className="text-left outline-none">{faq.question}</AccordionTrigger>
                                        <AccordionContent className="text-left">{faq.answer}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </motion.section>
    )
}