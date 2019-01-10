import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import axios from 'axios'
import config from 'app-src/shared/core/config'

const Wrapper = styled.section`
  padding: 10px;
  background: #262626;
  color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  form {
    border-radius: 20px;
    padding: 20px;
    background-color: #0e0e0e;

    .title {
      margin-top: 0;
      text-align: center;
    }

    input[type="text"], input[type="password"], input[type="email"] {
      color: #fff;
      display: block;
      background-color: rgba(255, 255, 255, .15);
      border-color: rgba(255, 255, 255, .05);
    }
  }
.info {
  display: block;
  padding-left: 15px;
  margin-bottom: 20px;
}

.btn-primary {
  background-color: rgba(0, 123, 255, .25);
  margin: 0 10px;
}

.btn-secondary {
  background-color: rgba(108, 117, 125, .25);
  margin-left: 10px
}
`

@connect(({ currentUser }) => ({ currentUser }))
export default class Signup extends Component {
  state = {
    username: '',
    password: '',
    email: '',
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      const response = await axios.post(`${config.restfulApi.host}/rest/signup`, this.state)
      console.log(response)
      alert(`Congratulation. ${response.data.user.username}`)
    } catch (error) {
      alert(`Error ${error.response.status}: ${error.response.statusText}`)
      console.error(error.response.data)
    }
  }


  render() {
    if(!!this.props.currentUser) {
      return <Redirect to="/"/>
    }
    return (
      <Wrapper>
        <Helmet>
          <title>Signup</title>
          <meta name="description" content="Signup" />
        </Helmet>
        <form onSubmit={this.handleSubmit}>
          <h3 className={`title`}>Signup</h3>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" value={this.state.username} onChange={this.handleChange} className="form-control" id="username" name="username" placeholder="Username" autoFocus />
          </div>
          <div className="form-group">
            <label htmlFor="email">e-Mail</label>
            <input type="email" value={this.state.email} onChange={this.handleChange} className="form-control" id="email" name="email" placeholder="e-Mail" />
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input type="password" value={this.state.password} onChange={this.handleChange} className="form-control" id="password" name="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <Link to={`/`} className="btn btn-secondary">Home</Link>
            <button type="submit" className="btn btn-primary">Signup</button>
          </div>
        </form>
      </Wrapper>
    )
  }
}
