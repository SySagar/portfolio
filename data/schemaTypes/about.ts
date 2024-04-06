import {defineField, defineType} from 'sanity';

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'descriptionProfessional',
      title: 'Description Professional',
      type: 'text',
    }),
    defineField({
      name: 'descriptionPersonal',
      title: 'Description Personal',
      type: 'text',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
