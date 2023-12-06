import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

import GlobalStyle from "./App.js"
import Home from "./pages/home.jsx"
import Cards_Inner from './pages/cards_inner/cards_inner.jsx'
import { Layout } from './pages/laoute.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='cards_inner/:cardid' element={<Cards_Inner/>}/>
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  )
}

export default App
