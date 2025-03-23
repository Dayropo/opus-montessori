"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
 // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
import * as LucideIcons from "lucide-react"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"

interface PrincipleCardProps {
  principle: GuidingPrinciple
}

const PrincipleCard: React.FC<PrincipleCardProps> = ({ principle }) => {
  const [expanded] = useState(true)

  // Get the icon dynamically with proper typing
  const getDynamicIcon = (): LucideIcon => {
    // Cast to unknown first, then to a record of LucideIcon components
    const iconsMap = LucideIcons as unknown as Record<string, LucideIcon>
    return iconsMap[principle.iconName] || LucideIcons.School
  }

  const IconComponent = getDynamicIcon()

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        className={cn(
          "overflow-hidden transition-all duration-300",
          expanded ? "col-span-2 md:row-span-2" : "",
        )}
      >
        <CardHeader className="flex flex-col items-center gap-4 md:flex-row">
          <div className="bg-school-green/10 rounded-full md:p-3">
            <IconComponent className="text-school-green h-6 w-6" />
          </div>
          <div className="text-center md:text-left">
            <CardTitle>{principle.title}</CardTitle>
            {!expanded && <CardDescription>{principle.shortDescription}</CardDescription>}
          </div>
        </CardHeader>

        <CardContent>
          {expanded ? (
            <div className="space-y-4">
              <p className="text-sm md:text-base">{principle.fullDescription}</p>
              <div className="relative h-60 w-full overflow-hidden rounded-md">
                <Image
                  src={principle.imageSrc}
                  alt={principle.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ) : null}
        </CardContent>

        {/* <CardFooter>
          <Button
            variant="ghost"
            onClick={() => setExpanded(!expanded)}
            className="text-school-green hover:text-school-green/80 cursor-pointer"
          >
            {expanded ? "Show Less" : "Learn More"}
          </Button>
        </CardFooter> */}
      </Card>
    </motion.div>
  )
}

export default PrincipleCard
