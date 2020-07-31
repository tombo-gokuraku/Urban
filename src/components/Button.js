import tw, { styled } from "twin.macro"

const Button = styled.a(({ reverse }) => [
  tw`inline-block px-4 py-2 text-xl font-bold text-center text-white no-underline whitespace-no-wrap bg-blue-500 cursor-pointer rounded-md leading-10 hover:bg-blue-400 active:bg-blue-600 duration-200 transition-colors ease-in-out`,
  reverse && tw`text-blue-500 bg-white hover:bg-blue-100 active:bg-blue-200`,
])
export default Button
