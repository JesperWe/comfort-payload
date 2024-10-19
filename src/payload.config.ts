import path from 'path'

import {payloadCloud} from '@payloadcms/plugin-cloud'
import {postgresAdapter} from '@payloadcms/db-postgres'
import {webpackBundler} from '@payloadcms/bundler-webpack'
import {buildConfig} from 'payload/config'
import {oidcPlugin} from 'payload-plugin-oidc'
import seoPlugin from '@payloadcms/plugin-seo'

import Users from './collections/Users'
import SignInButton from "./auth/SignInButton"
import Members from "./collections/Members"
import Pages from "./collections/Pages"
import {Media} from "./collections/Media"
import {lexicalEditor} from "@payloadcms/richtext-lexical"
import ComfortIcon from './ComfortIcon'
import Products from "./collections/Products"

export default buildConfig({
    admin: {
        user: Users.slug,
        bundler: webpackBundler(),
        meta: {
            titleSuffix: '- Comfort AB',
            favicon: 'https://cms.comfort.se/admin/5d67fe74d43857ed0fc2.png',
            ogImage: 'https://cms.comfort.se/admin/4835cc659d57b4add86c.png',
        },
        components: {
            graphics: {
                Icon: ComfortIcon,
            },
        }
    },
    editor: lexicalEditor({}),
    collections: [Users, Members, Pages, Media, Products],
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts'),
    },
    graphQL: {
        schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
    },
    plugins: [
        payloadCloud(),
        oidcPlugin({
            clientID: process.env.OIDC_CLIENT_ID,
            clientSecret: process.env.OIDC_CLIENT_SECRET,
            authorizationURL: `${process.env.OIDC_AUTH_URI}`,
            tokenURL: `${process.env.OIDC_TOKEN_URI}`,
            initPath: `/oidc/signin`,
            callbackPath: `/oidc/callback`,
            callbackURL: `${process.env.SELF_URL}/oidc/callback`,
            scope: 'openid offline_access profile email custom_data',
            mongoUrl: process.env.DATABASE_URI,
            components: {
                Button: SignInButton, //can be your own custom component
                position: "beforeLogin" //beforeLogin | afterLogin
            },
            userCollection: {
                slug: Users.slug,
                searchKey: 'email',
            },
            createUserIfNotFound: true,
            async userinfo(accessToken) {
                const res = await fetch(`${process.env.OIDC_USERINFO_URI}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                })
                const user = await res.json()
                const role = Object.keys(user["urn:zitadel:iam:org:project:roles"] ?? {})?.[0]
                console.log({user, role})
                return {
                    sub: user.sub,
                    name: user.name,
                    email: user.email,
                    role
                }
            },
        }),
        seoPlugin({
            collections: [
                'pages',
            ],
            tabbedUI: true,
            uploadsCollection: 'media',
            generateTitle: ({doc}) => `comfort.se — ${doc["headline"]}`,
            // generateDescription: ({doc}) => doc.excerpt
        })
    ],
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URI,
            ssl: {rejectUnauthorized: false},
        },
    }),
})
