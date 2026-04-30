import dynamic from 'next/dynamic'
export { metadata, viewport } from 'next-sanity/studio'

// Load the Studio entirely on the client — Sanity Studio uses browser APIs
// that fail in the Next.js 16 serverless environment.
const Studio = dynamic(() => import('./studio-client'), { ssr: false })

export default function StudioPage() {
  return <Studio />
}
