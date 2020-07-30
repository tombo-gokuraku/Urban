/** @jsx jsx */
import { jsx } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/Hero"
import H1 from "../components/H1"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero>
        <H1>This is Urban</H1>
      </Hero>
    </Layout>
  )
}

export default IndexPage
