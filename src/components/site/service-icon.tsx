import type { ReactNode } from 'react'
import type { ServiceIcon as IconName } from '~/lib/site-defaults'

// Line icons drawn after the ones in the intro video: white strokes with one cyan detail.
const W = '#fff'
const C = 'var(--cyan)'

export function ServiceIcon({ name }: { name: IconName }) {
  return (
    <svg viewBox="0 0 64 48" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}

const icons: Record<IconName, ReactNode> = {
  business: (
    <>
      <rect x="6" y="28" width="9" height="12" fill={W} />
      <rect x="20" y="20" width="9" height="20" fill={W} />
      <rect x="34" y="12" width="9" height="28" fill={W} />
      <rect x="48" y="2" width="9" height="38" fill={C} />
      <rect x="4" y="44" width="56" height="3" fill={W} />
    </>
  ),
  fullstack: (
    <g fill="none" stroke={W} strokeWidth="2.5">
      <rect x="10" y="3" width="44" height="16" />
      <rect x="38" y="8" width="11" height="6" fill={C} stroke="none" />
      <path d="M15 9h3M21 9h3M15 14h16" />
      <path d="M32 19v10" stroke={C} />
      <rect x="10" y="29" width="44" height="16" />
      <path d="M15 37h18" />
      <rect x="47" y="34" width="3" height="3" fill={C} stroke="none" />
    </g>
  ),
  embedded: (
    <g fill="none" stroke={W} strokeWidth="2.5">
      <path d="M12 4h40l5 5v26l-5 5H12l-5-5V9z" />
      <path d="M14 16h12M14 22h12M14 28h12M38 16h12M38 22h12M38 28h12" />
      <rect x="28" y="18" width="8" height="8" fill={C} stroke="none" />
      <rect x="50" y="7" width="3" height="3" fill={C} stroke="none" />
      <path d="M14 44v3M20 44v3M26 44v3M32 44v3M38 44v3M44 44v3M50 44v3" />
    </g>
  ),
  it: (
    <g fill="none" stroke={W} strokeWidth="2.5">
      <path d="M10 2h40l4 4v8H10zM10 18h40l4 4v8H10zM10 34h40l4 4v8H10z" />
      <path d="M15 8h14M15 24h14M15 40h14" />
      <rect x="40" y="6" width="3" height="3" fill={W} stroke="none" />
      <rect x="46" y="6" width="3" height="3" fill={C} stroke="none" />
      <rect x="46" y="22" width="3" height="3" fill={W} stroke="none" />
      <rect x="40" y="38" width="3" height="3" fill={W} stroke="none" />
      <rect x="46" y="38" width="3" height="3" fill={C} stroke="none" />
    </g>
  ),
  ai: <NeuralNet />,
}

function NeuralNet() {
  const input = [10, 24, 38]
  const hidden = [6, 18, 30, 42]
  const lines: string[] = []
  for (const a of input) for (const b of hidden) lines.push(`M10 ${a}L32 ${b}`)
  for (const a of hidden) for (const b of input) lines.push(`M32 ${a}L54 ${b}`)
  return (
    <>
      <path d={lines.join('')} stroke="#555" strokeWidth=".8" />
      {input.map((y) => <rect key={`i${y}`} x="7" y={y - 3} width="6" height="6" fill={W} />)}
      {hidden.map((y) => <rect key={`h${y}`} x="29" y={y - 3} width="6" height="6" fill={W} />)}
      {input.map((y) => <rect key={`o${y}`} x="51" y={y - 3} width="6" height="6" fill={C} />)}
    </>
  )
}
