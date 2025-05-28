"use client";

import { motion } from "framer-motion";

const stats = [
  {
    video: "/1.mp4",
    value: "<2 min",
    label: "Instant quoting",
    description: "Get your personalized mortgage quote in under 2 minutes with our AI-powered platform"
  },
  {
    video: "/2.mp4",
    value: "$85B+",
    label: "Mortgages powered",
    description: "Trusted by thousands of homeowners with over $85 billion in mortgages processed"
  },
  {
    video: "/3.mp4",
    value: "5.0",
    label: "Google rating",
    description: "Rated perfect 5 stars by our clients for exceptional service and support"
  }
];

export function Benefits() {
  return (
    <section className="py-20 px-4 bg-white/90 backdrop-blur-md" id="about">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            The Chestnut Advantage
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Combining cutting-edge technology with personalized service for your home financing needs
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
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
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 10 }
              }}
              className="group"
            >
              <div className="h-full bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col">
                <div className="mb-6 overflow-hidden rounded-lg">
                  <video
                    className="w-full h-auto mx-auto object-cover rounded-lg group-hover:scale-[1.02] transition-transform"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src={stat.video}
                  />
                </div>
                
                <div className="flex-grow">
                  <motion.h3 
                    className="text-4xl font-bold text-gray-900 mb-2"
                  >
                    {stat.value}
                  </motion.h3>
                  <p className="text-lg font-semibold text-blue-600 mb-3">{stat.label}</p>
                  <p className="text-gray-500">{stat.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

    
      </div>
    </section>
  );
}