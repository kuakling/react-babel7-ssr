import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { addTodo } from 'app-src/shared/redux/actions/todos'

/**
 * This method combines the state of the reducers with the props passed to the component.
 * A component that connects to the store is commonly referred to as 'container'.
 * To connect to the store, the '@connect' decorator is used.
 *
 * @param todos
 * @returns {{todos: *}}
 */
const mapStateToProps = ({ todos }) => ({
  todos
});

/**
 * The `App` component is the entry point for the react app.
 * It is rendered on the client as well as on the server.
 *
 * You can start developing your react app here.
 */
@connect(mapStateToProps, {
  addTodo
})
export default class WithRedux extends Component {

  handleAddTodoClick = () => {
    this.props.addTodo(`Random Todo #${Math.round(Math.random() * 100)}`);
  };

  render() {
    const { todos } = this.props;
    return (
      <Fragment>
        <button onClick={this.handleAddTodoClick}>+ Random number</button>
        <ul>
          { todos.map((todo, i) => (
            <li key={i}>{ todo.name }</li>
          ))}
        </ul>
      </Fragment>
    );
  }

}

// export default connect(mapStateToProps, {
//   addTodo
// })(WithRedux)