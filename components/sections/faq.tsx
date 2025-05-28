"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What types of mortgages does Chestnut Mortgage offer?",
    answer:
      "We offer a variety of mortgage options, including fixed-rate, adjustable-rate, FHA, VA, and jumbo loans, tailored to first-time buyers, investors, and those seeking refinancing.",
  },
  {
    question: "How does Chestnut AI™ help me save on my mortgage?",
    answer:
      "Chestnut AI™ compares offers from over 100 lenders, monitors rates in real-time, and uses automation to reduce fees, ensuring you get the best deal possible.",
  },
  {
    question: "What documents are needed to apply for a mortgage?",
    answer:
      "Typically, you'll need proof of income (e.g., pay stubs, tax returns), credit history, bank statements, and identification. Our team will guide you through the process.",
  },
  {
    question: "How long does the mortgage approval process take?",
    answer:
      "The approval process varies but typically takes 30-45 days. Chestnut Mortgage streamlines this with AI-driven tools to expedite reviews and approvals.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="py-24 px-4 bg-white"
      id="faq"
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
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
            Your mortgage questions answered by our Chestnut AI™ experts.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="relative group"
              >
                <motion.div
                  className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{
                    scale: 1.01,
                    transition: { type: "spring", stiffness: 300, damping: 15 },
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    className="w-full flex justify-between items-center p-6 text-left"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown
                        className="h-5 w-5 text-blue-600"
                        aria-hidden="true"
                      />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: "auto", 
                          opacity: 1,
                          transition: {
                            height: { duration: 0.3, ease: "easeOut" },
                            opacity: { duration: 0.2, delay: 0.1 }
                          }
                        }}
                        exit={{ 
                          height: 0, 
                          opacity: 0,
                          transition: {
                            height: { duration: 0.2 },
                            opacity: { duration: 0.1 }
                          }
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 -mt-2 text-gray-600">
                          <div className="border-t border-gray-100 pt-4">
                            {faq.answer}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-6">
              Still have questions? We're here to help.
            </p>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Contact Our Team
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}