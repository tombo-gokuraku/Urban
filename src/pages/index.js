/** @jsx jsx */
import { jsx } from "@emotion/core"
import "twin.macro"

import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/Hero"
import H1 from "../components/H1"
import H2 from "../components/H2"
import H3 from "../components/H3"
import P from "../components/P"
import Button from "../components/Button"
import Image from "../components/Image"
import SocialLinks from "../components/SocialLinks"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "pic01.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <Hero tw="text-center">
        <H1>This is Urban</H1>
      </Hero>
      <H2>Aliquam ipsum purus dolor</H2>
      <H3>Maecenas a gravida quam</H3>
      <H3 reverse>Suspendisse quis massa vel justo</H3>
      <P>
        Etiam posuere hendrerit arcu, ac blandit nulla. Sed congue malesuada
        nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis
        sollicitudin aliquet, enim magna cursus auctor lacinia nunc ex blandit
        augue. Ut vitae neque fermentum, luctus elit fermentum, porta augue.
        Nullam ultricies, turpis at fermentum iaculis, nunc justo dictum dui,
        non aliquet erat nibh non ex.
      </P>
      <P reverse>
        Etiam posuere hendrerit arcu, ac blandit nulla. Sed congue malesuada
        nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis
        sollicitudin aliquet, enim magna cursus auctor lacinia nunc ex blandit
        augue. Ut vitae neque fermentum, luctus elit fermentum, porta augue.
        Nullam ultricies, turpis at fermentum iaculis, nunc justo dictum dui,
        non aliquet erat nibh non ex.
      </P>
      <Button>Learn More</Button>
      <Button reverse>Learn More</Button>
      <div tw="w-1/3">
        <Image fluid={data.file.childImageSharp.fluid} alt="hoge" />
      </div>
      <SocialLinks />
    </Layout>
  )
}

export default IndexPage
