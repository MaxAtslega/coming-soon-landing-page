import React from 'react'
import { Container } from '@/components/Container/Container.styles'
import UnderConstructionImage from '@/images/UnderConstructions.svg'
import { FormattedMessage } from 'react-intl'
import { Description, RootContainer, Title } from './Root.styles'
import Footer from '@/components/Footer'

const Root: React.FC = () => {
  return (
    <div>
      <Container>
        <RootContainer>
          <div>
            <img src={UnderConstructionImage} alt={'Under Construction'} />
            <Title>
              <FormattedMessage id="root.title" description="Title" />
            </Title>
            <Description>
              <FormattedMessage id="root.description" description="Description" />
            </Description>
            <Footer />
          </div>
        </RootContainer>
      </Container>
    </div>
  )
}

export default Root
