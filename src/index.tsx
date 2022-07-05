import { createRoot } from 'react-dom/client'
import Reset from './assets/styles/reset'
import Funcionalidades from './funcionalidades'

import GlobalStyle from './style'

createRoot(document.getElementById('root')).render(
  <>
    <Reset />
    <GlobalStyle />
    <Funcionalidades />
  </>
)
