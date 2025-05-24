import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './assets/components/Layout/UserLayout'
import Home from './assets/pages/Home'
import { Toaster } from 'sonner'

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position='top-right' />
      <Routes>
        <Route path='/' element={<UserLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route>
          {/* Admin layout */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
