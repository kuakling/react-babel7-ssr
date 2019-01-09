import React, { Component } from 'react'
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

    input[type="text"], input[type="password"] {
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
}

.btn-secondary {
  background-color: rgba(108, 117, 125, .25);
  margin-left: 10px
}
`
export default class Login extends Component {
  state = {
    username: '',
    password: '',
    users: '',
    showUsers: false
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
      const response = await axios.post(`${config.restfulApi.host}/rest/auth`, this.state)
      console.log(response)
      alert(`Congratulation. ${response.data.user.username}`)
    } catch (error) {
      alert(`Error ${error.response.status}: ${error.response.statusText}`)
      console.error(error.response.data)
    }
  }

  handleShowUsers = async e => {
    e.preventDefault()
    this.setState({
      showUsers: !this.state.showUsers
    })
  }

  componentDidMount = async () => {
    const response = await axios.get(`${config.restfulApi.host}/rest/auth/show-users`, this.state)
    this.setState({
      users: response.data
    })
  }


  render() {
    return (
      <Wrapper>
        <Helmet>
          <title>Login</title>
          <meta name="description" content="Login" />
        </Helmet>
        <form onSubmit={this.handleSubmit}>
          <h3 className={`title`}>Login</h3>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" value={this.state.username} onChange={this.handleChange} className="form-control" id="username" name="username" placeholder="Username" autoFocus />
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input type="password" value={this.state.password} onChange={this.handleChange} className="form-control" id="password" name="password" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
          <button type="button" className="btn btn-secondary" onClick={this.handleShowUsers}>Sow Users</button>
        </form>
        <div className="users" style={{ display: this.state.showUsers ? 'block' : 'none' }}>
          <pre>{JSON.stringify(this.state.users, null, 2)}</pre>
        </div>
      </Wrapper>
    )
  }
}
