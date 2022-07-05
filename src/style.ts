import { createGlobalStyle } from 'styled-components'
import colors from './assets/styles/colors'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Open Sans","Helvetica Neue",sans-serif;
  }

  html,
  body {
    box-sizing: border-box;
    height: 100%;
    font-size: 14px;
  }

  #root {
    display: flex;
    height: 100%;
    flex-direction: column;
  }
` as any
