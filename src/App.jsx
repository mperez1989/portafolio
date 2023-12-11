import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import HabilidadesPage from './pages/HabilidadesPage'
import ProjectPage from './pages/ProjectPage'
import NavBarWithPage from './pages/NavBarWithPage'
import NotFountPage from './pages/NotFountPage'

function App() {
  

  return (
    <div className=''>
  
      <Routes>
        <Route element={<NavBarWithPage/>}>
          <Route path='/' element={<HomePage />} />
          <Route path='/habilities' element={<HabilidadesPage/>} />
          <Route path='/projects' element={<ProjectPage/>} />
          <Route path='/contact' element={<ContactPage />} />
        </Route>
        <Route path='*' element={<NotFountPage/>} />
      </Routes>
    </div>
  )
}

export default App
