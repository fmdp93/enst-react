import './css/reset.css'
import './css/bootstrap.min.css'
import './scss/style.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contacts from './Contacts'
import Sitemap from './Sitemap'
import Nav from './components/Nav'

function App() {
  return (
    <BrowserRouter basename='/'>
      <Nav></Nav>
      <main>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/contacts" element={<Contacts></Contacts>}></Route>
          <Route path="/sitemap" element={<Sitemap></Sitemap>}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
