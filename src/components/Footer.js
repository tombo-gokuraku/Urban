import React from "react"
import "twin.macro"
import SocialLinks from "../components/SocialLinks"

function Footer() {
  return (
    <footer tw="flex flex-col items-center justify-center px-4 pt-12 pb-4 md:(px-8 pt-20 pb-16) text-gray-600">
      <SocialLinks />
      <div tw="mb-8 text-xs text-center">
        © Untitled. All rights reserved. Design: TEMPLATED. Images: Unsplash.
      </div>
    </footer>
  )
}

export default Footer
