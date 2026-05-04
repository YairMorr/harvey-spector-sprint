import { sanityFetch } from '@/sanity/lib/live'
import { PORTFOLIO_PROJECTS_QUERY } from '@/sanity/queries/portfolio'
import { SelectedWorkClient } from './SelectedWorkClient'

async function fetchProjects() {
  const { data } = await sanityFetch({ query: PORTFOLIO_PROJECTS_QUERY })
  return data
}

export async function SelectedWorkSection() {
  const projects = await fetchProjects()
  return <SelectedWorkClient projects={projects} />
}
