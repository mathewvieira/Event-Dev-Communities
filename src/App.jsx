import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Events from '@/pages/Events'
import Communities from '@/pages/Communities'
import Navbar from '@/shared/components/Navbar'
import Footer from '@/shared/components/Footer'
import CommunityRegister from './pages/CommunityRegister'
import CreateEvent from './pages/CreateEvent'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/eventos'
          element={<Events />}
        />
        <Route
          path='/comunidades'
          element={<Communities />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/cadastro-comunidade'
          element={<CommunityRegister />}
        />
        <Route
          path='/criacao-de-eventos'
          element={<CreateEvent />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}
