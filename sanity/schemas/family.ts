import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'family',
  title: 'Family',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Background Image',
      type: 'image',
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number"
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    },
  },
})