'use client'
import { useRef } from 'react'

export function NewsDragSlider({ children }: { children: React.ReactNode }) {
  const sliderRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollStart = useRef(0)

  function onMouseDown(e: React.MouseEvent) {
    isDragging.current = true
    startX.current = e.pageX
    scrollStart.current = sliderRef.current?.scrollLeft ?? 0
    sliderRef.current?.style.setProperty('cursor', 'grabbing')
  }

  function onMouseMove(e: React.MouseEvent) {
    if (!isDragging.current || !sliderRef.current) return
    e.preventDefault()
    sliderRef.current.scrollLeft = scrollStart.current - (e.pageX - startX.current)
  }

  function stopDrag() {
    isDragging.current = false
    sliderRef.current?.style.setProperty('cursor', 'grab')
  }

  return (
    <div
      ref={sliderRef}
      className="news-slider flex-1 min-w-0 overflow-x-scroll select-none"
      style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', cursor: 'grab' }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
    >
      {children}
    </div>
  )
}
