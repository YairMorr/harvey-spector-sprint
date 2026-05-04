import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { FooterSpacer } from '@/components/FooterSpacer'
import { ServicesPageContent } from '@/components/ServicesPageContent'
import { sanityFetch } from '@/sanity/lib/live'
import { SERVICES_QUERY } from '@/sanity/queries/services'

export default async function ServicesPage() {
  const { data: services } = await sanityFetch({ query: SERVICES_QUERY })
  return (
    <>
      <Navbar />
      <div className="relative" style={{ zIndex: 1 }}>
        <ServicesPageContent services={services} />
        <FooterSpacer />
      </div>
      <Footer />
    </>
  )
}
