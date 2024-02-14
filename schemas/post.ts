export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
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
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'keyword'}]}],
      options: {
        layout: 'tag',
      },
    },
  ],
}
