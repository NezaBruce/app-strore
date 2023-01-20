
import './App.css'
import Header from './common/header/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from './common/footer/Footer'
function App() {

  return (
    <>
    <Router>
    <Header/>
        <Routes>
{/* <Route path='/' element={}/>      */}
        </Routes>
    <Footer/>  
    </Router>
    </>
  )
}

export default App
