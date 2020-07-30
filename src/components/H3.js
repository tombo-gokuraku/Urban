import tw, { styled } from "twin.macro"

const H3 = styled.h3(({ reverse }) => [
  tw`mb-4 text-xl font-bold text-black xl:text-3xl md:text-2xl`,
  reverse && tw`text-white`,
])
export default H3
