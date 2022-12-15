import { createGlobalStyle } from 'styled-components'
import Variables from '@/style/Variables'

export const GlobalStyles = createGlobalStyle`
  ${Variables};
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
    box-sizing: inherit;
    width: 100%;
  }
  // Scrollbar styles 
  html, body {
    scrollbar-width: thin;
    scrollbar-color: var(--secondary);
  }
  body::-webkit-scrollbar {
    width: 8px;
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--secondary);
    border-radius: 10px;
  }
  body {
    margin: 0 auto;
    font-family: var(--font-main);
    background-color: var(--primary);
    color: var(--white);
    max-width: var(--max-width);
  }
  
  ul, li, ol {
    list-style: none;
  }
`
