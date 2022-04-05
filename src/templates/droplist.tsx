import Seo from "../components/Seo";
import { graphql, Link } from "gatsby";
import moment from 'moment'
import React from 'react'
import Header from '../components/Header'

export default function DropListPage({ data, pageContext }) {
  const { service, name, internal: { content }, prettySize, publicURL } = data.file;

  const dropDate = moment(name, 'MM-DD-YYYY')
  const formattedDropDate = dropDate.format('MMMM DD, YYYY');
  const metaTitle = `Drop Date: ${formattedDropDate} (${service})`;

  const domains = content.trim().split("\n")

  return (
    <>
      <Seo title={metaTitle} />
      <Header directLink={publicURL} fileSize={prettySize} numDomains={domains.length} dropDate={formattedDropDate} totalCount={pageContext.totalCount} />
      <main>
          <div className="container mx-auto px-2">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 py-4">
                {domains.length ? domains.map(d => <a className="underline text-blue-500 hover:text-blue-400" href={`http://${d}/?ref=dropfilter.app`} key={d}>{d}<br /></a>) : null }
              </div>
          </div>
      </main>
    </>
  );
}


export const query = graphql`
  query DropListQuery($id: String) {
    file(id: { eq: $id }) {
      id
      prettySize
      publicURL
      service: relativeDirectory
      name
      internal {
        content
      }
    }
  }
`;
