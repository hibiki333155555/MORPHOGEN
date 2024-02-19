// lib's
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // for routing

// page's
import { Top } from './pages/Top'
import { News } from './pages/News'
import { Article } from './pages/Article'
import { Art } from './pages/Art'
import { Us } from './pages/Us'

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
