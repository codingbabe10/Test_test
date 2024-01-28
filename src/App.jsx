import Container from 'react-bootstrap/Container'

import { Posts } from "./components/Posts"
import Header from './components/Header'
import Body from './components/Body'
import Whiteboard from './components/Whiteboard'
import Register from './components/forms/Register'
import Users from './components/Users'
import FormPage from './pages/FormPage'
import SocialPage from './pages/SocialPage'
import LandingPage from './pages/LandingPage'
import Login from './components/forms/Login'
import { Route, Routes } from 'react-router-dom'

export default function App() {

  return (
    <Container fluid data-bs-theme='dark' className='app'>
      <Header />
      
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<FormPage><Login /></FormPage>} />
        <Route path='/register' element={<formPage><Register/></formPage>} />
        <Route path='/register' element={<socialPage><Users/></socialPage>} />
        <Route path='/register' element={<socialPage><Posts/></socialPage>} />
      </Routes>

    </Container>
  )
}