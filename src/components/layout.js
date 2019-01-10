import Footer from '../components/footer'
import React from 'react'
import { css } from '@emotion/core'
import { rhythm } from '../utils/typography'
import { StripeProvider } from 'react-stripe-elements'
const metaData = require(`../../gatsby-config`).siteMetadata

class Template extends React.Component {
  render() {
    const { children } = this.props
    return (
      <StripeProvider apiKey={metaData.stripe_public_key_test}>
        <div
          css={css`
          display:flex;
          flex-direction:column;
          height:100%;
          min-height:100vh;
        `}>
          <div css={css`
            flex:1;
            header {
              border-bottom: solid 1px;
              padding: ${rhythm(2)};
            }
            main {
              padding: ${rhythm(2)};
            }
          `}>
            {children}
          </div>
          <Footer css={css`
            flex:none;
            border-top: solid 1px;
            padding: ${rhythm(2)};
            font-size: 75%;
            text-align: center;
          `} />
        </div>
      </StripeProvider>
    )
  }
}

export default Template
