import React from 'react'
// import Sidebar from './Components/Sidebar'
import TopStats from './Components/TopStats'

// import DashboardContent from './Components/DashboardContent'
// import Charts from './Components/Charts'
// import Tables from './Components/Tables'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Components/shared/Layout'
import Dashboard from './Components/Pages/Dashboard'
import Products from './Components/Pages/Products'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='products' element={<Products/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
