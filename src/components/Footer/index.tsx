import React from 'react'
import { FormattedMessage } from 'react-intl'
import { FooterContainer, Navigation } from '@/components/Footer/Footer.styles'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Navigation>
        <ul>
          <li>
            <Link to={'/privacy-policy'}>
              <FormattedMessage id="footer.privacyPolicy" description="Privacy Policy" />
            </Link>
          </li>
          <li>
            <Link to={'/site-notice'}>
              <FormattedMessage id="footer.siteNotice" description="Site Notice" />
            </Link>
          </li>
        </ul>
      </Navigation>
    </FooterContainer>
  )
}

export default Footer
