import tw, { styled } from "twin.macro"

const H2 = styled.h2(({ reverse }) => [
  tw`mb-4 text-2xl font-bold text-black xl:text-4xl md:text-3xl`,
  reverse && tw`text-white`,
])

export default H2
