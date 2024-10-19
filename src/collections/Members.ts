import {CollectionConfig} from 'payload/types'

const Members: CollectionConfig = {
    slug: 'members',
    admin: {
        useAsTitle: 'companyName',
        defaultColumns: ["companyName"]
    },
    access: {
        create: ({req: {user}}) => {
            return user.role === 'webmaster'
        },
        read: ({req: {user}}) => {
            return user.role === 'webmaster'
        },
        update: ({req: {user}}) => {
            return user.role === 'webmaster'
        },
        delete: ({req: {user}}) => {
            return user.role === 'webmaster'
        },
        admin: ({req: {user}}) => {
            return user.role === 'webmaster'
        },
    },
    fields: [
        {
            type: 'row', fields: [
                {
                    name: 'companyName',
                    type: 'text',
                    required: true,
                    label: {
                        sv: "Bolagsnamn"
                    }
                },
                {
                    name: 'email',
                    type: 'text',
                    label: {
                        sv: "E-post"
                    }
                },
            ]
        },
        {
            type: 'row', fields: [
                {
                    name: 'address',
                    type: 'text',
                    label: {
                        sv: "Adress"
                    }
                },
                {
                    name: 'phoneNumber',
                    type: 'text',
                    label: {
                        sv: "Telefonnr"
                    }
                },
                {
                    name: 'memberPageUrl',
                    type: 'text',
                    label: {
                        sv: "Medlemssida"
                    }
                },
            ]
        },
        {
            type: 'row', fields: [
                {
                    name: 'postalCode',
                    type: 'text',
                    label: {
                        sv: "Postnummer"
                    }
                },
                {
                    name: 'city',
                    type: 'text',
                    label: {
                        sv: "Postort"
                    }
                },
            ]
        },
    ],
    labels: {
        singular: {
            sv: 'Medlem',
        },
        plural: {
            sv: 'Medlemmar',
        },
    },
}

export default Members
