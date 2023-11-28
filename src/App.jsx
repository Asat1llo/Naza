import { Route, Routes } from 'react-router-dom'

import GlobalStyle from "./App.js"
import Home from './pages/home/home.jsx'
import Header from './components/header/header.jsx'
import Admin from './pages/admin/admin.jsx'
import Footer from './components/footer/footer.jsx'




function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
      <Footer/>
      <GlobalStyle />
    </>
  )
}

export default App
