// The C:>_ mark, the stacked logo and the chamfered corner brackets.

function MarkShapes({ blink = false }: { blink?: boolean }) {
  return (
    <>
      <path d="M54 6H18L6 18V46L18 58H54" fill="none" stroke="currentColor" strokeWidth="12" strokeLinejoin="miter" />
      <rect x="68" y="14" width="12" height="12" />
      <rect x="68" y="38" width="12" height="12" />
      <polygon points="92,0 109,0 141,32 109,64 92,64 124,32" />
      <rect x="133" y="52" width="44" height="12" className={blink ? 'blink' : undefined} />
    </>
  )
}

/** Just the C:>_ mark. */
export function Mark({ width, blink }: { width: number; blink?: boolean }) {
  return (
    <svg width={width} viewBox="0 0 177 64" fill="currentColor" aria-hidden="true">
      <MarkShapes blink={blink} />
    </svg>
  )
}

/** The mark with COMMANDLAB underneath. */
export function Logo({ className, width, blink }: { className?: string; width?: number; blink?: boolean }) {
  return (
    <svg className={className} width={width} viewBox="0 0 177 96" role="img" aria-label="CommandLab">
      <g fill="currentColor">
        <MarkShapes blink={blink} />
      </g>
      <text
        x="0"
        y="93"
        fontFamily="Oxanium, sans-serif"
        fontSize="17"
        fontWeight="300"
        textLength="177"
        lengthAdjust="spacing"
        fill="currentColor"
      >
        COMMAND<tspan fontWeight="800">LAB</tspan>
      </text>
    </svg>
  )
}

const cornerPaths = {
  tl: 'M1 28V13L13 1H28',
  tr: 'M0 1H15L27 13V28',
  bl: 'M1 0V15L13 27H28',
  br: 'M0 27H15L27 15V0',
} as const

/** Four corner brackets; place inside an element with class "framed". */
export function Corners() {
  return (
    <>
      {(Object.keys(cornerPaths) as (keyof typeof cornerPaths)[]).map((pos) => (
        <svg key={pos} className={`corner ${pos}`} viewBox="0 0 28 28" aria-hidden="true">
          <path d={cornerPaths[pos]} fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      ))}
    </>
  )
}
