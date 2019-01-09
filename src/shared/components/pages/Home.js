import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 4em;
  background: gray;
`

export default function Home() {
  return (
    <Wrapper>
      Hello my route = HOME
    </Wrapper>
  )
}
