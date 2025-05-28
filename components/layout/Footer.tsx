"use client";

import { motion } from "framer-motion";
import { Building2, Github, Twitter, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "First-Time Buyers", href: "#" },
        { name: "Refinancing", href: "#" },
        { name: "Investment Properties", href: "#" },
        { name: "Custom Solutions", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Mortgage Calculator", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Guides", href: "#" },
        { name: "Support", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { name: "GitHub", href: "#", icon: Github, ariaLabel: "Visit our GitHub page" },
    { name: "Twitter", href: "#", icon: Twitter, ariaLabel: "Visit our Twitter page" },
    { name: "LinkedIn", href: "#", icon: Linkedin, ariaLabel: "Visit our LinkedIn page" },
  ];

  const handleNewsletterSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    setEmail("");
    alert("Subscribed! Thank you for joining our newsletter.");
  };

  return (
    <footer className="bg-gradient-to-b from-muted/10 to-muted/30 border-t border-border/30 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 col-span-1 md:col-span-2"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <span className="text-3xl font-extrabold text-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                Chestnut Mortgage
              </span>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
              Empowering your homeownership journey with cutting-edge AI solutions and personalized mortgage plans.
            </p>
            <motion.div
              className="mt-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href="#"
                className="inline-flex bg-black items-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-primary to-purple-600 rounded-full hover:from-primary/90 hover:to-purple-600/90 transition-all shadow-lg hover:shadow-xl"
              >
                Get Started →
              </a>
            </motion.div>
          </motion.div>

          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-foreground mb-5">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                      whileHover={{ x: 6, color: "#3b82f6" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="col-span-1"
          >
            <h3 className="text-xl font-bold text-foreground mb-5">Stay Connected</h3>
            <div className="mb-6">
              <p className="text-sm text-muted-foreground mb-3">
                Subscribe to our newsletter for updates and tips.
              </p>
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 text-sm border border-border/50 rounded-l-full focus:outline-none focus:ring-2 focus:ring-primary bg-background/50"
                />
                <button
                  onClick={handleNewsletterSubmit}
                  className="px-4 py-2 bg-primary text-white  rounded-r-full hover:bg-primary/90 transition-colors"
                >
                  <Mail className="h-5 w-5 text-black" />
                </button>
              </div>
            </div>
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  aria-label={social.ariaLabel}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.3, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <social.icon className="h-7 w-7" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-border/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Chestnut Mortgage. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <motion.a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                whileHover={{ x: 6, color: "#3b82f6" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                whileHover={{ x: 6, color: "#3b82f6" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                whileHover={{ x: 6, color: "#3b82f6" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Cookie Policy
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}