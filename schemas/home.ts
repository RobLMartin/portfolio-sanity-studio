export default {
  name: 'landing',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'cta',
      title: 'CTA',
      type: 'string',
    },
    {
      name: 'servicesTitle',
      title: 'Services Title',
      type: 'string',
    },
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'service',
              title: 'Service',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'featuredProjectsTitle',
      title: 'Featured Projects Title',
      type: 'string',
    },
    {
      name: 'featuredProjects',
      title: 'Featured Projects',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'portfolio'}]}],
    },
    {
      name: 'secondHeadline',
      title: 'Second Headline',
      type: 'string',
    },
    {
      name: 'secondCta',
      title: 'Second CTA',
      type: 'string',
    },
  ],
}
