import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'service',
    title: 'Услуги',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Название услуги',
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
            name: 'price',
            title: 'Цена',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Краткое описание услуги',
            type: 'text',
        }),
        defineField({
            name: 'body',
            title: 'Полное описание услуги',
            type: 'blockContent',
        }),
        defineField({
            name: 'mainImage',
            title: 'Картинка услуги',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
})
