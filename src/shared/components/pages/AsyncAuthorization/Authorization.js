import React, { Component } from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import axios from 'axios'
import config from 'app-src/shared/core/config'

const Wrapper = styled.section`
  padding: 10px;
  background: transparent;

  .text-red{
    color: red;
  }
  .text-green {
    color: green
  }
  .text-orange {
    color: orange
  }
`

export default class Authorization extends Component {
  state = {
    loading: false,
    success: false,
    error: null
  }

  fetchData = async () => {
    try {
      this.setState({ loading: true })
      const response = await axios.get(`${config.restfulApi.host}/rest/auth/test-auth`)
      const { success } = response.data
      this.setState({ success, loading: false, error: null })
    } catch (error) {
      this.setState({ success: false, loading: false, error: error.response })
    }
  }

  handleClick = e => {
    e.preventDefault()
    this.fetchData()
  }

  componentDidMount = async () => {
    this.fetchData()
  }

  render() {
    let message = ''
    let className = ''
    if (!!this.state.error) {
      message = `Error ${this.state.error.status}: ${this.state.error.statusText}`
      className = 'text-red'
    } else {
      const { loading, success } = this.state
      message = success ? 'Yes. Authenticated.' : 'You are not authentication.'
      className = success ? 'text-green' : 'text-red'
      if (loading) {
        className = 'text-orange'
        message = 'Loading...'
      }
    }
    return (
      <Wrapper>
        <Helmet>
          <title>{message}</title>
        </Helmet>
        <h1>Test request restful API with authorization</h1>
        <span>
          It's set headers.authorization on redux/reducers/current-user.js<br />
          see that ==> axios.defaults.headers.common['Authorization'] = `Bearer $&#123;token&#125;`
        </span>
        <h1>Result: <span className={`${className}`}>{message}</span></h1>
        <button onClick={this.fetchData}>Fetch again</button>
      </Wrapper>
    )
  }
}
