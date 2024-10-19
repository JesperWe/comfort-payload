import {CollectionConfig} from 'payload/types'

const Products: CollectionConfig = {
    slug: 'products',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ["name"]
    },
    fields: [
        {name: 'name', type: 'text', required: true, label: {sv: "Namn"}},
        {name: 'slug', type: 'text', required: true, label: {sv: "URL"}},
        {name: 'supplier', type: 'text', label: {sv: "Leverantör"}},
        {name: 'brand', type: 'text', label: {sv: "Varumärke"}},
        {name: 'shortDescription', type: 'text', label: {sv: "Kort beskrivning"}},
        {name: 'longDescription', type: 'text', label: {sv: "Lång beskrivning"}},
        {name: 'category', type: 'text', label: {sv: "Kategori"}},
        {name: 'subCategory', type: 'text', label: {sv: "Underkategori"}},
        {name: 'productCategory', type: 'text', label: {sv: "Produktkategori"}},
        {name: 'filters', type: 'text', label: {sv: "Filter"}},
        {name: 'iok', type: 'checkbox', label: {sv: "I&K"}},
        {name: 'buyable', type: 'checkbox', label: {sv: "Kan köpas"}},
        {name: 'imageUrl', type: 'text', label: {sv: "Url för bild"}},
        {name: 'type', type: 'text', label: {sv: "Typ"}},
        {name: 'ribbon', type: 'text', label: {sv: "Band"}},
        {name: 'ribbonColor', type: 'text', label: {sv: "Bandets färg"}},
    ],
    labels: {
        singular: {
            sv: 'Produkt',
        },
        plural: {
            sv: 'Produkter',
        },
    },
}

export default Products
