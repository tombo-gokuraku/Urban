import React from "react"
import PropTypes from "prop-types"
import Image from "./Image"
import Button from "./Button"

import "twin.macro"

function Card({ image, children }) {
  return (
    <div tw="flex flex-col justify-center items-center mb-6 md:mx-2">
      <div tw="w-7/12 mb-4">
        <Image fluid={image} />
      </div>
      {children}
      <Button>Learn More</Button>
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.object.isRequired,
}

export default Card
