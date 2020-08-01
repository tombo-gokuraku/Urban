import tw, { styled } from "twin.macro"

const SectionContainer = styled.div(({ reverse }) => [
  tw`flex max-w-screen-xl flex-wrap items-stretch md:(flex-no-wrap) justify-center mx-auto items-start`,
  reverse && tw`flex-row-reverse`,
])

export default SectionContainer
