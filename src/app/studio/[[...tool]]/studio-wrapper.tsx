'use client'
import dynamic from 'next/dynamic'

// ssr: false is only allowed in Client Components (Next.js 16 rule)
const Studio = dynamic(() => import('./studio-client'), { ssr: false })

export default function StudioWrapper() {
  return <Studio />
}
