import { GatsbyNode } from 'gatsby'
import path from 'path'

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
  const { createPage } = actions
  const dropListTemplate = path.resolve(`src/templates/droplist.tsx`)
  const serviceTemplate = path.resolve(`src/templates/service.tsx`)

  const result = await graphql(`
  {
    allFile(filter: {extension: {eq: "txt"}}) {
      totalCount
      edges {
        node {
          service: relativeDirectory
          name
          id
        }
      }
    }

    allDirectory(filter: {relativePath: {ne: ""}}) {
        edges {
          node {
            id
            name
          }
        }
      }
  }
  `)

  if (result.errors) {
    throw result.errors
  }

    // create drop list pages
    const pages = result.data["allFile"].edges.map(edge => edge.node)
    pages.forEach(page => createPage({
        path: `/lists/${page.service}/${page.name}`,
        component: dropListTemplate,
        context: {
            totalCount: result.data["allFile"].totalCount,
            id: page.id
        },
        defer: true,
        })
    )

    // create service pages
    const servicePages = result.data["allDirectory"].edges.map(edge => edge.node)
    servicePages.forEach(page => createPage({
        path: `/lists/${page.name}`,
        component: serviceTemplate,
        context: {
          id: page.id,
          name: page.name
        },
      }))
}