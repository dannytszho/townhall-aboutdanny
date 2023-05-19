import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'city',
    title: 'City',
    type: 'document',
    fields: [
      defineField({
        name: 'image',
        title: 'City Image',
        type: 'image',
      }),
      defineField({
        name: "order",
        title: "Order",
        type: "number"
      }),
      defineField({
        name: 'latitude',
        title: 'Latitude',
        type: 'number',
      }),
      defineField({
        name: 'longitute',
        title: 'Longitute',
        type: 'number',
      }),
      defineField({
        name: 'name',
        title: 'City Name',
        type: 'string',
        validation: Rule => Rule.required()
      }),
      defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule) => Rule.required()
      }),
    ],
  
    preview: {
      select: {
        title: 'name',
        media: 'image'
      },
    },
  })