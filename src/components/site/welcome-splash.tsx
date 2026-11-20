// First-visit welcome screen from the COMMANDLAB design canvas: the stacked logo, a segmented
// "initializing" bar, a terminal line and "press any key". Shown once per browser session.
import { useEffect, useState } from 'react'
import { Corners, Logo } from '~/components/brand'

const SEEN_KEY = 'cl-welcome-seen'
const SEGMENTS = 14
const STEP_MS = 120

function hasSeen() {
  try {
    return sessionStorage.getItem(SEEN_KEY) === '1'
  } catch {
    return false
  }
}

function markSeen() {
  try {
    sessionStorage.setItem(SEEN_KEY, '1')
  } catch {
    // storage blocked: the splash simply shows again next load
  }
}

export function WelcomeSplash() {
  const [open, setOpen] = useState(false)
  const [filled, setFilled] = useState(0)

  // Decide after mount so server and client markup match.
  useEffect(() => {
    if (hasSeen() || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    setOpen(true)
  }, [])

  // Fill the bar one segment at a time.
  useEffect(() => {
    if (!open || filled >= SEGMENTS) return
    const t = setTimeout(() => setFilled((f) => f + 1), STEP_MS)
    return () => clearTimeout(t)
  }, [open, filled])

  // Lock page scroll while the splash is up.
  useEffect(() => {
    if (!open) return
    const html = document.documentElement
    const prev = html.style.overflow
    html.style.overflow = 'hidden'
    return () => {
      html.style.overflow = prev
    }
  }, [open])

  // Any key (except Tab, so keyboard users can still move focus) continues.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') return
      markSeen()
      setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  if (!open) return null

  const ready = filled >= SEGMENTS
  const close = () => {
    markSeen()
    setOpen(false)
  }

  return (
    <div className="welcome" role="dialog" aria-modal="true" aria-label="Welcome to CommandLab" onClick={close}>
      <div className="welcome-frame framed">
        <Corners />
      </div>

      <div className="welcome-stage">
        <Logo className="welcome-logo" blink />
        <div className="welcome-word">WELCOME</div>

        <div className="welcome-bar" aria-hidden="true">
          {Array.from({ length: SEGMENTS }, (_, i) => (
            <span key={i} className={i < filled ? 'on' : undefined} />
          ))}
        </div>

        <div className="welcome-term">
          <span>&gt; {ready ? 'workspace ready' : 'initializing workspace'}</span>
          <span className="cursor blink" aria-hidden="true" />
        </div>
      </div>

      {ready && <div className="welcome-prompt blink">PRESS ANY KEY TO CONTINUE</div>}
    </div>
  )
}
