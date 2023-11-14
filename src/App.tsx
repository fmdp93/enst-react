import './css/reset.css'
import './css/bootstrap.min.css'
import './scss/style.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contacts from './Contacts'
import Sitemap from './Sitemap'
import Nav from './components/Nav'

export type ClassesType = {
  [key: string]: string;
}

function App() {
  const classes: ClassesType = {
    row: "row p-4",
    col_1: "col-12 col-sm-11 col-md-10 mx-auto",
    col_1_row: "row my-4 mt-sm-5",
    col_1_row_col_1: "col-12 col-sm mb-3",
    col_1_row_col_2: "col-12 col-sm-7 col-md-8 col-lg-10",
  }
  return (
    <BrowserRouter basename='/'>
      <Nav></Nav>
      <main>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/contacts" element={<Contacts classes={classes}></Contacts>}></Route>
          <Route path="/sitemap" element={<Sitemap classes={classes}></Sitemap>}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
