/** @jsx jsx */
import { jsx } from "@emotion/core"
import tw, { css } from "twin.macro"

import { GrTwitter, GrFacebook, GrInstagram, GrSnapchat } from "react-icons/gr"

const socialLinkData = [
  {
    icon: <GrTwitter />,
    url: "https://twitter.com/home",
    ariaLabel: "go to twitter",
  },
  {
    icon: <GrFacebook />,
    url: "https://www.facebook.com/",
    ariaLabel: "go to facebook",
  },
  {
    icon: <GrInstagram />,
    url: "https://www.instagram.com/",
    ariaLabel: "go to instagram",
  },
  {
    icon: <GrSnapchat />,
    url: "https://www.snapchat.com/",
    ariaLabel: "go to snapchat",
  },
]

function SocialLinks() {
  return (
    <ul tw="flex items-center justify-center mb-8">
      {socialLinkData.map((link, index) => {
        return (
          <li key={index}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
            >
              <div
                css={[
                  tw`p-2 m-2 text-base text-center text-gray-600 rounded-full hover:text-gray-400 transition-colors duration-200 ease-in-out`,
                  css`
                    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1),
                      0px 0px 0px 4px #fff, 0px 0px 0px 5px rgba(0, 0, 0, 0.1);
                  `,
                ]}
              >
                {link.icon}
              </div>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialLinks
