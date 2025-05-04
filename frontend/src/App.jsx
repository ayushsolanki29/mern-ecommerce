import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './assets/components/Layout/UserLayout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserLayout />}>

        </Route>
        <Route>
          {/* Admin layout */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
