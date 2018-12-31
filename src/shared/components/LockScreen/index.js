import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { setUnLockScreen } from 'app-src/shared/redux/actions/app-state'

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: darkgray;
  color: #f4f4f4;

  * {
    font-size: 1.2em;
    outline-width: 0;
  }

  input[type="password"]{
    padding: 5px 10px;
    border: gray 1px solid;
    border-radius: 5px;
    margin-bottom: 10px;
    background-color: rgba(255, 255, 255, .2)
  }
  input[type="password"]:focus {
    background-color: rgba(255, 255, 255, 1)
  }

  button[type="submit"] {
    border-radius: 5px;
    background-color: orangered;
    border: darkred 1px solid;
    padding: 5px 20px;
    color: #f4f4f4;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .hint {
    font-size: .7em;
  }
`

@connect(null, { setUnLockScreen })
export default class LockScreen extends Component {
  state = {
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  render() {
    return (
      <Wrapper>
        <form onSubmit={e => {e.preventDefault(); this.props.setUnLockScreen(this.state.password)}}>
        <input type="text" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} autoFocus />
        <br/>
        <button type="submit">Unlock</button>
        <div className='hint'>Password: 123456</div>
        </form>
      </Wrapper>
    )
  }
}
