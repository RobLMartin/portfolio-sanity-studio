export default {
  name: 'home',
  type: 'document',
  title: 'About',
  fields: [
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'workHistory',
      title: 'Work History',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'company',
              title: 'Company',
              type: 'string',
            },
            {
              name: 'position',
              title: 'Position',
              type: 'string',
            },
            {
              name: 'duration',
              title: 'Duration',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [
                {
                  type: 'block',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
