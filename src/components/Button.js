import tw, { styled, css } from "twin.macro"

const Button = styled.a(({ reverse }) => [
  tw`inline-block w-full px-4 text-xl font-bold text-center text-white no-underline whitespace-no-wrap align-middle bg-blue-700 cursor-pointer rounded-md hover:bg-blue-400 active:bg-blue-800 duration-200 transition-colors ease-in-out md:w-auto`,
  reverse && tw`text-blue-700 bg-white hover:bg-blue-100 active:bg-blue-200`,
  css`
    line-height: 2.95rem;
    height: 2.7rem;
  `,
])
export default Button
