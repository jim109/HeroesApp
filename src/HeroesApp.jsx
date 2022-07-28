import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { About } from './pages/About';
import { Heroe } from './pages/Heroe';
import { Home } from './pages/Home';

export const HeroesApp = () => {
 
  return (
    <Router>      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/heroe/:id' element={<Heroe />} />
      </Routes>
    </Router>
  )
}
