import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '@/pages/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        {/* <Route
          path='/eventos'
          element={<Events />}
        />
        <Route
          path='/comunidades'
          element={<Communities />}
        /> */}
      </Routes>
    </BrowserRouter>
  )
}
