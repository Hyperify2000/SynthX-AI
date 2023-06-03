import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Navbar, UpArrow } from './components'
import { Home } from './pages'

const App = () => {
  return (
    <Router>
      <Navbar />
      <UpArrow />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </Router>
  )
}

export default App