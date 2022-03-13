import React from 'react'
import styled from 'styled-components'
const  H2 = styled.h2`
    font-size:12px; 
    color:#333;
`
const  P= styled.p`
    font-size:12px; 
    color:#ababab;
`

const InformationBox = styled.div`
  padding: 20px  40px; 
`
const Information = ({ title }) => {
  return (
    <InformationBox>
        <H2>{ title }</H2>
        <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nulla error vitae possimus rerum ea in fugit quam nesciunt voluptate, odit fugiat facere sit asperiores quibusdam placeat corporis natus nostrum.
        </P>
    </InformationBox>
  )
}

export default Information