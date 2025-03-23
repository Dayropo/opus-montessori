"use client"

import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    { title: "About us", href: "#" },
    { title: "Admissions", href: "#" },
    { title: "Blog", href: "#" },
    { title: "Contact us", href: "#" },
  ]

  return (
    <header className="bg-card font-montserrat sticky top-0 z-50 flex h-[72px] w-full items-center">
      <div className="container mx-auto px-5">
        <nav className="flex h-full items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image src="/logo.jpg" alt="logo" width={200} height={60} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-5 lg:flex">
            {menuItems.map(item => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="text-lg font-medium underline-offset-4 hover:underline"
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <Button asChild type="button" size="lg">
                <Link href="#">Schedule a tour</Link>
              </Button>
            </li>
          </ul>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-9 w-9" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <VisuallyHidden>
                  <SheetTitle>Menu</SheetTitle>
                </VisuallyHidden>
                <div className="mt-8 flex flex-col gap-8">
                  <AnimatePresence>
                    <motion.nav
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                      className="font-montserrat flex flex-col gap-6 px-4"
                    >
                      {menuItems.map((item, index) => (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            href={item.href}
                            className="text-lg font-medium underline-offset-4 hover:underline"
                            onClick={() => toggleMenu()}
                          >
                            {item.title}
                          </Link>
                        </motion.div>
                      ))}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: menuItems.length * 0.1 }}
                        className="mt-4"
                      >
                        <Button asChild size="lg" className="w-full">
                          <Link href="#" onClick={() => toggleMenu()}>
                            Schedule a tour
                          </Link>
                        </Button>
                      </motion.div>
                    </motion.nav>
                  </AnimatePresence>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
