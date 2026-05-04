import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { FooterSpacer } from '@/components/FooterSpacer'
import { ProjectsPageContent } from '@/components/ProjectsPageContent'
import { sanityFetch } from '@/sanity/lib/live'
import { PORTFOLIO_PROJECTS_QUERY } from '@/sanity/queries/portfolio'

export default async function ProjectsPage() {
  const { data: projects } = await sanityFetch({ query: PORTFOLIO_PROJECTS_QUERY })
  return (
    <>
      <Navbar />
      <div className="relative" style={{ zIndex: 1 }}>
        <ProjectsPageContent projects={projects} />
        <FooterSpacer />
      </div>
      <Footer />
    </>
  )
}
