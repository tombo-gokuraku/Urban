import facepaint from "facepaint"
import resolveConfig from "tailwindcss/resolveConfig"
import tailwindConfig from "./../../tailwind.config.js"

const {
  theme: { screens },
} = resolveConfig(tailwindConfig)

const breakpoints = Object.values(screens)

export const mq = breakpoints.map(bp => `@media (min-width: ${bp})`)
export const mqf = facepaint(breakpoints.map(bp => `@media (min-width: ${bp})`))
