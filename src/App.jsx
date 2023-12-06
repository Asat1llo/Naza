import { Route, Routes } from 'react-router-dom'

import GlobalStyle from "./App.js"
import Card from './components/card/card.jsx'
import { Layout } from './pages/laoute.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='home' element={<Card />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  )
}

export default App
