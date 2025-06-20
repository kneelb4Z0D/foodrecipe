import { useState } from 'react'
import './App.css'
import{Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/home'
import Favorites from './pages/favorites'
import Details from './pages/details'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen p-6 bg-white text-gray'>
    <Navbar/>
    <Routes>
      <Route
        path='/'
        element={
          <Home/>
        }
      />
      <Route
        path='/favorites'
        element={
          <Favorites/>
        }
      />
      <Route
        path='/recipe-item/:id'
        element={
          <Details/>
        }
      />
    </Routes>



    </div>
  )
}

export default App
