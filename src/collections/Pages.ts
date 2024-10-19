import {CollectionConfig} from 'payload/types'
import TextBlock from "../collections/blocks/TextBlock"
import SelectedProducts from "../collections/blocks/SelectedProducts"

const Pages: CollectionConfig = {
    slug: 'pages',
    admin: {
        useAsTitle: 'headline',
        defaultColumns: ["headline", "url"]
    },
    versions: {
      drafts: true,
    },
    fields: [
        {
            type: 'row',
            fields: [
                {
                    name: 'headline',
                    type: 'text',
                    required: true,
                    label: {
                        sv: "Rubrik"
                    },
                    admin: {
                        width: '70%',
                    },
                },
                {
                    name: 'slug',
                    type: 'text',
                    required: true,
                    label: {
                        sv: "URL"
                    },
                    admin: {
                        width: '30%',
                    },
                },
            ]
        },
        {
            type: 'row',
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: false,
                    label: {
                        sv: "Hero-bild"
                    },
                    admin: {
                        width: '40%',
                    },
                },
                {
                    name: 'introShort',
                    type: 'textarea',
                    required: false,
                    label: {
                        sv: "Ingress"
                    },
                    admin: {
                        width: '30%',
                    },
                },
                {
                    name: 'introLong',
                    type: 'textarea',
                    required: false,
                    label: {
                        sv: "Sammanfattning"
                    },
                    admin: {
                        width: '30%',
                    },
                },
            ]
        },
        {
            name: 'content',
            type: 'blocks',
            required: false,
            label: {
                sv: "Innehåll"
            },
            labels: {singular: {sv: 'Innehållsblock'}, plural: {sv: 'Innehållsblock'}},
            blocks: [
                TextBlock,SelectedProducts,
            ],
        },
    ],
    labels: {singular: {sv: 'Sida',}, plural: {sv: 'Sidor',},},
}

export default Pages
