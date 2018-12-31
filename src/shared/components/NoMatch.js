import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

const Wrapper = styled.h1`
  color: orangered;
`

export default function User() {
  return (
    <Wrapper>
      <Helmet title="Error: 404 Page Not Found !!" />
      404 Not found !!
    </Wrapper>
  )
}
