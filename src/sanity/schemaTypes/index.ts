import { type SchemaTypeDefinition } from 'sanity'
import { portfolioProject } from './portfolioProject'
import { service } from './service'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [portfolioProject, service],
}
