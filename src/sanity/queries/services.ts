import { defineQuery } from 'next-sanity'

export const SERVICES_QUERY = defineQuery(`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    description,
    image {
      asset,
      alt,
      hotspot,
      crop,
    },
    order,
  }
`)
