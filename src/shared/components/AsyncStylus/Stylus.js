import React from 'react'
import styled from 'styled-components'
import styl from './stylus.styl'
import css from './stylus.css'

const Wrapper = styled.h1`
  background: #0e8dbc;
  text-shadow: 0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15);
`

export default () => {
  return (
    <Wrapper className={`${styl.from_stylus} ${css.from_css} my_stylus_global`}>
      Using 
      <ul>
        <li>Styled-Components</li>
        <li>CSS</li>
        <li>Stylus</li>
      </ul>
    </Wrapper>
  )
}
