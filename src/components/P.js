import tw, { styled } from "twin.macro"

const P = styled.p(({ reverse }) => [
  tw`mb-6 text-sm text-gray-600 md:text-base`,
  reverse && tw`text-blue-100`,
])
export default P
