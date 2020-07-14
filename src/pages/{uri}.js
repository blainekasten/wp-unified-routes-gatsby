import { createPagesFromData, graphql } from "gatsby"

// Renders the component from the node
function Component({ data }) {
  return <data.Component {...data} />
}

export default createPagesFromData(Component, `allWpContentNodes`)

export const query = graphql`
  query Node($id: String!) {
    WpContentNodes(id: $id) {
      ...someFields
      Component # this is based on the hypothetical work from Mikhail
    }
  }
`
