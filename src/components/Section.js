import React from "react"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"

function Section({ reverse, children }) {
  return (
    <StyledSection reverse={reverse}>
      <div tw="flex max-w-screen-xl flex-wrap items-stretch md:(flex-no-wrap) justify-center mx-auto items-start">
        {children}
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section(({ reverse }) => [
  tw`px-4 pt-12 pb-4 md:(pt-24 pb-16)`,
  reverse && tw`bg-blue-500`,
])

Section.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
}

export default Section
