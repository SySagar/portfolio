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
      name: 'customImage',
      title: 'Custom Image',
      type: 'image',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
    }),
    defineField({
      name: 'emailUrl',
      title: 'Email URL',
      type: 'url',
      description: 'Use a full mailto link or a website email link.',
    }),
    defineField({
      name: 'twitterHandle',
      title: 'Twitter Handle',
      type: 'string',
    }),
    defineField({
      name: 'twitterUrl',
      title: 'Twitter URL',
      type: 'url',
    }),
    defineField({
      name: 'instagramHandle',
      title: 'Instagram Handle',
      type: 'string',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'resumeLabel',
      title: 'Resume Label',
      type: 'string',
    }),
    defineField({
      name: 'resumeUrl',
      title: 'Resume URL',
      type: 'url',
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
