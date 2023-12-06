import { Route, Routes } from 'react-router-dom'

import GlobalStyle from "./App.js"
import Card from './components/parts/card/card.jsx'
import Admin from './pages/admin/admin.jsx'
import { Layout } from './pages/laoute.jsx'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='home' element={<Card />} />
          <Route path='admin' element={<Admin />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  )
}

export default App
