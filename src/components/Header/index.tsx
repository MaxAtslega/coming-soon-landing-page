import React from 'react'
import { Container, LanguageChoice, RightContainer, Title } from '@/components/Header/Header.styles'
import { FormattedMessage, useIntl } from 'react-intl'
import AtslegaMediaLogoImage from '@/images/AtslegaMediaLogo.svg'
import { Link } from 'react-router-dom'

interface Props {
  onLocaleChange: (locale: 'DE-de' | 'EN-us') => void
}
const Header: React.FC<Props> = ({ onLocaleChange }: Props) => {
  const intl = useIntl()

  return (
    <Container>
      <Link to={'/'}>
        <Title>
          <img src={AtslegaMediaLogoImage} alt={'AN'} />
          <span>
            <FormattedMessage id="header.title" description="Header title" />
          </span>
        </Title>
      </Link>

      <RightContainer>
        <LanguageChoice>
          <span
            onClick={() => {
              onLocaleChange('DE-de')
            }}
            style={intl.locale === 'DE-de' ? { textDecoration: 'underline' } : { cursor: 'pointer' }}
          >
            DE
          </span>
          <span
            onClick={() => {
              onLocaleChange('EN-us')
            }}
            style={intl.locale === 'EN-us' ? { textDecoration: 'underline' } : { cursor: 'pointer' }}
          >
            EN
          </span>
        </LanguageChoice>
      </RightContainer>
    </Container>
  )
}

export default Header
