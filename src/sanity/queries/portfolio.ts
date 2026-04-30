import { defineQuery } from 'next-sanity'

export const PORTFOLIO_PROJECTS_QUERY = defineQuery(`
  *[_type == "portfolioProject"] | order(order asc) {
    _id,
    title,
    coverImage {
      asset,
      alt,
      hotspot,
      crop,
    },
    tags,
    imageSize,
    order,
    projectUrl,
  }
`)
