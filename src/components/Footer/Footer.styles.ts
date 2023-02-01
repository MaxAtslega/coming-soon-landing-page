import styled from 'styled-components'

export const Navigation = styled.nav`
  li {
    float: left;
    margin-top: 1rem;
    padding: 1rem;
    font-weight: 600;
    font-size: 14px;
  }

  @media only screen and (max-width: 720px) {
    li {
      float: none;
      padding: 0.5rem;
    }
  }
`

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
`
