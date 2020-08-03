import tw, { styled } from "twin.macro"

const P = styled.p(({ reverse }) => [
  tw`mb-6 text-sm text-gray-700 md:text-base`,
  reverse && tw`text-white`,
])
export default P
