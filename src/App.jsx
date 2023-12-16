import { Route, Routes } from 'react-router-dom'
import GlobalStyle from "./App.js"
import Header from './components/header/header.jsx'

function App() {

  return (
    <>
      <Header />

      {/* <Routes>
        <Route path='/' element={<Layout/>}>
          
        </Route>
      </Routes> */}
      <GlobalStyle />
    </>
  )
}

export default App
