"use client"

import { motion } from "framer-motion"
import { Home, RefreshCw, Building, Calculator } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "First-Time Buyers",
    description: "Special programs and guidance for first-time homebuyers."
  },
  {
    icon: RefreshCw,
    title: "Refinancing",
    description: "Lower your rate or tap into your home's equity."
  },
  {
    icon: Building,
    title: "Investment Properties",
    description: "Financing solutions for real estate investors."
  },
  {
    icon: Calculator,
    title: "Custom Solutions",
    description: "Tailored mortgage options to fit your unique needs."
  }
]

export function Services() {
  return (
    <section className="py-20 px-4 bg-white/90 backdrop-blur-md" id="services">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-black">Our Mortgage Services</h2>
          <p className="text-black max-w-2xl mx-auto">
            Comprehensive mortgage solutions tailored to your unique financial situation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl border border-[#0022DF] hover:shadow-lg transition-shadow"
            >
              <service.icon className="h-12 w-12 text-[#0022DF] mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">{service.title}</h3>
              <p className="text-black">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}