import { graphql, Link } from 'gatsby';
import React from 'react';
import Seo from '../../components/Seo';

export default function ServicesListing({ data }) {
    const services = data.allDirectory.edges.map(edge => edge.node)

    return (
        <>
            <Seo title="Supported Services" />
            <header className="bg-blue-500 w-full h-28">
                <div className="container mx-auto px-4 h-full">
                    <div className="h-full flex flex-row flex-nowrap justify-between items-center">
                        <div className="flex flex-col">
                            <h1>Supported Services</h1>
                            <small>{services.length} data sources</small>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
                        { services.length ? services.map(s => <Link className="underline text-blue-500 hover:text-blue-400 text-center" key={s.id} to={`/lists/${s.name}`}>{s.name}</Link>) : null }
                    </div>
                </div>
            </main>
        </>
    )
}

export const query = graphql`
    query ServicesQuery {
  allDirectory(filter: {relativePath: {ne: ""}}) {
    edges {
      node {
        id
        name
      }
    }
  }
}
`