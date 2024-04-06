import {defineField, defineType} from 'sanity';

export default defineType({
    name: 'profilePic',
    title: 'Profile Picture',
    type: 'document',
    fields: [
        defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        }),
        defineField({
        name: 'profilePic',
        title: 'Profile Picture',
        type: 'image',
        }),
    ],
    preview: {
        select: {
        title: 'title',
        media: 'profilePic',
        },
    },
})