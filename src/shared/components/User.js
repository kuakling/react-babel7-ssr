import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 4em;
  background: orange;
`

export default function User() {
  return (
    <Wrapper>
      Hello my route = User
    </Wrapper>
  )
}
