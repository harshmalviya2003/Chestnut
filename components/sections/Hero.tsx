"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Star, Zap, BrainCircuit, Rocket, BarChart, Cpu } from "lucide-react"
import { TypeAnimation } from 'react-type-animation'

export function Hero() {
  return (
    <section className="relative pt-12 md:pt-20 pb-16 md:pb-28 px-4 overflow-hidden bg-white/90 backdrop-blur-md" id="home">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#0022DF]/10 blur-3xl"
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-[#0022DF]/10 blur-3xl"
        />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-3 py-1.5 md:px-4 md:py-2 bg-white rounded-full shadow-sm border border-gray-200 hover:border-[#0022DF] transition-colors">
              <Zap className="h-4 md:h-5 w-4 md:w-5 text-[#0022DF] fill-[#0022DF]/20" />
              <span className="text-sm md:text-base font-medium text-gray-700">Next-gen AI Platform</span>
              <Rocket className="h-4 md:h-5 w-4 md:w-5 text-[#0022DF] ml-1 md:ml-2" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4 md:mb-6 tracking-tight text-black">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0022DF] to-[#00a0df]">
                AI-powered <br />
              </span>
              <TypeAnimation
                sequence={[
                  'Solutions',
                  2000,
                  'Innovation',
                  2000,
                  'Intelligence',
                  2000,
                  'Automation',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="inline-block"
                style={{ 
                  fontSize: 'inherit',
                  lineHeight: 'inherit',
                  display: 'inline-block',
                  width: '100%',
                  minHeight: '1.2em' // Prevents layout shift during animation
                }}
              />
            </h1>
            
            <p className="text-gray-700 text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 max-w-lg leading-relaxed">
              Transform your business with our intelligent platform that learns and adapts in real-time. 
              <span className="font-semibold text-[#0022DF]"> 50% faster processing</span> with 
              <span className="font-semibold"> 99.9% accuracy</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
              <Button 
                className="text-white transition-all hover:scale-[1.03] hover:shadow-lg active:scale-95 text-base md:text-lg py-2 md:py-3 px-4 md:px-6"
                style={{ 
                  backgroundColor: '#0022DF',
                  backgroundImage: 'linear-gradient(to right, #0022DF, #0066ff)'
                }}
                size="lg"
              >
                <BrainCircuit className="mr-2 h-5 w-5 md:h-6 md:w-6" />
                Get Started
              </Button>
              <Button 
                variant="outline" 
                className="border-[#0022DF] text-[#0022DF] hover:bg-[#0022DF]/10 transition-all text-base md:text-lg py-2 md:py-3 px-4 md:px-6"
                size="lg"
              >
                <BarChart className="mr-2 h-5 w-5 md:h-6 md:w-6" />
                Live Demo
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              <div className="inline-flex items-center px-2.5 py-1 md:px-3 md:py-1.5 bg-white rounded-full text-sm md:text-base font-medium text-black shadow-sm border border-gray-200 hover:border-[#0022DF] transition-colors">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full mr-1.5 md:mr-2 animate-pulse"></span>
                Real-time AI
              </div>
              
              <div className="inline-flex items-center px-2.5 py-1 md:px-3 md:py-1.5 bg-white rounded-full text-sm md:text-base font-medium text-black shadow-sm border border-gray-200 hover:border-[#0022DF] transition-colors">
                <Cpu className="h-3.5 w-3.5 md:h-4 md:w-4 text-[#0022DF] mr-1 md:mr-1.5" />
                Neural Networks
              </div>
              
              <div className="flex items-center bg-white px-2.5 py-1 md:px-3 md:py-1.5 rounded-full shadow-sm border border-gray-200">
                <div className="flex -space-x-1.5 md:-space-x-2 mr-1.5 md:mr-2">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#0022DF]/10 border-2 border-white flex items-center justify-center text-[10px] md:text-xs font-bold text-[#0022DF]">A</div>
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#0022DF]/10 border-2 border-white flex items-center justify-center text-[10px] md:text-xs font-bold text-[#0022DF]">I</div>
                </div>
                <div className="flex items-center">
                  <Star className="h-3 w-3 md:h-3.5 md:w-3.5 text-[#0022DF] fill-[#0022DF] mr-0.5 md:mr-1" />
                  <span className="text-base md:text-lg font-medium text-gray-800">4.9</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex justify-center mt-8 md:mt-0"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              {/* Floating AI elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 z-10 w-16 h-16 md:w-24 md:h-24 bg-white rounded-lg shadow-md border border-gray-200 flex items-center justify-center p-2 md:p-3"
              >
                <BrainCircuit className="h-5 md:h-8 w-5 md:w-8 text-[#0022DF]" />
                <span className="absolute -bottom-1.5 md:-bottom-2 bg-white px-1 py-0.5 md:px-1.5 md:py-0.5 rounded text-[10px] md:text-xs font-bold text-[#0022DF] border border-gray-200">AI Core</span>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -right-4 z-10 w-16 h-16 md:w-24 md:h-24 bg-white rounded-lg shadow-md border border-gray-200 flex items-center justify-center p-2 md:p-3"
              >
                <div className="text-center">
                  <div className="text-lg md:text-xl font-bold text-[#0022DF]">99.9%</div>
                  <div className="text-[8px] md:text-[10px] text-gray-600">Accuracy</div>
                </div>
              </motion.div>
              
              {/* Compact video container */}
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl border-4 md:border-[6px] border-white transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <video 
                  src="/hero.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 flex justify-between items-center">
                  <div className="bg-black/70 text-white text-[10px] md:text-xs px-1.5 py-0.5 md:px-2 md:py-1 rounded">AI Processing</div>
                  <div className="bg-[#0022DF] text-white text-[10px] md:text-xs px-1.5 py-0.5 md:px-2 md:py-1 rounded flex items-center">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full mr-0.5 md:mr-1 animate-pulse"></span>
                    Live
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}