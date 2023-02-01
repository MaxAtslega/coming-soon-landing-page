import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: center;
  font-weight: 700;
  font-size: 14px;
`
export const RightContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;

  img {
    height: 40px;
    padding-right: 5px;
  }

  @media only screen and (max-width: 720px) {
    span {
      display: none;
    }
  }
`

export const LanguageChoice = styled.span`
  span:first-child:after {
    content: '|';
    padding: 0 5px;
  }
`
