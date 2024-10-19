import {Block} from "payload/types"

const SelectedProducts: Block = {
    slug: 'SelectedProducts',
    interfaceName: 'selectedProducts',
    labels: {
        singular: {
            sv: "Utvalda produkter"
        },
        plural: {
            sv: "Utvalda produkter"
        }
    },
    fields: [
        {
            type: 'row',
            fields: [
                {
                    name: 'heading',
                    type: 'text',
                    required: true,
                    label: {sv: "Rubrik"}
                },
                {
                    name: 'template',
                    type: 'select',
                    hasMany: false,
                    label: {sv: "Mall"},
                    admin: {
                        isClearable: false,
                        isSortable: false,
                    },
                    options: [
                        {
                            label: 'Sida',
                            value: 'page',
                        },
                        {
                            label: 'Artikel',
                            value: 'article',
                        },
                    ],
                },]
        },
        {
            type: 'row',
            fields: [
                {
                    name: 'publishAt',
                    type: 'date',
                    label: {
                        sv: "Publiceras datum"
                    },
                    admin: {
                        date: {
                            pickerAppearance: 'dayOnly',
                            displayFormat: 'yyyy-MM-dd',
                        },
                    },
                }, {
                    name: 'unpublishAt',
                    type: 'date',
                    label: {
                        sv: "Avpubliceras datum"
                    },
                    admin: {
                        date: {
                            pickerAppearance: 'dayOnly',
                            displayFormat: 'yyyy-MM-dd',
                        },
                    },
                },
            ]
        },
        {
            type: 'array',
            name: 'selectedProducts',
            label: {
                sv: "Utvalda produkter",
            },
            labels: {
                singular: {sv: "Utvald produkt"},
                plural: {sv: "Utvald produkt"}
            },
            fields: [
                {
                    type: 'relationship',
                    name: 'product',
                    label: {sv: undefined},
                    relationTo: 'products',
                    admin: {  }
                }
            ]
        },
    ],
}

export default SelectedProducts