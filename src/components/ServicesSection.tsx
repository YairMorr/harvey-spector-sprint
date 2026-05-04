import { sanityFetch } from '@/sanity/lib/live'
import { SERVICES_QUERY } from '@/sanity/queries/services'
import { ServicesClient } from './ServicesClient'

export async function ServicesSection() {
  const { data } = await sanityFetch({ query: SERVICES_QUERY })
  return <ServicesClient services={data} />
}
