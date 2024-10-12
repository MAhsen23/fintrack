import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="py-12 bg-secondary/60">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-primary">FinTrack <span className='font-medium'>Accounting</span></h3>
                        <p className="mb-6 text-muted-foreground text-sm">
                            Providing trusted accounting and financial services to help your business thrive.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="transition-colors text-muted-foreground hover:text-primary duration-300">
                                <Facebook className="w-5 h-5" />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="#" className="transition-colors text-muted-foreground hover:text-primary duration-300">
                                <Twitter className="w-5 h-5" />
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a href="#" className="transition-colors text-muted-foreground hover:text-primary duration-300">
                                <Instagram className="w-5 h-5" />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="#" className="transition-colors text-muted-foreground hover:text-primary duration-300">
                                <Linkedin className="w-5 h-5" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium mb-4 text-primary">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/" className="transition-colors text-muted-foreground hover:text-primary duration-300">Home</Link></li>
                            <li><Link href="/about" className="transition-colors text-muted-foreground hover:text-primary duration-300">About Us</Link></li>
                            <li><Link href="/contact" className="transition-colors text-muted-foreground hover:text-primary duration-300">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium mb-4 text-primary">Our Services</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="text-muted-foreground">Bookkeeping</li>
                            <li className="text-muted-foreground">Financial Analysis</li>
                            <li className="text-muted-foreground">Tax Consultation</li>
                            <li className="text-muted-foreground">Audit & Assurance</li>
                            <li className="text-muted-foreground">Business Advisory</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium mb-4 text-primary">Contact Us</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>London, United Kingdom</li>
                            <li>+44 7867 621829</li>
                            <li>kaz.azhan@fintrackaccounting.com</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 text-center border-t border-border pt-8">
                    <p className="text-muted-foreground text-sm">
                        &copy; {new Date().getFullYear()} FinTrack Accounting. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}