"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Briefcase, FileText, Calculator, TrendingUp } from "lucide-react";

const accountingServices = [
    {
        icon: <Briefcase color="#457D58" className="h-8 w-8 text-primary" />,
        title: "Outsourced Accounts",
        description:
            "Efficient management of your accounting functions by external experts to streamline operations and reduce costs.",
        tags: ["Accounts Management", "Cost Efficiency", "External Expertise"],
    },
    {
        icon: <Calculator color="#457D58" className="h-8 w-8 text-primary" />,
        title: "Bookkeeping",
        description:
            "Accurate record-keeping services to track your financial transactions and maintain organized financial records.",
        tags: ["Accounts Payable", "Accounts Receivable", "Transaction Tracking"],
    },
    {
        icon: <DollarSign color="#457D58" className="h-8 w-8 text-primary" />,
        title: "Payroll Services",
        description:
            "Reliable payroll processing to ensure timely and accurate compensation for your employees.",
        tags: ["Payroll Management", "Employee Compensation", "Compliance"],
    },
    {
        icon: <FileText color="#457D58" className="h-8 w-8 text-primary" />,
        title: "Auditing Services",
        description:
            "Thorough financial audits to ensure accuracy and compliance with financial regulations.",
        tags: ["Internal Audit", "External Audit", "Regulatory Compliance"],
    },
    {
        icon: <DollarSign color="#457D58" className="h-8 w-8 text-primary" />,
        title: "Tax Preparation",
        description:
            "Comprehensive tax preparation services to ensure compliance and optimize tax liabilities.",
        tags: ["Tax Filing", "Tax Compliance", "Tax Optimization"],
    },
    {
        icon: <TrendingUp color="#457D58" className="h-8 w-8 text-primary" />,
        title: "Financial Reporting",
        description:
            "Preparing detailed financial reports to provide insights for stakeholders and meet regulatory requirements.",
        tags: ["Balance Sheets", "Income Statements", "Financial Analysis"],
    },
];

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

export default function AccountingServices() {
    return (
        <section id="services" className="pb-16">
            <div className="container mx-auto px-8">
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
                        Our Services
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {accountingServices.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                transition={{ duration: 0.5 }}
                            >
                                <Card className="h-full overflow-hidden transition-all duration-300 shadow-none border border-primary/10 hover:border-primary">
                                    <CardHeader className="p-6">
                                        <div className="mb-6 flex justify-center">{service.icon}</div>
                                        <CardTitle className="text-xl uppercase tracking-wide font-semibold text-center">
                                            {service.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-6">
                                        <p className="text-muted-foreground text-center mb-6">
                                            {service.description}
                                        </p>
                                        <div className="flex flex-wrap justify-center gap-2">
                                            {service.tags.map((tag, tagIndex) => (
                                                <Badge key={tagIndex} variant="outline">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
