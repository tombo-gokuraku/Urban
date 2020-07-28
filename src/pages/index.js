/** @jsx jsx */
import { jsx } from "@emotion/core"
import tw, { css, styled, theme } from "twin.macro"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { mq, mqf } from "../styles/breaks"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <H1>Gatsby starter using Emotin and tailwind</H1>
      <div
        css={[
          css`
            background-color: red;
            ${mq[0]} {
              background-color: orange;
            }
            ${mq[1]} {
              background-color: yellow;
            }
            ${mq[2]} {
              background-color: lightgreen;
            }
            ${mq[3]} {
              background-color: lightblue;
            }
          `,
        ]}
      >
        breakpoints test
      </div>

      <div
        css={mqf({
          backgroundColor: [
            "red",
            "orange",
            "yellow",
            "lightgreen",
            "lightblue",
          ],
        })}
      >
        facepaint test
      </div>
      <H2>Install</H2>
      <P>Install the Gatsby CLI and create a project with this starter</P>
      <Pre>
        <code>
          gatsby new emotion_tailwind
          https://github.com/tombo-gokuraku/gatsby-starter-emotion-tailwind
        </code>
        <br />
        <code>cd emotion_tailwind</code>
        <br />
        <code>gatsby develop</code>
      </Pre>
      <H2>Usage</H2>
      <H3>Use with tw prop</H3>
      <Pre>
        <code>import &apos;twin.macro&apos; </code>
        <br />
        <code>
          &lt;button tw=&quot;px-4 py-2 border-4 border-green-400 border-solid
          rounded focus:outline-none&quot;&gt;
          <br />
          &nbsp;&nbsp;tw prop
          <br />
          &lt;/button&gt;
        </code>
      </Pre>

      <button tw="px-4 py-2 border-4 border-green-400 border-solid rounded focus:outline-none">
        tw prop
      </button>
      <H3>Use with tw tag</H3>
      <Pre>
        <code>import tw from &quot;twin.macro&quot;</code>
        <br />
        <code>
          const Button = tw.button`
          <br />
          &nbsp;&nbsp; bg-teal-100
          <br />
          &nbsp;&nbsp; py-2
          <br />
          &nbsp;&nbsp; px-4
          <br />
          &nbsp;&nbsp; rounded
          <br />
          &nbsp;&nbsp; border-solid
          <br />
          &nbsp;&nbsp; border-teal-400
          <br />
          &nbsp;&nbsp; border-4
          <br />
          &nbsp;&nbsp; focus:outline-none
          <br />`
          <br /> &lt;Button&gt;tw tag&lt;/Button&gt;
        </code>
      </Pre>
      <Button>tw tag</Button>
      <span tw="ml-4"></span>
      <ExtendedButton>extended button</ExtendedButton>
      <H3>Use with css tag</H3>
      <Pre>
        <code>import tw, &#123;css&#125; from &quot;twin.macro&quot;</code>
        <br />
        <code>
          &lt;a
          <br />
          &nbsp;&nbsp;href=&quot;/&quot;
          <br />
          &nbsp;&nbsp;css=&#123;&#91;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;tw`inline-block&nbsp;text-base&nbsp;text-black`,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;css`
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&amp;::after&nbsp;&#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content:&nbsp;&quot;&quot;;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display:&nbsp;block;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;margin-top:&nbsp;2px;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height:&nbsp;2px;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color:&nbsp;#B2F5EA;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;`,
          <br />
          &nbsp;&nbsp;&#93;&#125;
          <br />
          &gt;
          <br />
          &nbsp;&nbsp;css&nbsp;tag
          <br />
          &lt;/a&gt;
        </code>
      </Pre>
      <a
        href="/"
        css={[
          tw`inline-block text-base text-black`,
          css`
            &::after {
              content: "";
              display: block;
              margin-top: 2px;
              height: 2px;
              background-color: #b2f5ea;
            }
          `,
        ]}
      >
        css tag
      </a>
      <H3>Use as styled components</H3>

      <StyledButton>normal</StyledButton>
      <StyledButton large>large</StyledButton>
      <button
        css={[
          tw`px-4 py-2 m-2 text-white rounded transform hover:(scale-110 font-bold) transition-transform duration-100 focus:outline-none`,
          css`
            background: linear-gradient(
              to left,
              ${theme`colors.primary`},
              ${theme`colors.secondary`}
            );
          `,
        ]}
      >
        css prop ThemeButton
      </button>
      <ThemeButton>Styled ThemeButton</ThemeButton>

      <CustomButton>normal</CustomButton>
      <CustomButton primary>primary</CustomButton>
      <CustomButton gradient>gradient</CustomButton>
      <H2>Settings</H2>
      <H3>tailwind.config</H3>
      <H3>babelMacros</H3>
      <H2>Example</H2>
    </Layout>
  )
}

const H1 = tw.h1`
  text-3xl font-bold py-4 pb-3
`
const H2 = tw.h2`
  text-2xl font-semibold py-5 pb-2
`
const H3 = tw.h3`
  text-xl font-medium py-5 pb-1
`
const P = tw.p`
  text-base
  py-1
`

const Pre = tw.pre`
  text-sm
  bg-gray-300
  overflow-auto
  mb-2
`

const Button = tw.button`
  bg-teal-100
  py-2
  px-4
  rounded
  border-solid
  border-teal-400
  border-4
  focus:outline-none
`

const ExtendedButton = tw(Button)`
  text-orange-500
`

// object style
const StyledButton = styled.button(({ large }) => [
  tw`px-4 py-2 m-2 bg-teal-200 rounded`,
  large ? tw`text-xl` : tw`text-base`,
])

const CustomButton = styled.button(({ primary, gradient }) => [
  tw`m-2 px-4 py-2 bg-orange-200 rounded transform hover:(scale-110 text-teal-500 font-bold) transition-transform duration-100 focus:outline-none`,
  primary && tw`bg-teal-200`,
  gradient &&
    css`
      background: linear-gradient(to left, lightgreen, orange);
      ${tw`text-white rounded-md hover:text-white`};
    `,
])

//ThemeButton
const ThemeButton = styled.button([
  tw`m-2 px-4 py-2 text-white rounded transform hover:(scale-110 font-bold) transition-transform duration-100 focus:outline-none`,
  css`
    background: linear-gradient(
      to left,
      ${theme`colors.primary`},
      ${theme`colors.secondary`}
    );
  `,
])

export default IndexPage
