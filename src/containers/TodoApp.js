import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import 'materialize-css/dist/css/materialize.min.css'
import '../style/style.css'

import * as todoActions from '../actions'

import Header from '../components/Header'
import TodoList from '../components/TodoList'

const TodoApp = ({ todos, actions }) => (
  <MuiThemeProvider>
    <div className='row container'>
      <Header actions={actions} />
      <TodoList todos={todos} actions={actions} />
    </div>
  </MuiThemeProvider>
)

const mapStateToProps = ({ todos }) => ({
  todos
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(todoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
