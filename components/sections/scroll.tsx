"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const particleVariants = {
  animate: {
    y: [0, -20, 0],
    opacity: [0, 0.3, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};

const Panels: React.FC = () => {
  useEffect(() => {
    // Select all panels
    const panels: HTMLElement[] = gsap.utils.toArray(".panel");

    // Create pinning for each panel
    panels.forEach((panel: HTMLElement, i: number) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        end: i === panels.length - 1 ? "bottom bottom" : `+=${panel.offsetHeight}`,
        pin: true,
        pinSpacing: false,
        id: `panel-${i}`,
        anticipatePin: 1,
      });
    });

    // Refresh ScrollTrigger after a slight delay to ensure DOM is fully rendered
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    // Cleanup ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Description Section */}
      <div className="panel bg-black text-gray-100 flex items-center justify-center min-h-screen text-center p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')] opacity-5"></div>
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gray-400/30 rounded-full"
              style={{
                width: Math.random() * 4 + 2,
                height: Math.random() * 4 + 2,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate="animate"
              initial={{ opacity: 0 }}
            />
          ))}
        </div>
        <div className="relative z-10">
          <h1 className="md:text-7xl text-4xl font-extrabold text-gray-100 mb-4 tracking-tight">
            Your Journey to Homeownership Starts Here
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience a seamless mortgage process with personalized guidance every step of the way. 
            From pre-approval to closing, we're here to make your homeownership dreams a reality.
          </p>
          <div className="flex flex-col items-center mt-6">
            <span className="text-base">Scroll down</span>
            <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-200 mt-2" />
          </div>
        </div>
      </div>

      {/* Section ONE */}
      <section className="panel bg-gray-50 text-gray-900 flex items-center min-h-screen px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')] opacity-10"></div>
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gray-700/30 rounded-full"
              style={{
                width: Math.random() * 4 + 2,
                height: Math.random() * 4 + 2,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate="animate"
              initial={{ opacity: 0 }}
            />
          ))}
        </div>
        <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 p-4">
            <video
              className="w-[80%] max-h-[400px] mx-auto rounded-lg shadow-xl border-4 border-[#1A3C34] object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/f1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Find Your Dream Home with Confidence
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-[400px]">
              Take the first step towards your dream home with our streamlined pre-approval process. 
              Get expert guidance, competitive rates, and a stress-free closing experience tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Section TWO */}
      <section className="panel bg-gray-50 text-gray-900 flex items-center min-h-[100vh] px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')] opacity-10"></div>
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gray-700/30 rounded-full"
              style={{
                width: Math.random() * 4 + 2,
                height: Math.random() * 4 + 2,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate="animate"
              initial={{ opacity: 0 }}
            />
          ))}
        </div>
        <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Smart Refinancing for Better Rates
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-[400px]">
              Discover how refinancing can help you achieve your financial goals. Whether you're looking to 
              lower your monthly payments, reduce your interest rate, or shorten your loan term, we have the perfect solution for you.
            </p>
          </div>
          <div className="md:w-1/2 p-4">
            <video
              className="w-[80%] max-h-[400px] mx-auto rounded-lg shadow-xl border-4 border-[#1A3C34] object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/f2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      
      <section className="panel bg-gray-50 text-gray-900 flex items-center min-h-[100vh] px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')] opacity-10"></div>
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gray-700/30 rounded-full"
              style={{
                width: Math.random() * 4 + 2,
                height: Math.random() * 4 + 2,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate="animate"
              initial={{ opacity: 0 }}
            />
          ))}
        </div>
        <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 p-4">
            <video
              className="w-[80%] max-h-[400px] mx-auto rounded-lg shadow-xl border-4 border-[#1A3C34] object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/f3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Unlock Your Home's Hidden Value
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-[400px]">
              Transform your home's equity into financial opportunities. From home improvements to debt consolidation, 
              our flexible home equity solutions give you the freedom to achieve your financial goals.
            </p>
          </div>
        </div>
      </section>

      {/* Section FOUR */}
      {/* <section
        className="panel flex items-center justify-center min-h-screen px-6 bg-black bg-no-repeat relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/battery.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')] opacity-10"></div>
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gray-700/30 rounded-full"
              style={{
                width: Math.random() * 4 + 2,
                height: Math.random() * 4 + 2,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate="animate"
              initial={{ opacity: 0 }}
            />
          ))}
        </div>
        <div className="container mx-auto text-center text-gray-100 p-4 bg-[#1A3C34]/80 backdrop-blur-lg rounded-lg shadow-xl relative z-10">
          <h2 className="text-3xl font-extrabold text-gray-100 mb-4 tracking-tight">Section Four</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            This is the content for the fourth section. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </p>
        </div>
      </section> */}
    </>
  );
};

export default Panels;