"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { business } from "@/lib/data";

export function WhatsAppFloat() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={business.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Plug & Play on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-whatsapp)] text-white glow-whatsapp md:h-16 md:w-16"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
    >
      {!reduceMotion && (
        <motion.span
          aria-hidden
          className="absolute inset-0 rounded-full bg-[var(--color-whatsapp)]"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <MessageCircle className="relative h-7 w-7" strokeWidth={2} />
    </motion.a>
  );
}
