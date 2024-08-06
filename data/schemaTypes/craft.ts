import {defineField, defineType} from 'sanity';

export default defineType({
  name: 'crafts',
  title: 'Crafts',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
      defineField({
        name: 'url',
        title: 'url',
        type: 'string',
      }),
    defineField({
        name:"technologies",
        title:"Technologies",
        type:"array",
        of:[{
            type:"string"
        }]
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
});