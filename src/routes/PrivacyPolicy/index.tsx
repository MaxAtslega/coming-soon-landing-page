import { Container } from '@/components/Container/Container.styles'
import React from 'react'
import { useIntl } from 'react-intl'
import Footer from '@/components/Footer'
import Paper from '@/components/Paper'

const PrivacyPolicy: React.FC = () => {
  const message = useIntl().formatMessage({ id: 'privacy-policy' })

  return (
    <Container>
      <Paper dangerouslySetInnerHTML={{ __html: message }} />
      <Footer />
    </Container>
  )
}

export default PrivacyPolicy
