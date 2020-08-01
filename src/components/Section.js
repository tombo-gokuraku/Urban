import tw, { styled } from "twin.macro"

const Section = styled.section(() => [
  tw`flex max-w-screen-xl flex-wrap items-stretch md:(flex-no-wrap) pt-12 pb-4 px-4 justify-center mx-auto items-start`,
])

export default Section
