import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #646681;
    margin: 0px;
  }
  
  #root {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 400;
  }
  
  * {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    font-family: Montserrat, sans-serif;
    object-fit: cover;
  }
  
  main {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
