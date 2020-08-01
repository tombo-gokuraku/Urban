import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "twin.macro"
import Card from "./Card"
import P from "./P"

const query = graphql`
  query {
    pic03: file(relativePath: { eq: "pic03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    pic04: file(relativePath: { eq: "pic04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    pic05: file(relativePath: { eq: "pic05.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

function Cards() {
  const data = useStaticQuery(query)

  const cardData = [
    {
      image: data.pic03.childImageSharp.fluid,
      description:
        "Sed congue elit malesuada nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis sollicitudin aliquet.",
    },
    {
      image: data.pic04.childImageSharp.fluid,
      description:
        "Sed congue elit malesuada nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis sollicitudin aliquet.",
    },
    {
      image: data.pic05.childImageSharp.fluid,
      description:
        "Sed congue elit malesuada nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis sollicitudin aliquet.",
    },
  ]
  return (
    <div tw="flex flex-wrap md:flex-no-wrap justify-between items-stretch">
      {cardData.map((card, index) => {
        return (
          <Card image={card.image} key={index}>
            <P>{card.description}</P>
          </Card>
        )
      })}
    </div>
  )
}

export default Cards
