import React from 'react'
import { BrowserRouter as BRoute, Routes, Route } from 'react-router-dom'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Home from './pages/Home'
import About from './pages/About'
import CustommerCare from './pages/CustommerCare'
import Editorial from './pages/Editorial'
import LineUp from './pages/LineUp'
import Store from './pages/Store'
import Missing from './pages/Missing'

//https://yanolja.in/about/
//https://www.taiwantour.or.kr/bbs/board.php?bo_table=m06_12&sca=%EC%9B%94%EA%B0%84%EB%A7%A4%EA%B1%B0%EC%A7%84

const App = () => {
  return (
    <BRoute>
        <Header />
        <Routes >
            <Route path="/" element={ <Home />}/>
            <Route path="/About" element={ <About />}/>
            <Route path="/CustommerCare" element={ <CustommerCare />}/>
            <Route path="/Editorial" element={ <Editorial />}/>
            <Route path="/LineUp" element={ <LineUp />}/>
            <Route path="/Store" element={ <Store />}/>
            <Route path="/*" element={ <Missing />}/>
        </Routes>
        <Footer />
    </BRoute>
  )
}

export default App