'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '1000+', label: 'Gul turi', icon: '🌸' },
  { value: '500+',  label: 'Mamnun mijoz', icon: '😊' },
  { value: '3 soat', label: 'Yetkazish vaqti', icon: '🚚' },
  { value: '5 yil', label: 'Tajriba', icon: '🏆' },
]

export default function Stats() {
  return (
    <section className="py-8 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-3xl p-6 sm:p-8 shadow-xl"
          style={{ background: 'linear-gradient(135deg, #9F1239, #E11D48)' }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              className="flex flex-col items-center text-center gap-1"
            >
              <motion.span
                className="text-3xl mb-1"
                whileInView={{ scale: [0.5, 1.2, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
              >
                {s.icon}
              </motion.span>
              <span
                className="text-3xl sm:text-4xl font-bold text-white"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                {s.value}
              </span>
              <span className="text-sm text-rose-200">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
