'use client'

import { useRef, useEffect } from 'react'

export function FooterSpacer() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function sync() {
      const footer = document.querySelector('footer')
      if (footer && ref.current) {
        ref.current.style.height = `${footer.offsetHeight}px`
      }
    }
    sync()
    const footer = document.querySelector('footer')
    if (!footer) return
    const ro = new ResizeObserver(sync)
    ro.observe(footer)
    return () => ro.disconnect()
  }, [])

  return <div ref={ref} aria-hidden />
}
