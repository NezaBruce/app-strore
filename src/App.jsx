
import './App.css'
import Header from './common/header/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from './common/footer/Footer'
import Heroi from './common/hero/heroi'
import About from './common/About/About'
function App() {

  return (
    <>
    <Router>
    <Header/>
    <Heroi/>
    <About/>
        <Routes>
{/* <Route path='/' element={}/>      */}
        </Routes>
    <Footer/>  
    </Router>
    </>
  )
}

export default App
