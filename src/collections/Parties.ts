import type { CollectionConfig } from 'payload'

export const Parties: CollectionConfig = {
  slug: 'parties',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
        name: 'host',
        type: 'relationship',
        relationTo: 'users',
        hasMany: false,
    },
  ]
}