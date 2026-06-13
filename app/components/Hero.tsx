'use client'

import { motion } from 'framer-motion'

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FFF0F3 0%, #FFE4E8 40%, #FFF5F7 100%)',
      }}
    >
      {/* Decorative blobs */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, #F43F5E, #FB7185)' }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #4D7C6E, #6EE7B7)' }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Floating emojis */}
      <span className="animate-float absolute top-32 right-[15%] text-5xl select-none pointer-events-none">🌹</span>
      <span className="animate-float-delay absolute top-48 right-[8%] text-3xl select-none pointer-events-none">🌸</span>
      <span className="animate-float absolute bottom-40 right-[20%] text-4xl select-none pointer-events-none">💐</span>
      <span className="animate-float-delay absolute top-60 left-[5%] text-3xl select-none pointer-events-none hidden lg:block">🌷</span>
      <span className="animate-float absolute bottom-52 left-[8%] text-2xl select-none pointer-events-none hidden lg:block">🌺</span>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text side */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ background: 'rgba(225,29,72,0.08)', color: '#BE123C' }}
          >
            <span>⭐</span>
            <span>Toshkentning №1 gul do&apos;koni</span>
          </motion.div>

          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
              style={{ fontFamily: 'var(--font-playfair), serif', color: '#1a1a2e' }}
            >
              Har bir
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.25, ease }}
                className="block italic"
                style={{ color: '#E11D48' }}
              >
                lahza uchun
              </motion.span>
              chiroyli gullar
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease }}
            className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
          >
            Sevgingizni, quvonchingizni va mehr-muhabbatingizni chiroyli gul dastalar orqali
            ifodalang. Yangi va nafis gullar kundalik yetkazib beriladi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.a
              href="https://wa.me/998901234567?text=Assalomu%20alaykum!%20Gul%20buyurtma%20qilmoqchiman."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(225,29,72,0.35)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white font-semibold text-base"
              style={{ background: 'linear-gradient(135deg, #E11D48, #9F1239)' }}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Hozir buyurtma bering
            </motion.a>
            <motion.a
              href="#products"
              whileHover={{ scale: 1.04, backgroundColor: 'rgba(225,29,72,0.06)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base border-2 transition-colors"
              style={{ borderColor: '#E11D48', color: '#E11D48' }}
            >
              To&apos;plamni ko&apos;rish
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease }}
            className="mt-10 flex items-center gap-6 justify-center lg:justify-start"
          >
            <div className="flex -space-x-2">
              {['🙋‍♀️', '🙋‍♂️', '🙋', '🙋‍♀️'].map((e, i) => (
                <span
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-sm"
                  style={{ background: '#FFE4E8' }}
                >
                  {e}
                </span>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} viewBox="0 0 20 20" className="w-4 h-4 fill-amber-400">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-0.5">500+ mamnun mijoz</p>
            </div>
          </motion.div>
        </div>

        {/* Right card */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.92 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="hidden lg:flex justify-center lg:justify-end relative"
        >
          <div
            className="w-[420px] h-[480px] rounded-[2.5rem] relative overflow-hidden shadow-2xl"
            style={{ background: 'linear-gradient(160deg, #FFDDE5, #FFB3C6, #FF7096)' }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <motion.span
                className="text-[120px] leading-none drop-shadow-lg"
                animate={{ rotate: [0, 3, -3, 0], scale: [1, 1.04, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                💐
              </motion.span>
              <div className="text-center px-8">
                <p className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                  Yangi gullar
                </p>
                <p className="text-white/80 text-sm">Har kuni sabah keltiriladi</p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-2 rounded-full text-sm font-semibold text-rose-700 cursor-default"
                style={{ background: 'rgba(255,255,255,0.85)' }}
              >
                🚚 2-3 soat ichida yetkazish
              </motion.div>
            </div>
            <span className="animate-float absolute top-6 right-6 text-3xl select-none">🌸</span>
            <span className="animate-float-delay absolute bottom-8 left-8 text-3xl select-none">🌹</span>
            <span className="animate-float absolute top-1/3 right-8 text-2xl select-none">🌷</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease }}
            className="absolute -bottom-4 -left-8 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3"
          >
            <span className="text-2xl">🌹</span>
            <div>
              <p className="text-xs text-slate-500">Eng ommabop</p>
              <p className="font-bold text-rose-600">150,000 so&apos;mdan</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-xs text-slate-400 font-medium">Pastga aylantiring</span>
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
