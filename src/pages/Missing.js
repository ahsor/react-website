import React from 'react'
import {    Link } from "react-router-dom"

// 주소표시란에서 http://localhost:3000/test 
const Missing = () => {
  return (
    <main className='Missing'>
        <h1>잘못된 접근입니다.</h1>
        <p> Page Not Found </p>
        <Link to="/">되돌아가기</Link>
    </main>
  )
}

export default Missing