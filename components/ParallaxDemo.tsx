"use client"

// components/ParallaxSection.tsx
import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface ParallaxSectionProps {
  children: React.ReactNode
  offset?: number // How much the element should move
  direction?: "up" | "down" | "left" | "right"
  className?: string
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  offset = 50,
  direction = "up",
  className = "",
}) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Calculate transform values based on direction
  const getTransformValue = () => {
    switch (direction) {
      case "up":
        return useTransform(scrollYProgress, [0, 1], [offset, -offset])
      case "down":
        return useTransform(scrollYProgress, [0, 1], [-offset, offset])
      case "left":
        return useTransform(scrollYProgress, [0, 1], [offset, -offset])
      case "right":
        return useTransform(scrollYProgress, [0, 1], [-offset, offset])
      default:
        return useTransform(scrollYProgress, [0, 1], [offset, -offset])
    }
  }

  const transformValue = getTransformValue()

  const style = () => {
    if (direction === "left" || direction === "right") {
      return { x: transformValue }
    }
    return { y: transformValue }
  }

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={style()}>{children}</motion.div>
    </div>
  )
}

// Demo layout component that uses the parallax effect
export const ParallaxDemo: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <ParallaxSection offset={100} direction="up" className="z-10">
          <div className="text-center">
            <h1 className="mb-4 text-5xl font-bold">Parallax Showcase</h1>
            <p className="text-xl">Scroll down to see the parallax effect in action</p>
          </div>
        </ParallaxSection>

        {/* Background image with slower parallax */}
        <ParallaxSection offset={30} direction="down" className="absolute inset-0 -z-10">
          <div className="h-full w-full bg-gradient-to-b from-blue-500 to-purple-700 opacity-80">
            hi
          </div>
        </ParallaxSection>
      </section>

      {/* Content Sections */}
      <section className="bg-slate-100 px-4 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2">
          <ParallaxSection offset={50} direction="left">
            <Card className="h-full">
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-bold">Left Parallax Card</h2>
                <p>This card moves from right to left as you scroll down the page.</p>
              </CardContent>
            </Card>
          </ParallaxSection>

          <ParallaxSection offset={50} direction="right">
            <Card className="h-full">
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-bold">Right Parallax Card</h2>
                <p>This card moves from left to right as you scroll down the page.</p>
              </CardContent>
            </Card>
          </ParallaxSection>
        </div>
      </section>

      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <ParallaxSection offset={30} direction="up">
            <Card className="mb-10">
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-bold">Upward Parallax Effect</h2>
                <p>This section moves upward as you scroll down, creating a sense of depth.</p>
              </CardContent>
            </Card>
          </ParallaxSection>

          <ParallaxSection offset={20} direction="down">
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-bold">Downward Parallax Effect</h2>
                <p>This section moves downward as you scroll, providing a contrasting movement.</p>
              </CardContent>
            </Card>
          </ParallaxSection>
        </div>
      </section>
    </div>
  )
}
