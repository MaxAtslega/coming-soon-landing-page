import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  min-width: 80%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;

  @media only screen and (max-width: 720px) {
    padding: 20px;
  }
`
