import React, { Component } from 'react'
import TextField from 'material-ui/TextField'

class TodoRow extends Component {
    state = {
      editing: false,
      text: this.props.todo.text
    };

    componentDidMount () {
      this.setState({
        text: this.props.todo.text
      })
    }

  onChange = e => {
    const { value: text } = e.target
    this.setState({
      text
    })
  };

  onEditDone (e) {
    if (e.keyCode === 13) {
      this.setState({
        editing: false
      })
    }
  }

  handleEditTodo (e) {
    this.setState({
      editing: true,
      text: this.state.text
    })
  }
  render () {
    var editView = {}
    var normalView = {}
    if (this.state.editing) {
      normalView.display = 'none'
    } else {
      editView.display = 'none'
    }
    return (
      <li
        className='collection-item avatar visible'
        style={{ display: 'flex' }}>
        <i
          className='material-icons blue-text small visible'
          onClick={this.props.handleCompleteTodo(this.props.todo.id)}
          style={styles.check}>
          done
        </i>
        <span style={this.props.todo.completed ? styles.completed : {}}>
          <span
            style={normalView}
            onDoubleClick={this.handleEditTodo.bind(this)}>
            <p style={styles.textTodo}> {this.state.text}</p>
          </span>
        </span>

        <i
          style={styles.cancel}
          className='material-icons red-text tiny right visible'
          onClick={this.props.handleRemoveTodo(this.props.todo.id)}>
          clear
        </i>

        <TextField
          style={editView}
          type='text'
          floatingLabelFixed
          floatingLabelText='Cambia Tu Mision (Enter Para Confirmar)'
          value={this.state.text}
          onChange={this.onChange}
          onKeyDown={this.onEditDone.bind(this)}
        />
      </li>
    )
  }
}

const styles = {
  completed: {
    color: 'gray',
    textDecoration: 'line-through',
    textDecorationColor: 'red'
  },
  check: {
    position: 'relative',
    right: 60,
    width: 20,
    top: 15
  },
  cancel: {
    position: 'relative',
    top: 25,
    left: 180
  },
  textTodo: {
    fontSize: 20,
    cursor: 'pointer',
    width: 150,
    position: 'relative',
    top: 20
  }
}

export default TodoRow
