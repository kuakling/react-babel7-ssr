import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 4em;
  background: aquamarine;
`

export default function User() {
  return (
    <Wrapper>
      Hello my route = About
    </Wrapper>
  )
}
