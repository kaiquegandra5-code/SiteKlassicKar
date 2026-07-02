export default function Logo({ size = 'md', className = '' }) {
  const dims = {
    sm: { box: 'h-8 w-8',  text: 'text-base' },
    md: { box: 'h-9 w-9',  text: 'text-lg'   },
    lg: { box: 'h-12 w-12', text: 'text-2xl' },
  }
  const d = dims[size] ?? dims.md
  return (
    <a href="#top" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <span
        className={`relative grid place-items-center rounded-xl ${d.box} bg-ink-300 ring-1 ring-white/10
                    shadow-glow-purple transition-all duration-300 group-hover:shadow-glow-mix`}
      >
        <span className="absolute inset-0 rounded-xl bg-gradient-brand opacity-20" aria-hidden />
        <span className="font-display font-bold text-gradient text-base">K</span>
      </span>
      <span className={`font-display font-bold tracking-tight ${d.text}`}>
        <span className="text-white">Klassic</span>
        <span className="text-gradient"> Kar</span>
      </span>
    </a>
  )
}
