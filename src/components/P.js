import tw, { styled } from "twin.macro"

const P = styled.p(({ reverse }) => [
  tw`mb-6 text-base text-gray-600 xl:text-2xl md:text-xl`,
  reverse && tw`text-blue-100`,
])
export default P
