'use client'

import { motion } from 'framer-motion'

const reviews = [
  {
    name: 'Nilufar Sotvoldiyeva',
    role: 'Doimiy mijoz',
    avatar: '👩',
    rating: 5,
    text: "Turmush o'rtog'imga 8-mart kuni buyurtma berdim. Gullar juda chiroyli va yangi edi! Yetkazish vaqti ham aniq, bir daqiqalik kechikish bo'lmadi. Albatta yana buyurtma beraman!",
    date: 'Mart 2025',
  },
  {
    name: 'Bobur Toshmatov',
    role: 'Tadbirkor',
    avatar: '👨',
    rating: 5,
    text: "Onam uchun tug'ilgan kunga yetkazib berishdi. Aniq vaqtida, gullar sifatli. Floristlar juda chiroyli dizayn qilishgan. Narx ham mos, sifatiga yarasha. Tavsiya qilaman!",
    date: 'Aprel 2025',
  },
  {
    name: 'Malika Rahimova',
    role: 'Kelin',
    avatar: '👰',
    rating: 5,
    text: "To'y bezaklari uchun buyurtma berdim — zal, stol va kelin gulchambarini. Hammasi mukammal chiqdi! Mehmonlar juda maqtashdi. Professional va mas'uliyatli jamoa.",
    date: 'May 2025',
  },
]

export default function Testimonials() {
  return (
    <section
      className="py-20 sm:py-28"
      style={{ background: 'linear-gradient(135deg, #FFF0F3, #FFF9FB)' }}
    >
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
            💬 Mijozlar fikri
          </span>
          <h2 className="section-title mb-4">Mijozlarimiz nima deydi?</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            500+ mamnun mijozimizning fikr-mulohazalari bizni ilhomlantiradi.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] }}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(225,29,72,0.1)' }}
              className="bg-white rounded-3xl p-7 border border-rose-100 relative"
            >
              <div
                className="absolute top-5 right-6 text-6xl font-bold leading-none select-none"
                style={{ color: 'rgba(225,29,72,0.07)', fontFamily: 'serif' }}
              >
                &ldquo;
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <motion.svg
                    key={j}
                    viewBox="0 0 20 20"
                    className="w-4 h-4 fill-amber-400"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + j * 0.06 + 0.3, type: 'spring', stiffness: 400 }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed mb-6 relative z-10">&ldquo;{r.text}&rdquo;</p>

              <div className="flex items-center gap-3 pt-5 border-t border-rose-50">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: '#FFE4E8' }}
                >
                  {r.avatar}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{r.name}</p>
                  <p className="text-xs text-slate-400">{r.role} · {r.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rating */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <div className="text-center">
            <p
              className="text-6xl font-bold"
              style={{ fontFamily: 'var(--font-playfair), serif', color: '#E11D48' }}
            >
              4.9
            </p>
            <div className="flex gap-1 justify-center mt-1">
              {[1,2,3,4,5].map(i => (
                <svg key={i} viewBox="0 0 20 20" className="w-5 h-5 fill-amber-400">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-slate-500 mt-1">500+ sharh asosida</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
