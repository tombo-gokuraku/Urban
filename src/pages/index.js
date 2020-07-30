/** @jsx jsx */
import { jsx } from "@emotion/core"
import "twin.macro"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/Hero"
import H1 from "../components/H1"
import H2 from "../components/H2"
import H3 from "../components/H3"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero tw="text-center">
        <H1>This is Urban</H1>
      </Hero>
      <H2>Aliquam ipsum purus dolor</H2>
      <H3>Maecenas a gravida quam</H3>
      <H3 white>Suspendisse quis massa vel justo</H3>
    </Layout>
  )
}

export default IndexPage
