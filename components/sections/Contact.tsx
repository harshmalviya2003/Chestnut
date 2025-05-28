"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <section className="py-20 px-4 bg-white/90 backdrop-blur-md" id="contact">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Let's Connect
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
            Our mortgage experts are ready to guide you through every step of your home financing journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="max-w-lg mx-auto lg:max-w-none w-full"
          >
            <form className="space-y-6 bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700 font-medium">
                    First Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="John"
                    className="border-gray-300 focus:border-[#0022DF] focus:ring-[#0022DF] transition-all"
                    aria-label="Your first name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name" className="text-gray-700 font-medium">
                    Last Name
                  </Label>
                  <Input
                    id="last-name"
                    placeholder="Doe"
                    className="border-gray-300 focus:border-[#0022DF] focus:ring-[#0022DF] transition-all"
                    aria-label="Your last name"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  className="border-gray-300 focus:border-[#0022DF] focus:ring-[#0022DF] transition-all"
                  aria-label="Your email address"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-700 font-medium">
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  className="border-gray-300 focus:border-[#0022DF] focus:ring-[#0022DF] transition-all"
                  aria-label="Your phone number"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-700 font-medium">
                  How can we help you?
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your mortgage needs..."
                  className="min-h-[150px] border-gray-300 focus:border-[#0022DF] focus:ring-[#0022DF] transition-all"
                  aria-label="Your message"
                />
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  className="w-full bg-gradient-to-r from-[#0022DF] to-[#0066ff] hover:from-[#0018a8] hover:to-[#0022DF] text-white shadow-sm hover:shadow-md transition-all"
                  size="lg"
                >
                  Get Started Today
                </Button>
              </motion.div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#0022DF]/10 p-3 rounded-lg mr-4">
                    <Phone className="h-5 w-5 text-[#0022DF]" />
                  </div>
                  <div>
                    <h4 className="text-gray-500 text-sm font-medium">Phone</h4>
                    <p className="text-gray-900">(800) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#0022DF]/10 p-3 rounded-lg mr-4">
                    <Mail className="h-5 w-5 text-[#0022DF]" />
                  </div>
                  <div>
                    <h4 className="text-gray-500 text-sm font-medium">Email</h4>
                    <p className="text-gray-900">info@chestnutmortgage.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#0022DF]/10 p-3 rounded-lg mr-4">
                    <MapPin className="h-5 w-5 text-[#0022DF]" />
                  </div>
                  <div>
                    <h4 className="text-gray-500 text-sm font-medium">Headquarters</h4>
                    <p className="text-gray-900">123 Financial District, San Francisco, CA 94111</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#0022DF]/10 p-3 rounded-lg mr-4">
                    <Clock className="h-5 w-5 text-[#0022DF]" />
                  </div>
                  <div>
                    <h4 className="text-gray-500 text-sm font-medium">Business Hours</h4>
                    <p className="text-gray-900">Monday - Friday: 8:00 AM - 6:00 PM PST</p>
                    <p className="text-gray-900">Saturday: 9:00 AM - 2:00 PM PST</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-[#0022DF] to-[#0066ff] p-6 rounded-xl text-white">
              <h3 className="text-xl font-semibold mb-3">Need Immediate Assistance?</h3>
              <p className="mb-4">Our customer service team is available to answer your questions.</p>
              <Button variant="outline" className="bg-white text-[#0022DF] hover:bg-gray-100">
                Live Chat Now
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}