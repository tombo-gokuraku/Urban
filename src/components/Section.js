import tw, { styled } from "twin.macro"

const Section = styled.section(({ reverse }) => [
  tw`px-4 pt-12 pb-4 md:(pt-24 pb-16) bg-gray-100 text-base`,
  reverse && tw`bg-blue-700`,
])

export default Section
