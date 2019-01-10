import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

const Wrapper = styled.section`
  padding: 10px;
  background: darkslategrey;
  color: #f4f4f4;

  label {
    display: block;
    font-weight: bold;
  }
  .info {
    display: block;
    padding-left: 15px;
    margin-bottom: 20px;
  }
`

export default function About() {
  return (
    <Wrapper>
      <Helmet title="MY INFO" />
      <label>Author: </label>
      <div className="info">Mr.Surakit Choodet</div>
      <label>e-Mail: </label>
      <div className="info">kuakling@gmail.com</div>
      <label>Facebook: </label>
      <div className="info">https://www.facebook.com/BawSurakit</div>
      <label>Location: </label>
      <div className="info">Trang, Pattani Thailand</div>
      <label>Office: </label>
      <div className="info">Faculy of Communication Sciences, Prince of Songkla University, Pattani Campus</div>

      <label>Repository: </label>
      <div className="info">https://github.com/kuakling/react-babel7-ssr</div>
    </Wrapper>
  )
}
