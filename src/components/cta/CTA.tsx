import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const CTA = () => {
    return (
        <section className="py-20 border-t">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Ready to Elevate Your Financial Strategy?</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto">Let's collaborate to create a robust financial foundation for your business success.</p>
                <Link href={'/contact'}>
                    <Button size="lg">
                        Schedule a Consultation
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </div>
        </section>
    )
}

export default CTA