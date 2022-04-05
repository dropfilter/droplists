import Seo from "../components/Seo";
import { graphql, Link } from "gatsby";
import moment from 'moment'
import React from 'react'

export default function ServicePage({ data, pageContext: { name: service } }) {
  const dropDates = data.allFile.edges.map(edge => {
        const { id, name } = edge.node
        const dropDate = moment(name, 'MM-DD-YYYY')

        return {
            id,
            name: name,
            formattedDropDate: dropDate.format('YYYY-MM-DD')
        }
  }).sort(function (a, b) {
    return ('' + b.formattedDropDate).localeCompare(a.formattedDropDate);
})

  const metaTitle = `All Drop Dates (${service})`;

  return (
    <>
      <Seo title={metaTitle} />
      <header className="bg-blue-500 w-full h-28">
        <div className="container mx-auto px-4 h-full">
            <div className="h-full flex flex-row flex-nowrap justify-between items-center">
                <div className="flex flex-col">
                    <h1><span className="uppercase">{service}</span> Drop Dates</h1>
                    <small>{dropDates.length} archived lists</small>
                </div>
            </div>
        </div>
    </header>
      <main>
          <div className="container mx-auto px-2">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 py-4">
                {dropDates.length ? dropDates.map(d => <Link className="underline text-blue-500 hover:text-blue-400" to={`/lists/${service}/${d.name}`} key={d.id}>{d.formattedDropDate}<br /></Link>) : null }
              </div>
          </div>
      </main>
    </>
  );
}


export const query = graphql`
  query ServiceQuery($name: String) {
  allFile(filter: {relativeDirectory: {eq: $name}}) {
    edges {
      node {
        id
        name
      }
    }
  }
}

`;
