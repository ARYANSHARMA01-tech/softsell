import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
import Head from 'next/head';
import ChatWidget from '../components/ChatWidget';

import { useEffect, useState } from "react";
import { motion } from 'framer-motion';

export default function Home() { 
  
  return (
    <>
      <Head>
        <title>SoftSell – Sell Your Unused Software Licenses</title>
        <meta name="description" content="SoftSell helps you sell old or unused software licenses quickly and securely." />
        <meta name="keywords" content="software resale, unused licenses, sell software licenses, SoftSell" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1E3A8A" />
        <link rel="icon" href="/language.png" />
      </Head>

      

    <div className="font-sans">
      {/* Navigation Bar */}
      <nav className="bg-blue-800 text-white py-4 fixed top-0 left-0 w-full z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">SoftSell</h1>
          <ul className="flex space-x-6">
            <li><a href="#how-it-works" className="hover:text-green-400">How It Works</a></li>
            <li><a href="#why-choose-us" className="hover:text-green-400">Why Us</a></li>
            <li><a href="#testimonials" className="hover:text-green-400">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-green-400">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Offset for fixed nav */}
      <div className="h-16"></div>

      {/* Hero Section */}
      <header
  className="bg-cover bg-center relative h-screen flex items-center justify-center text-white text-center"
  style={{ backgroundImage: 'url(/ab4.png)' }}
>
  <motion.div
    className="bg-black bg-opacity-50 p-10 rounded-lg max-w-2xl"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-4xl font-bold mb-4">Sell Your Unused Software Licenses</h1>
    <p className="text-lg mb-6">Turn old licenses into real value. Fast. Secure. Reliable.</p>
    <a
      href="#contact"
      className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded text-lg font-semibold"
    >
      Get a Quote
    </a>
  </motion.div>
</header>


      {/* How It Works */}
      <section className="bg-gray-100 text-gray-800 py-16 px-4" id="how-it-works">
  {/* Animate the title */}
  <motion.h2
    className="text-3xl font-bold text-center mb-12"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    How It Works
  </motion.h2>

  {/* Animate the grid container */}
  <motion.div
    className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.2 }}
    viewport={{ once: true }}
  >
    {/* Animate each grid item */}
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <img src="/upload.svg" alt="Upload" className="mx-auto h-24 w-24" />
      <h3 className="text-xl font-semibold mt-4">Upload License</h3>
      <p className="mt-2">Upload your license in a few clicks. Our platform supports all major software vendors.</p>
    </motion.div>

    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <img src="/valuation.jpg" alt="Valuation" className="mx-auto h-24 w-24" />
      <h3 className="text-xl font-semibold mt-4">Get Valuation</h3>
      <p className="mt-2">We analyze market trends to give you a fair and competitive valuation instantly.</p>
    </motion.div>

    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.7 }}
      viewport={{ once: true }}
    >
      <img src="/payment.jpg" alt="Get Paid" className="mx-auto h-24 w-24" />
      <h3 className="text-xl font-semibold mt-4">Get Paid</h3>
      <p className="mt-2">Accept the offer and receive payment via your preferred method within 24 hours.</p>
    </motion.div>
  </motion.div>
</section>
      
      {/* Why Choose Us */}
      <section className="py-16 px-4 text-gray-800" id="why-choose-us">
  {/* Animate the title */}
  <motion.h2
    className="text-3xl font-bold text-center mb-12"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    Why Choose Us
  </motion.h2>

  {/* Animate the grid container */}
  <motion.div
    className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.2 }}
    viewport={{ once: true }}
  >
    {/* Animate each grid item */}
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <img src="/secureicon.svg" alt="Secure Transactions" className="mx-auto h-24 w-24" />
      <h3 className="text-xl font-semibold mt-4">Secure Transactions</h3>
      <p className="mt-2">Every transaction is encrypted and tracked, ensuring your data is always safe.</p>
    </motion.div>

    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <img src="/fast.jpg" alt="Fast Process" className="mx-auto h-24 w-24" />
      <h3 className="text-xl font-semibold mt-4">Fast Process</h3>
      <p className="mt-2">From upload to payout, everything is optimized to save you time and effort.</p>
    </motion.div>

    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.7 }}
      viewport={{ once: true }}
    >
      <img src="/support.jpg" alt="24/7 Support" className="mx-auto h-24 w-24" />
      <h3 className="text-xl font-semibold mt-4">24/7 Support</h3>
      <p className="mt-2">Got questions? Our support team is always available to help you out.</p>
    </motion.div>
  </motion.div>
</section>


      {/* Testimonials */}
      <section className="bg-gray-200 text-gray-800 py-16 px-4" id="testimonials">
  {/* Animate the title */}
  <motion.h2
    className="text-3xl font-bold text-center mb-12"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    What Our Customers Say
  </motion.h2>

  {/* Animate the grid container */}
  <motion.div
    className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.2 }}
    viewport={{ once: true }}
  >
    {/* Animate each testimonial */}
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <p className="italic text-gray-600">"SoftSell helped me get rid of unused licenses with zero hassle. Super fast and transparent!"</p>
      <p className="mt-4 font-semibold">Anita Desai</p>
      <p className="text-gray-600">IT Consultant at CodeNexa</p>
    </motion.div>

    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <p className="italic text-gray-600">"I had no idea old licenses could be valuable. Thanks to SoftSell, I recovered sunk costs easily."</p>
      <p className="mt-4 font-semibold">Rohit Kumar</p>
      <p className="text-gray-600">Operations Manager at Infowave</p>
    </motion.div>
  </motion.div>
</section>
      
      <div>
      {/* Your page content */}
      <ChatWidget />
    </div>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-white text-gray-800" id="contact">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <form className="max-w-2xl mx-auto space-y-6">
          <input type="text" placeholder="Name" className="p-3 border rounded-lg w-full" required />
          <input type="email" placeholder="Email" className="p-3 border rounded-lg w-full" required />
          <input type="text" placeholder="Company" className="p-3 border rounded-lg w-full" />
          <select name="licenseType" className="p-3 border border-black rounded-lg w-full bg-white text-gray-800" required>
            <option value="">Select License Type</option>
            <option value="microsoft">Microsoft</option>
            <option value="adobe">Adobe</option>
            <option value="autodesk">Autodesk</option>
            <option value="others">Other</option>
          </select>
          <textarea rows="5" placeholder="Your Message" className="p-3 border rounded-lg w-full" required></textarea>
          <button type="submit" className="bg-blue-800 hover:bg-blue-900 text-white py-3 px-6 rounded text-lg font-semibold w-full">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} SoftSell. All rights reserved.</p>
      </footer>
    </div>
    </>
  );

}

