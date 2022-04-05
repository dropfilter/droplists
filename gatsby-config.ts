import { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
    siteMetadata: {
        title: 'Dropfilter Archive',
        description: 'Archiving every expiring domain daily.',
        siteUrl: 'https://lists.dropfilter.app'
    },
    plugins: [
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `droplists`,
                path: `lists`,
                ignore: [`**/\.*`], // ignore files starting with a dot
            }
        },
        `gatsby-transformer-plaintext`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-postcss`,
        `gatsby-plugin-netlify`,
        `gatsby-plugin-sitemap`
    ]
}

export default config