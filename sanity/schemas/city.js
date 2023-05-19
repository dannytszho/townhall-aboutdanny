const citySchema = {
    name: 'City',
    title: 'City',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'City Image',
        type: 'image',
      },
      {
        name: "order",
        title: "Order",
        type: "number"
      },
      {
        name: 'latitude',
        title: 'Latitude',
        type: 'number',
      },
      {
        name: 'longitute',
        title: 'Longitute',
        type: 'number',
      },
      {
        name: 'name',
        title: 'City Name',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: Rule => Rule.required()
      },
    ],
  
    preview: {
      select: {
        title: 'name',
        media: 'image'
      },
    },
  }
  
  export default citySchema;