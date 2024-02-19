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
      <div className="bg-cover h-screen w-screen flex sm:flex-row space-x-72 justify-center xl:bg-[url('./assets/home.png')] relative" >
        <div className="pt-64 pl-8 space-y-8 absolute right-32">
          <h1 className="text-6xl font-bold text-white">Article</h1>
        </div>
      </div>
    </>
  )
}

export default App
