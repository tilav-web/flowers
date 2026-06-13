const quickLinks = [
  { label: 'Bosh Sahifa', href: '#home' },
  { label: 'Mahsulotlar', href: '#products' },
  { label: 'Haqimizda', href: '#about' },
  { label: "Bog'lanish", href: '#contact' },
]

const categories = [
  'Atirgullar',
  'Lalalar',
  'Gidrangeya',
  'Premium to\'plamlar',
  "To'y bezaklari",
]

export default function Footer() {
  return (
    <footer style={{ background: '#1a0a0f' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌸</span>
              <span
                className="text-xl font-bold"
                style={{ fontFamily: 'var(--font-playfair), serif', color: '#FFE4E8' }}
              >
                Gullar Olami
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#9CA3AF' }}>
              Toshkentda 2019-yildan beri faoliyat yuritib kelayotgan ishonchli gul do&apos;koni.
              Yangi va nafis gullar — har kuni yetkazib beramiz.
            </p>
            <div className="flex gap-3">
              {[
                { label: 'Instagram', href: '#', bg: 'linear-gradient(135deg,#E1306C,#F77737)' },
                { label: 'Telegram', href: '#', bg: 'linear-gradient(135deg,#0088CC,#2AABEE)' },
                { label: 'Facebook', href: '#', bg: 'linear-gradient(135deg,#1877F2,#42B5FF)' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-xs font-bold transition-all hover:scale-110"
                  style={{ background: s.bg }}
                  aria-label={s.label}
                >
                  {s.label[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5" style={{ color: '#F43F5E' }}>
              Sahifalar
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: '#9CA3AF' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5" style={{ color: '#F43F5E' }}>
              Kategoriyalar
            </h4>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat}>
                  <a
                    href="#products"
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: '#9CA3AF' }}
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5" style={{ color: '#F43F5E' }}>
              Aloqa
            </h4>
            <ul className="space-y-3">
              {[
                { icon: '📞', text: '+998 90 123 45 67', href: 'tel:+998901234567' },
                { icon: '💬', text: 'WhatsApp', href: 'https://wa.me/998901234567' },
                { icon: '📍', text: "Chilonzor tumani, Toshkent", href: null },
                { icon: '🕐', text: '08:00 – 22:00', href: null },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-sm">{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-sm hover:text-white transition-colors"
                      style={{ color: '#9CA3AF' }}
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-sm" style={{ color: '#9CA3AF' }}>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p className="text-xs" style={{ color: '#6B7280' }}>
            © 2025 Gullar Olami. Barcha huquqlar himoyalangan.
          </p>
          <p className="text-xs" style={{ color: '#6B7280' }}>
            🌸 Sevgi bilan tayyorlandi · Toshkent, O&apos;zbekiston
          </p>
        </div>
      </div>
    </footer>
  )
}
