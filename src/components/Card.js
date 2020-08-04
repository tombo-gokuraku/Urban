import React from "react"
import PropTypes from "prop-types"
import Image from "./Image"
import Button from "./Button"

import "twin.macro"

function Card({ image, children }) {
  return (
    <div tw="flex flex-col justify-center items-center mb-10 md:mx-2">
      <div tw="w-7/12 mb-4">
        <Image fluid={image} />
      </div>
      {children}
      <Button href={"#top"}>Learn More</Button>
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.object.isRequired,
}

export default Card
