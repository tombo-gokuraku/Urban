/** @jsx jsx */
import { jsx } from "@emotion/core"
import tw, { css } from "twin.macro"

import { useStaticQuery, graphql } from "gatsby"

import { mq } from "../styles/breaks"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/Hero"
import H1 from "../components/H1"
import H2 from "../components/H2"
import H3 from "../components/H3"
import P from "../components/P"
import Button from "../components/Button"
import Image from "../components/Image"
import BackgroundImage from "../components/BackgroundImage"
import Section from "../components/Section"
import SectionImageContainer from "../components/SectionImageContainer"
import SectionDescriptionContainer from "../components/SectionDescriptionContainer"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      pic01: file(relativePath: { eq: "pic01.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      banner: file(relativePath: { eq: "banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundImage
        fluid={data.banner.childImageSharp.fluid}
        parentStyle={{
          position: "relative",
          backgroundColor: "rgba(0,0,0,0.65)",
        }}
      >
        <Hero>
          <H1>This is Urban</H1>
          <p tw="mb-6 text-base text-gray-400 xl:text-2xl md:text-xl">
            Aliquam libero augue varius non odio nec faucibus congue <br />
            felis quisque a diam rutrum tempus massa accumsan faucibus purus.
          </p>
          <Button>Learn More</Button>
        </Hero>
      </BackgroundImage>
      <Section>
        <SectionImageContainer>
          <Image fluid={data.pic01.childImageSharp.fluid} alt="hoge" />
        </SectionImageContainer>
        <SectionDescriptionContainer>
          <H3>Maecenas a gravida quam</H3>
          <P>
            Etiam posuere hendrerit arcu, ac blandit nulla. Sed congue malesuada
            nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis
            sollicitudin aliquet, enim magna cursus auctor lacinia nunc ex
            blandit augue. Ut vitae neque fermentum, luctus elit fermentum,
            porta augue. Nullam ultricies, turpis at fermentum iaculis, nunc
            justo dictum dui, non aliquet erat nibh non ex.
          </P>
          <P>
            Sed congue malesuada nibh, a varius odio vehicula aliquet. Aliquam
            consequat, nunc quis sollicitudin aliquet, enim magna cursus auctor
            lacinia nunc ex blandit augue. Ut vitae neque fermentum, luctus elit
            fermentum, porta augue. Nullam ultricies, turpis at fermentum
            iaculis, nunc justo dictum dui, non aliquet erat nibh non ex.
          </P>
          <Button>Learn More</Button>
        </SectionDescriptionContainer>
      </Section>
      <H2>Aliquam ipsum purus dolor</H2>
      <H3 reverse>Suspendisse quis massa vel justo</H3>
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
    </Layout>
  )
}

export default IndexPage
