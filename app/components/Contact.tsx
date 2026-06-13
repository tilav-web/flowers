'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const contactItems = [
  { icon: '📍', label: 'Manzil',    value: "Toshkent sh., Chilonzor tumani, 5-kvartal, 12-uy", href: 'https://maps.google.com' },
  { icon: '📞', label: 'Telefon',   value: '+998 90 123 45 67', href: 'tel:+998901234567' },
  { icon: '💬', label: 'WhatsApp',  value: '+998 90 123 45 67', href: 'https://wa.me/998901234567' },
  { icon: '🕐', label: 'Ish vaqti', value: 'Har kuni: 08:00 – 22:00', href: null },
]

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const text = `Assalomu alaykum!\n\nIsm: ${form.name}\nTelefon: ${form.phone}\nXabar: ${form.message || "(ko'rsatilmagan)"}\n\nSizning saytingiz orqali yuborildi.`
    window.open(`https://wa.me/998901234567?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <section id="contact" className="py-20 sm:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: 'rgba(225,29,72,0.08)', color: '#BE123C' }}
          >
            📬 Bog&apos;lanish
          </span>
          <h2 className="section-title mb-4">Buyurtma bering</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            WhatsApp orqali tezda buyurtma bering yoki biz bilan bog&apos;laning. 24/7 xizmatdamiz!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Info card — slides from left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease }}
          >
            <div
              className="rounded-3xl p-8 h-full"
              style={{ background: 'linear-gradient(135deg, #9F1239, #E11D48)' }}
            >
              <h3
                className="text-2xl font-bold text-white mb-2"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Biz bilan bog&apos;laning
              </h3>
              <p className="text-rose-200 mb-8">
                Har qanday savol va buyurtma uchun qulay vaqtda bog&apos;laning.
              </p>

              <div className="space-y-5">
                {contactItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' }}
                    className="flex items-start gap-4"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: 'rgba(255,255,255,0.15)' }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-rose-200 text-xs mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white font-medium hover:text-rose-200 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/20">
                <p className="text-rose-200 text-sm mb-4">Ijtimoiy tarmoqlar</p>
                <div className="flex gap-3">
                  {[
                    { label: 'Instagram', href: '#', bg: 'linear-gradient(135deg,#E1306C,#F77737)' },
                    { label: 'Telegram',  href: '#', bg: 'linear-gradient(135deg,#0088CC,#2AABEE)' },
                    { label: 'Facebook',  href: '#', bg: 'linear-gradient(135deg,#1877F2,#42B5FF)' },
                  ].map((s) => (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      whileHover={{ scale: 1.15, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-white text-xs font-bold"
                      style={{ background: s.bg }}
                      aria-label={s.label}
                    >
                      {s.label[0]}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form — slides from right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="bg-white rounded-3xl p-8 border border-rose-100 shadow-sm"
          >
            <h3
              className="text-2xl font-bold text-slate-900 mb-2"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Buyurtma formasi
            </h3>
            <p className="text-slate-500 mb-7 text-sm">
              Formani to&apos;ldiring — WhatsApp orqali javob oling!
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { label: 'Ismingiz', key: 'name', type: 'text', placeholder: 'Masalan: Nilufar', required: true },
                { label: 'Telefon raqam', key: 'phone', type: 'tel', placeholder: '+998 90 000 00 00', required: true },
              ].map((field, i) => (
                <motion.div
                  key={field.key}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 + 0.2, ease: 'easeOut' }}
                >
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {field.label} {field.required && <span style={{ color: '#E11D48' }}>*</span>}
                  </label>
                  <input
                    type={field.type}
                    required={field.required}
                    placeholder={field.placeholder}
                    value={form[field.key as keyof typeof form]}
                    onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:outline-none focus:border-rose-400 text-slate-800 transition-colors"
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.36, ease: 'easeOut' }}
              >
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Xabar <span className="text-slate-400 font-normal">(ixtiyoriy)</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Qaysi gul kerak, qachon yetkazilsin, maxsus xohishlar..."
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:outline-none focus:border-rose-400 text-slate-800 transition-colors resize-none"
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 16px 32px rgba(225,29,72,0.35)' }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-4 rounded-xl font-semibold text-white text-base flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, #E11D48, #9F1239)' }}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp orqali buyurtma
              </motion.button>

              <p className="text-center text-xs text-slate-400">
                Tugmani bossangiz, WhatsApp ochiladi va xabar avtomatik to&apos;ldiriladi
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
