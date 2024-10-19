import {CollectionConfig} from 'payload/types'

const Users: CollectionConfig = {
    slug: 'users',
    auth: {
        disableLocalStrategy: true,
    },
    admin: {
        useAsTitle: 'email',
        defaultColumns: ["email", "name"]
    },
    fields: [
        {name: "email", type: "email"},
        {name: "role", type: "text"},
        {name: "name", type: "text"},
        {
            name: 'memberCompany',
            type: 'relationship',
            relationTo: 'members',
            hasMany: true,
        },
    ],
    labels: {
        singular: {
            sv: 'Användare',
        },
        plural: {
            sv: 'Användare',
        },
    },
}

export default Users
