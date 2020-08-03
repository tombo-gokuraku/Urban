/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import tw, { css } from "twin.macro"

const Image = ({ fluid, alt, reverse }) => {
  return (
    <div
      css={[
        tw`m-2 rounded-full`,
        css`
          box-shadow: 0px 0px 0px 7px #fff, 0px 0px 0px 8px rgba(0, 0, 0, 0.1);
        `,
        reverse &&
          css`
            box-shadow: 0px 0px 0px 7px #2b6cb0,
              0px 0px 0px 8px rgba(255, 255, 255, 0.25);
          `,
      ]}
    >
      <Img tw="rounded-full" fluid={fluid} alt={alt} />
    </div>
  )
}

Image.propTypes = {
  fluid: PropTypes.object.isRequired,
  alt: PropTypes.string,
  reverse: PropTypes.bool,
}

export default Image
