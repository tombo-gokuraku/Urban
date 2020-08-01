import { css, styled } from "twin.macro"
import { mq } from "../styles/breaks"

const SectionDescriptionContainer = styled.div(() => [
  css`
    flex-basis: 100%;
    ${mq[1]} {
      flex-basis: 60%;
    }
  `,
])

export default SectionDescriptionContainer
