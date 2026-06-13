'use client'

import { motion } from 'framer-motion'

const features = [
  {
    icon: '🌹',
    title: 'Yangi Gullar',
    desc: 'Har kuni sabahdan yangi gullar keltiriladi. Faqat yangi, sifatli gullardan foydalanamiz.',
    gradient: 'linear-gradient(135deg, #FFE4E8, #FECDD3)',
    color: '#E11D48',
  },
  {
    icon: '🚚',
    title: 'Tez Yetkazish',
    desc: "Toshkent bo'ylab 2-3 soat ichida eshigingizbgacha yetkazib beramiz.",
    gradient: 'linear-gradient(135deg, #ECFDF5, #BBF7D0)',
    color: '#059669',
  },
  {
    icon: '✂️',
    title: 'Professional Dizayn',
    desc: '10+ yillik tajribali floristlarimiz har bir dastani alohida qo\'lda tayyorlaydi.',
    gradient: 'linear-gradient(135deg, #F5F3FF, #DDD6FE)',
    color: '#7C3AED',
  },
  {
    icon: '📱',
    title: 'Qulay Buyurtma',
    desc: "WhatsApp orqali 24/7 buyurtma bering. Muammo yo'q, tez va oson!",
    gradient: 'linear-gradient(135deg, #FFFBEB, #FDE68A)',
    color: '#D97706',
  },
]

export default function Features() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: 'rgba(225,29,72,0.08)', color: '#BE123C' }}
          >
            💡 Afzalliklarimiz
          </span>
          <h2 className="section-title mb-4">Nima uchun bizni tanlaysiz?</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Mijozlarimiz bizni tanlashining asosiy sabablari — sifat, tezlik va ishonch.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.82, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] }}
              whileHover={{ y: -8, scale: 1.03, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="rounded-3xl p-7 flex flex-col items-center text-center border border-white"
              style={{ background: f.gradient }}
            >
              <motion.div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-5 shadow-sm"
                style={{ background: 'rgba(255,255,255,0.8)' }}
                whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                {f.icon}
              </motion.div>
              <h3
                className="text-lg font-bold mb-3"
                style={{ fontFamily: 'var(--font-playfair), serif', color: f.color }}
              >
                {f.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
