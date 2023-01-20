
import './App.css'
import Header from './common/header/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from './common/footer/Footer'
import Heroi from './common/hero/heroi'
function App() {

  return (
    <>
    <Router>
    <Header/>
    <Heroi/>
        <Routes>
{/* <Route path='/' element={}/>      */}
        </Routes>
    <Footer/>  
    </Router>
    </>
  )
}

export default App
