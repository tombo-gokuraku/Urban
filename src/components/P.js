import tw, { styled } from "twin.macro"

const P = styled.p(({ reverse }) => [
  tw`mb-2 text-sm text-gray-700 md:( text-base  mb-6)`,
  reverse && tw`text-white`,
])
export default P
