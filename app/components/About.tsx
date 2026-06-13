'use client'

import { motion } from 'framer-motion'

const guarantees = [
  "Yangi va sifatli gullar — har kuni import qilinadi",
  "Professional florist ustalar bilan ishlash",
  "O'z vaqtida va xavfsiz yetkazib berish",
  "Har qanday miqyosdagi buyurtma qabul qilinadi",
  "Buyurtmadan keyin bepul tahrirlash imkoni",
]

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #fff 0%, #FFF0F3 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left: text slides from left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease }}
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
              style={{ background: 'rgba(225,29,72,0.08)', color: '#BE123C' }}
            >
              🌺 Biz haqimizda
            </span>

            <h2
              className="text-4xl sm:text-5xl font-bold leading-tight mb-6 text-slate-900"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Gullar bilan
              <span className="italic block" style={{ color: '#E11D48' }}>
                his-tuyg&apos;ularingizni
              </span>
              ifodalang
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6 text-lg">
              <strong className="text-slate-800">Gullar Olami</strong> — 2019-yildan beri Toshkentda
              faoliyat yuritib kelayotgan ishonchli gul do&apos;koni. Biz har bir buyurtmaga alohida
              e&apos;tibor qaratamiz va har bir mijozimiz uchun uniqum gul dastalar tayyorlaymiz.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Floristlarimiz 10+ yillik tajribaga ega. Biz faqat eng yangi va sifatli gullarni
              ishlatamiz, chunki sizning xursandchiligingiz bizning asosiy maqsadimizdir.
            </p>

            <ul className="space-y-3 mb-8">
              {guarantees.map((g, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
                  className="flex items-start gap-3"
                >
                  <span
                    className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(225,29,72,0.1)' }}
                  >
                    <svg viewBox="0 0 20 20" className="w-3.5 h-3.5" fill="currentColor" style={{ color: '#E11D48' }}>
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-slate-700">{g}</span>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 16px 32px rgba(225,29,72,0.3)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white text-base"
              style={{ background: 'linear-gradient(135deg, #E11D48, #9F1239)' }}
            >
              Biz bilan bog&apos;laning
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Right: grid slides from right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="relative grid grid-cols-2 gap-4"
          >
            {[
              { emoji: '🌹', title: 'Atirgullar', sub: '50+ nav', bg: 'linear-gradient(135deg,#FFE4E8,#FECDD3)' },
              { emoji: '🌷', title: 'Lalalar', sub: '30+ rang', bg: 'linear-gradient(135deg,#FFFBEB,#FDE68A)' },
              { emoji: '💐', title: 'Dastalar', sub: '100+ dizayn', bg: 'linear-gradient(135deg,#F0FFF4,#BBF7D0)' },
              { emoji: '🌺', title: 'Ekzotik', sub: 'Maxsus buyurtma', bg: 'linear-gradient(135deg,#F5F3FF,#DDD6FE)' },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 + 0.2, ease: 'easeOut' }}
                whileHover={{ scale: 1.04, y: -4 }}
                className="rounded-3xl p-6 flex flex-col items-center text-center"
                style={{ background: card.bg }}
              >
                <motion.span
                  className="text-5xl mb-3"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  {card.emoji}
                </motion.span>
                <p className="font-bold text-slate-800" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                  {card.title}
                </p>
                <p className="text-sm text-slate-500 mt-1">{card.sub}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, ease }}
              className="absolute -bottom-6 right-0 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3"
            >
              <span className="text-2xl">🏆</span>
              <div>
                <p className="text-xs text-slate-500">Toshkentda</p>
                <p className="font-bold text-slate-800">#1 Gul do&apos;koni</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
