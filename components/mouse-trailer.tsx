"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function MouseTrailer() {
  const [size, setSize] = useState(40)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - size / 2)
      mouseY.set(e.clientY - size / 2)
    }

    const handleMouseEnter = () => setSize(80)
    const handleMouseLeave = () => setSize(40)

    // Add listeners for mouse movement
    window.addEventListener("mousemove", handleMouseMove)

    // Add listeners for interactive elements
    const interactiveElements = document.querySelectorAll("button, a, input")
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [mouseX, mouseY, size])

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[999] mix-blend-difference"
      style={{
        width: size,
        height: size,
        x: springX,
        y: springY,
      }}
    >
      <div className="h-full w-full rounded-full bg-white" />
    </motion.div>
  )
}