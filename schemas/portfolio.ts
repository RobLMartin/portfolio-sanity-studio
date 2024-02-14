export default {
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'post', // Changed from 'posts' to 'post' to reflect it's a single post
      title: 'Post', // Changed to singular
      type: 'reference',
      to: [{type: 'post'}],
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      description: 'A URL to deep link people to your work',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'technology'}]}],
      options: {
        layout: 'tag',
      },
    },
  ],
}
