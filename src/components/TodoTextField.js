import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import misiones from '../style/misiones.png'

class TodoTextField extends Component {
  state = {
    text: ''
  };

  onChange = e => {
    const { value: text } = e.target
    this.setState({
      text
    })
  };

  onKeyDown = e => {
    const { value } = e.target
    if (e.which === 13) {
      this.props.onSubmit(value)
      this.setState({
        text: ''
      })
    }
  };

  render () {
    return (
      <div className='col s12 m4 l3'>
        <TextField
          floatingLabelText='Agrega tu mision...'
          value={this.state.text}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          style={styles.textBox}
        />
        <img style={styles.img} src={misiones} alt='mis misiones logo' />
      </div>
    )
  }
}

const styles = {
  img: {
    position: 'relative',
    height: 400,
    left: -50
  },
  textBox: {
    position: 'relative',
    left: 250,
    top: 50,
    width: 420
  }
}

export default TodoTextField
