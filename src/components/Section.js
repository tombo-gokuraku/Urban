import tw, { styled } from "twin.macro"

const Section = styled.section(({ reverse }) => [
  tw`px-4 pt-12 pb-4 md:(pt-24 pb-16)`,
  reverse && tw`bg-blue-500`,
])

export default Section
