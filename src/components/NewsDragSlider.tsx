'use client'
import { useRef } from 'react'

export function NewsDragSlider({ children }: { children: React.ReactNode }) {
  const innerRef = useRef<HTMLDivElement>(null)
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 })

  function start(clientX: number) {
    const el = innerRef.current
    if (!el) return
    drag.current = { active: true, startX: clientX, scrollLeft: el.scrollLeft }
  }

  function move(clientX: number) {
    if (!drag.current.active || !innerRef.current) return
    innerRef.current.scrollLeft = drag.current.scrollLeft - (clientX - drag.current.startX)
  }

  function end() {
    drag.current.active = false
  }

  return (
    // Outer: overflow:hidden clips the scrollbar out of view
    <div className="flex min-w-0 overflow-hidden active:cursor-grabbing select-none justify-end">
      {/* Inner: actually scrollable; paddingBottom pushes scrollbar below the clipping boundary */}
      <div
        ref={innerRef}
        className="overflow-x-scroll news-slider"
        style={{
          scrollbarWidth: 'none',   // Firefox
          paddingBottom: 20,        // push scrollbar below visible area
          marginBottom: -20,        // cancel the extra height so layout is unaffected
        }}
        onMouseDown={(e) => { start(e.clientX); e.currentTarget.style.cursor = 'grabbing' }}
        onMouseMove={(e) => move(e.clientX)}
        onMouseUp={(e) => { end(); e.currentTarget.style.cursor = '' }}
        onMouseLeave={(e) => { end(); e.currentTarget.style.cursor = '' }}
        onTouchStart={(e) => start(e.touches[0].clientX)}
        onTouchMove={(e) => move(e.touches[0].clientX)}
        onTouchEnd={() => end()}
      >
        {children}
      </div>
    </div>
  )
}
