// lib's
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // for routing

// page's
import { Top } from './page/Top'
import { News } from './page/News'
import { Article } from './page/Article'
import { Art } from './page/Art'
import { Us } from './page/Us'

export const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/news" element={<News />} />
          <Route path="/article" element={<Article />} />          
          <Route path="/art" element={<Art />} />
          <Route path="/us" element={<Us />} />
        </Routes>
      </Router>
    </>
  )
}
