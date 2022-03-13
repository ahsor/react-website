import React from 'react'
import logo from '../images/logo.png'
import styled from 'styled-components'

const H1 = styled.h1`
    display:flex; 
    justify-content: center;
    margin: 50px 0; 
`

const HeaderH1 = () => {
  return (
    <>
        <H1>
            <img src={logo} alt="logo" />
        </H1>
    </>
  )
}

export default HeaderH1