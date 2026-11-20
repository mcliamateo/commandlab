import { useEffect, useState } from 'react'
import { siteDefaults } from '~/lib/site-defaults'

/** "> we solve problems" with a second line that types hardware → software → solutions, like the intro video. */
export function TerminalHero() {
  const { line1, line1Bold, cycle } = siteDefaults.hero
  const [text, setText] = useState<string>(cycle[0])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let w = 0
    let i = cycle[0].length
    let dir = -1
    let timer: ReturnType<typeof setTimeout>
    const step = () => {
      i += dir
      setText(cycle[w].slice(0, i))
      if (dir < 0 && i === 0) {
        w = (w + 1) % cycle.length
        dir = 1
      } else if (dir > 0 && i === cycle[w].length) {
        dir = -1
        timer = setTimeout(step, 1800)
        return
      }
      timer = setTimeout(step, dir > 0 ? 90 : 45)
    }
    timer = setTimeout(step, 1800)
    return () => clearTimeout(timer)
  }, [cycle])

  return (
    <h1 className="term" aria-label={`We solve ${line1Bold}. Hardware to software.`}>
      <span aria-hidden="true">
        <span className="p">&gt;</span>
        {line1} <b>{line1Bold}</b>
      </span>
      <span className="line2" aria-hidden="true">
        <span className="p">&gt;</span>
        {text}
        <span className="cursor blink" />
      </span>
    </h1>
  )
}
