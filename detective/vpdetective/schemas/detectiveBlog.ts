import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'detectiveBlog',
    title: 'Блог Детектива',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Название Статьи',
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
            title: 'Дата публикации',
            type: 'datetime',
        }),
        defineField({
            name: 'description',
            title: 'Краткое описание статьи',
            type: 'text',
        }),
        defineField({
            name: 'body',
            title: 'Полное описание статьи',
            type: 'blockContent',
        }),
        defineField({
            name: 'mainImage',
            title: 'Картинка статьи',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
})
