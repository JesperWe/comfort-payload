import {Block} from "payload/types"

const TextBlock: Block = {
    slug: 'TextBlock',
    interfaceName: 'TextBlock',
    labels: {
        singular: {
            sv: "Textblock"
        },
        plural: {
            sv: "Textblock"
        }
    },
    fields: [
        {
            name: 'content',
            type: 'richText',
            required: true,
        },
    ],
}

export default TextBlock