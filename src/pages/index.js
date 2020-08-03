/** @jsx jsx */
import { jsx } from "@emotion/core"
import "twin.macro"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/Hero"
import H1 from "../components/H1"
import H2 from "../components/H2"
import P from "../components/P"
import Button from "../components/Button"
import Image from "../components/Image"
import BackgroundImage from "../components/BackgroundImage"
import Section from "../components/Section"
import SectionContainer from "../components/SectionContainer"
import SectionImageContainer from "../components/SectionImageContainer"
import SectionDescriptionContainer from "../components/SectionDescriptionContainer"
import Cards from "../components/Cards"

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
      pic02: file(relativePath: { eq: "pic02.jpg" }) {
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
        <Hero id={"top"}>
          <H1>This is Urban</H1>
          <p tw="mb-6 text-base text-gray-400 xl:text-2xl md:text-xl">
            Aliquam libero augue varius non odio nec faucibus congue <br />
            felis quisque a diam rutrum tempus massa accumsan faucibus purus.
          </p>
          <Button href={"#top"}>Learn More</Button>
        </Hero>
      </BackgroundImage>
      <Section>
        <SectionContainer>
          <SectionImageContainer>
            <Image fluid={data.pic01.childImageSharp.fluid} alt="hoge" />
          </SectionImageContainer>
          <SectionDescriptionContainer>
            <H2>Maecenas a gravida quam</H2>
            <P>
              Etiam posuere hendrerit arcu, ac blandit nulla. Sed congue
              malesuada nibh, a varius odio vehicula aliquet. Aliquam consequat,
              nunc quis sollicitudin aliquet, enim magna cursus auctor lacinia
              nunc ex blandit augue. Ut vitae neque fermentum, luctus elit
              fermentum, porta augue. Nullam ultricies, turpis at fermentum
              iaculis, nunc justo dictum dui, non aliquet erat nibh non ex.
            </P>
            <P>
              Sed congue malesuada nibh, a varius odio vehicula aliquet. Aliquam
              consequat, nunc quis sollicitudin aliquet, enim magna cursus
              auctor lacinia nunc ex blandit augue. Ut vitae neque fermentum,
              luctus elit fermentum, porta augue. Nullam ultricies, turpis at
              fermentum iaculis, nunc justo dictum dui, non aliquet erat nibh
              non ex.
            </P>
            <Button href={"#top"}>Learn More</Button>
          </SectionDescriptionContainer>
        </SectionContainer>
      </Section>
      <Section reverse>
        <SectionContainer reverse>
          <SectionImageContainer>
            <Image
              fluid={data.pic02.childImageSharp.fluid}
              alt="hoge"
              reverse
            />
          </SectionImageContainer>
          <SectionDescriptionContainer>
            <H2 reverse>Maecenas a gravida quam</H2>
            <P reverse>
              Etiam posuere hendrerit arcu, ac blandit nulla. Sed congue
              malesuada nibh, a varius odio vehicula aliquet. Aliquam consequat,
              nunc quis sollicitudin aliquet, enim magna cursus auctor lacinia
              nunc ex blandit augue. Ut vitae neque fermentum, luctus elit
              fermentum, porta augue. Nullam ultricies, turpis at fermentum
              iaculis, nunc justo dictum dui, non aliquet erat nibh non ex.
            </P>
            <P reverse>
              Sed congue malesuada nibh, a varius odio vehicula aliquet. Aliquam
              consequat, nunc quis sollicitudin aliquet, enim magna cursus
              auctor lacinia nunc ex blandit augue. Ut vitae neque fermentum,
              luctus elit fermentum, porta augue. Nullam ultricies, turpis at
              fermentum iaculis, nunc justo dictum dui, non aliquet erat nibh
              non ex.
            </P>
            <Button reverse href={"#top"}>
              Learn More
            </Button>
          </SectionDescriptionContainer>
        </SectionContainer>
      </Section>

      <Section>
        <div tw="text-center">
          <H2>Aliquam ipsum purus dolor</H2>
          <P>
            Cras sagittis turpis sit amet est tempus, sit amet consectetur purus
            tincidunt
          </P>
        </div>
        <Cards />
      </Section>
    </Layout>
  )
}

export default IndexPage
