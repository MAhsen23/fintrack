// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Configure the email transport using Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail', // or any other email service
            auth: {
                user: process.env.EMAIL_USER, // your email
                pass: process.env.EMAIL_PASS  // your email password
            }
        });

        // Set up email data
        const mailOptions = {
            from: email,
            to: process.env.RECEIVER_EMAIL, // your email
            subject: `Contact form submission from ${name}`,
            text: message
        };

        try {
            // Send the email
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error sending email' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
