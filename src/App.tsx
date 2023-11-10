import Header from './components/Header'
import './css/reset.css'
import './css/bootstrap.min.css'
import './scss/style.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contacts from './Contacts'
import Sitemap from './Sitemap'

function App() {
  return (
    <BrowserRouter basename='/'>
      <div className="enst">
        <Header></Header>
      </div>
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
