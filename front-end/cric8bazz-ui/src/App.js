import React from 'react'
import Home from './Pages/Home'
import StatByYear from './Pages/StatByYear'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SharedLayout from './Components/SharedLayout'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="StatByYear" element={<StatByYear/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
