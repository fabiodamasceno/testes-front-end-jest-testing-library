import { Route, Routes } from 'react-router-dom'
import PaginaBusca from './repositorios/PaginaBusca'

export const Rotas = () =>
  <Routes>
    <Route path='/' element={<PaginaBusca />} />
  </Routes>
