import React from 'react'
import Header from '@/components/header/Header'
import Contact from '@/components/contact/Contact'
import Footer from '@/components/footer/Footer'

const ContactPage = () => {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default ContactPage