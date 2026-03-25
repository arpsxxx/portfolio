"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

type SectionRevealProps = {
  children: ReactNode
  className?: string
}

export default function SectionReveal({
  children,
  className = "",
}: SectionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}