import React from 'react';
import HeaderH1 from '../components/HeaderH1'
import styled from 'styled-components'
import Information from '../components/Information'

const FooterContainer = styled.footer`
    border-top: 1px solid black; 
`

const InformationContainer = styled.div`
    width:1200px; margin:auto; 
    display:flex; 
    justify-content:center;
    @media screen and (max-width:1250px){
        width:98%;
    }
    @media screen and (max-width:600px){
        width:100%;
        flex-direction: column; 
    }
`
const Footer = () => {
  const today = new Date();
    return (
        <FooterContainer className='Footer'>
            <HeaderH1 />
            <InformationContainer className='Information-container'>
                <Information  title={'YOU TAILOR LUSSOSO'}    />
                <Information  title={'INFORMATION'}   />
            </InformationContainer>
        </FooterContainer>
    )
};

export default Footer;