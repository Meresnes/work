import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'service',
    title: 'Услуги',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Название',
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
            name: 'mainImage',
            title: 'Фон карточки',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'categories',
            title: 'Категории',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
        }),
        defineField({
            name: 'body',
            title: 'Тело поста',
            type: 'blockContent',
        }),
    ],

    preview: {
        select: {
            title: 'title',
        },
        prepare(selection) {
            return { ...selection }
        },
    },
})
