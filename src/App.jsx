import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Events from '@/pages/Events'
import Communities from '@/pages/Communities'
import Navbar from '@/shared/components/Navbar'
import Footer from '@/shared/components/Footer'

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
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}
