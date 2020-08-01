import tw, { styled, css } from "twin.macro"
import { mq } from "../styles/breaks"

const SectionImageContainer = styled.div(() => [
  tw`mb-4 md:( mr-4 )`,
  css`
    flex-basis: 60%;
    ${mq[1]} {
      flex-basis: 30%;
    }
  `,
])

export default SectionImageContainer
