"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const benefits = [
  {
    video: "/t.mp4",
    title: "Your Best Deal",
    description: "Finds your best deal by comparing offers from 100+ lenders",
    color: "bg-blue-100"
  },
  {
    video: "/s.mp4",
    title: "Slashed Fees",
    description: "Reduces your costs with intelligent automation",
    color: "bg-green-100"
  },
  {
    video: "/a.mp4",
    title: "Rate Monitoring",
    description: "Helps you lock at the optimal time with real-time rate tracking",
    color: "bg-purple-100"
  },
];

export function BenefitCards() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Smarter Financing with Chestnut AI™
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our technology delivers tangible savings throughout your mortgage journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              whileHover={{
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 10 }
              }}
              className="group h-full"
            >
              <div className="h-full bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col">
                <div className={`${benefit.color} rounded-lg p-4 w-20 h-20 flex items-center justify-center mb-6`}>
                  <video
                    src={benefit.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-12 w-12 object-contain"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {benefit.description}
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      
      </div>
    </section>
  );
}