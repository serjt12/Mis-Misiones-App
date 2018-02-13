import React, { Component } from 'react';

import TextField from 'material-ui/TextField';

class TodoRow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      text: this.props.todo.text

    }
  }
  componentDidMount() {
    this.setState({
      text: this.props.todo.text
    })
  }

  onChange = e => {
    const { value: text } = e.target;
    console.log(this.state.text)
    this.setState({
      text,
    });


  };




  onEditDone(e) {
    if (e.keyCode === 13) {



      this.setState({
        editing: false,

      })



    }
  }



  handleEditTodo(e) {

    this.setState({
      editing: true,
      text: this.state.text
    })

  };








  render() {




    var editView = {},
      normalView = {}

    if (this.state.editing) {
      normalView.display = 'none'


    }
    else {

      editView.display = 'none'

    }


    return (
      <li className="collection-item avatar " >
        
        
        <i 
             className="material-icons blue circle" 
             onClick={this.props.handleCompleteTodo(this.props.todo.id)} >done</i>
            <span
             style = {this.props.todo.completed ? styles.completed : {} }
             
            >
            <span
            style={normalView}
            onDoubleClick= { this.handleEditTodo.bind(this) }
            >
            
           <p style={{fontSize:20}}> { this.state.text }</p></span></span>
     
     
     <i className="material-icons red-text secondary-content"
            onClick={this.props.handleRemoveTodo(this.props.todo.id)}>
            clear
            </i>
     
     
     
    
      
              
                <TextField
                style={editView}
                type="text"
      floatingLabelFixed
      floatingLabelText="Cambia Tu Mision (Enter Para Confirmar)"
              value={this.state.text}
              onChange={this.onChange}
            onKeyDown={this.onEditDone.bind(this)}
            />
      
      
              
            
            
      </li>
    );
  }
}

const styles = {
  completed: {
    color: 'gray',
    textDecoration: 'line-through',
    textDecorationColor: 'red'
  },
  todoStyle: {


  }
};


export default TodoRow;
