import React from 'react'
import HeaderH1 from '../components/HeaderH1'
import Navbar from '../components/Navbar'
// import styled from 'styled-components'

const header = {
    marginBottom :'50px',
}

const Header = () => {
  return (
    <header style={ header }>
        <HeaderH1 />
        <Navbar />
    </header>
  )
}

export default Header