import React from 'react'
import { Container, Title } from '@/components/Header/Header.style'
import { useIntl } from 'react-intl'

interface Props {
  onLocaleChange: (locale: 'DE-de' | 'EN-us') => void
}
const Header: React.FC<Props> = ({ onLocaleChange }: Props) => {
  const intl = useIntl()

  return (
    <Container>
      <Title>AtslegaNetwork</Title>
      <div>
        <span>
          <span
            onClick={() => onLocaleChange('DE-de')}
            style={intl.locale === 'DE-de' ? { textDecoration: 'underline' } : { cursor: 'pointer' }}
          >
            DE
          </span>{' '}
          |{' '}
          <span
            onClick={() => onLocaleChange('EN-us')}
            style={intl.locale === 'EN-us' ? { textDecoration: 'underline' } : { cursor: 'pointer' }}
          >
            EN
          </span>
        </span>
      </div>
    </Container>
  )
}

export default Header
