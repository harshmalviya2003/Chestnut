"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Michael Anderson",
    role: "First-Time Homebuyer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    quote: "Chestnut Mortgage made my first home purchase incredibly smooth. Their team was always there to answer my questions.",
    date: "June 2023"
  },
  {
    name: "Sarah Martinez",
    role: "Property Investor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    quote: "The best mortgage company I've worked with. Their expertise in investment properties is unmatched.",
    date: "April 2023"
  },
  {
    name: "David Thompson",
    role: "Refinance Client",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    quote: "Thanks to Chestnut Mortgage, I saved thousands on my refinance. Highly recommend their services!",
    date: "February 2023"
  },
];

export function Testimonials() {
  return (
    <section
      className="py-24 px-4 bg-white"
      id="testimonials"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Trusted by Homebuyers Nationwide
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
            Join thousands of satisfied clients who trusted Chestnut Mortgage.
          </p>
          <div className="mt-6 flex items-center justify-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 text-amber-400 fill-amber-400"
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-500">
              4.9/5 from 3,000+ reviews
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
              className="relative bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
            >
              <Quote
                className="absolute top-6 right-6 h-6 w-6 text-blue-100"
                aria-hidden="true"
              />
              
              <div className="flex items-start mb-6">
                <div className="relative">
                  <Image
                    src={testimonial.image}
                    alt={`Portrait of ${testimonial.name}`}
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-white shadow-sm"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1">
                    <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-xs text-gray-400 mt-1">{testimonial.date}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-amber-400 fill-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-blue-300 rounded-b-xl"></div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
}