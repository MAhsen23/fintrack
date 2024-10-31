"use client"
import * as React from "react"
import { Mail, Menu, PhoneCall, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"

const navItems = [
    { href: "/", label: "Home", id: "home", isPage: false },
    { href: "/about", label: "About Us", id: "about", isPage: true },
    { href: "/#services", label: "Services", id: "services", isPage: false },
    { href: "/contact", label: "Contact Us", id: "contact", isPage: true },
]

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const pathname = usePathname()
    const router = useRouter()

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100
            for (const item of navItems) {
                const element = document.getElementById(item.id)
                if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
                    setActiveSection(item.id)
                    break
                }
            }
        }
        if (pathname === "/") {
            window.addEventListener('scroll', handleScroll)
            return () => window.removeEventListener('scroll', handleScroll)
        } else {
            setActiveSection(pathname.substring(1))
        }
    }, [pathname])

    const scrollToSection = (sectionId: string, isPage: boolean) => {
        if (isPage) {
            router.push(`/${sectionId}`)
        } else {
            if (pathname !== "/") {
                if (sectionId === "home") {
                    router.push("/")
                } else {
                    router.push(`/#${sectionId}`)
                }
            } else {
                const element = document.getElementById(sectionId)
                if (element) {
                    const headerOffset = 80
                    const elementPosition = element.getBoundingClientRect().top
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    })
                }
            }
        }
        setIsMenuOpen(false)
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'
    }, [isMenuOpen])

    return (
        <>
            <div className="bg-[#457D58] py-4 md:py-2 w-full flex items-center justify-center md:justify-end px-4 text-white text-xs md:text-sm">
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
                    <div className="flex items-center space-x-2">
                        <PhoneCall size={16} />
                        <span>+44 7867 621829</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Mail size={16} />
                        <a href="mailto:info@fintrackaccounting.com" className="hover:underline">info@fintrackaccounting.com</a>
                    </div>
                </div>
            </div>
            <motion.header
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
            >
                <div className="container mx-auto px-4 md:px-8 flex h-20 items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <img src="/logo.png" alt="Fin Track Logo" className="h-8 w-16 md:h-12 md:w-24" />
                        <p className="inline-block font-bold text-base md:text-lg lg:text-xl">FinTrack <span className="font-medium">Accounting</span></p>
                    </Link>
                    <nav className="hidden md:flex space-x-6">
                        <NavLinks activeSection={activeSection} scrollToSection={scrollToSection} />
                    </nav>
                    <div className="md:hidden flex items-center">
                        <Button variant="ghost" size="icon" onClick={toggleMenu} className="ml-2">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </div>
                </div>
            </motion.header>

            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black z-40"
                            onClick={toggleMenu}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.3 }}
                            className="fixed top-0 right-0 h-full w-64 bg-background z-50 overflow-y-auto"
                        >
                            <div className="flex justify-between items-center h-20 px-4 mb-8">
                                <Link href="/" className="flex items-center space-x-2">
                                    <img src="/logo.png" alt="Fin Track Logo" className="h-6 w-12" />
                                    {/* <p className="inline-block font-bold text-sm">FinTrack <span className="font-medium">Accounting</span></p> */}
                                </Link>
                                <Button variant="ghost" size="icon" onClick={toggleMenu}>
                                    <X className="h-6 w-6" />
                                    <span className="sr-only">Close menu</span>
                                </Button>
                            </div>
                            <nav className="flex flex-col items-center space-y-4">
                                <NavLinks activeSection={activeSection} scrollToSection={scrollToSection} />
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

function NavLinks({ activeSection, scrollToSection }: { activeSection: string, scrollToSection: (sectionId: string, isPage: boolean) => void }) {
    return (
        <>
            {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(item.id, item.isPage)
                    }}
                    className={`flex focus:outline-none items-center text-sm font-medium transition-colors hover:text-primary relative ${activeSection === item.id ? 'text-primary' : 'text-muted-foreground'}`}
                >
                    {item.label}
                </button>
            ))}
        </>
    )
}
