'use client'

import { motion } from 'framer-motion'

const products = [
  {
    id: 1,
    name: 'Qizil Atirgullar',
    desc: "Klassik qizil atirgullar — sevgi va ehtiromning timsolidir. 25 ta yoki 51 ta dastada.",
    price: '150 000',
    badge: 'Ommabop',
    badgeColor: '#E11D48',
    gradient: 'linear-gradient(135deg, #FFF0F3, #FFD6E0)',
    emoji: '🌹',
    tag: 'Romantik',
  },
  {
    id: 2,
    name: 'Atirgul & Gidrangeya',
    desc: 'Atirgul va gidrangeya uyg\'unligi — zamonaviy va nafis dizayn.',
    price: '220 000',
    badge: 'Yangi',
    badgeColor: '#4D7C6E',
    gradient: 'linear-gradient(135deg, #F0FFF4, #D1FAE5)',
    emoji: '💐',
    tag: "To'y",
  },
  {
    id: 3,
    name: 'Lola To\'plami',
    desc: "Rang-barang lalalar to'plami — bahor kayfiyatini uyingizga olib keling.",
    price: '130 000',
    badge: 'Arzon',
    badgeColor: '#D97706',
    gradient: 'linear-gradient(135deg, #FFFBEB, #FDE68A)',
    emoji: '🌷',
    tag: 'Bahor',
  },
  {
    id: 4,
    name: "Oq Atirgullar",
    desc: "Sof va nafis oq atirgullar — to'y va maxsus kunlar uchun ideal tanlov.",
    price: '180 000',
    badge: "To'y",
    badgeColor: '#7C3AED',
    gradient: 'linear-gradient(135deg, #F5F3FF, #EDE9FE)',
    emoji: '🪷',
    tag: 'Elegans',
  },
  {
    id: 5,
    name: 'Rangli Aralash',
    desc: 'Turli xil rangdagi gullar uyg\'unligi — quvonch va xursandchilik uchun.',
    price: '200 000',
    badge: 'Tanlangan',
    badgeColor: '#DB2777',
    gradient: 'linear-gradient(135deg, #FDF2F8, #FCE7F3)',
    emoji: '🌺',
    tag: 'Bayram',
  },
  {
    id: 6,
    name: 'Premium To\'plam',
    desc: 'Ekzotik gullar va premium dizayn — o\'ziga xos sovg\'a uchun mukammal tanlov.',
    price: '350 000',
    badge: 'Premium',
    badgeColor: '#B45309',
    gradient: 'linear-gradient(135deg, #FFFBEB, #FEF3C7)',
    emoji: '👑',
    tag: 'Maxsus',
  },
]

export default function Products() {
  return (
    <section id="products" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
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
            🌸 Bizning to&apos;plamimiz
          </span>
          <h2 className="section-title mb-4">Ommabop gul dastalar</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Har qanday munosabat uchun ideal gul dastani toping.
            Barchasi yangi va sifatli gullardan tayyorlanadi.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] }}
              whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(225,29,72,0.15)' }}
              className="rounded-3xl overflow-hidden border border-rose-100 bg-white cursor-default"
            >
              {/* Image area */}
              <div
                className="h-52 flex items-center justify-center relative"
                style={{ background: p.gradient }}
              >
                <motion.span
                  className="text-8xl"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {p.emoji}
                </motion.span>
                <span
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: p.badgeColor }}
                >
                  {p.badge}
                </span>
                <span
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium"
                  style={{ background: 'rgba(255,255,255,0.8)', color: '#64748b' }}
                >
                  {p.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className="text-xl font-bold text-slate-900 mb-2"
                  style={{ fontFamily: 'var(--font-playfair), serif' }}
                >
                  {p.name}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400">Narxi</span>
                    <p className="text-xl font-bold" style={{ color: '#E11D48' }}>
                      {p.price} <span className="text-sm font-normal text-slate-500">so&apos;m</span>
                    </p>
                  </div>
                  <motion.a
                    href={`https://wa.me/998901234567?text=${encodeURIComponent(`Assalomu alaykum! "${p.name}" gul dastasini buyurtma qilmoqchiman. Narxi: ${p.price} so'm`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
                    style={{ background: 'linear-gradient(135deg, #E11D48, #9F1239)' }}
                  >
                    Buyurtma
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-slate-500 mb-4">Boshqa variantlar ham bor. Biz bilan bog&apos;laning!</p>
          <motion.a
            href="https://wa.me/998901234567?text=Assalomu%20alaykum!%20Katalogni%20ko%27rmoqchiman."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, backgroundColor: 'rgba(225,29,72,0.06)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-semibold text-base border-2 transition-colors"
            style={{ borderColor: '#E11D48', color: '#E11D48' }}
          >
            To&apos;liq katalogni ko&apos;rish
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
