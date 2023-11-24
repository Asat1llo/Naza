import { Route, Routes } from 'react-router-dom'

import GlobalStyle from "./App.js" 



import Home from './pages/home/home.jsx'
import Admin from './pages/admin/admin.jsx'


  

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/admin' element={<Admin/>}/> 
      </Routes>
    <GlobalStyle/>
    </>
  )
}

export default App
