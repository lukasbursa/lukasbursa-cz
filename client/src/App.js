import React from 'react'
import { Routes, Route, HashRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import SharedLayout from "./pages/SharedLayout"
import Home from "./pages/Home"
import Offers from "./pages/Offers"
import Blog from "./pages/Blog"
import BlogPost from "./pages/BlogPost"
import Policies from "./pages/Policies"
import FreeEstimate from "./pages/FreeEstimate"
import Error404 from "./pages/Error404"

const App = () => {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={ <SharedLayout /> }>
          <Route index element={ <Home /> } />
          <Route path="/nemovitosti" element={ <Offers /> } />
          <Route path="/clanky" element={ <Blog /> } />
          <Route path="/clanky/:postUrl" element={ <BlogPost /> } />
          <Route path="/ochrana-osobnich-udaju" element={ <Policies /> } />
          <Route path="/odhad-zdarma" element={ <FreeEstimate /> } />
          <Route path="*" element={ <Error404 /> } />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App