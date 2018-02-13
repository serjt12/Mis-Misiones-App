import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import TodoApp from './containers/TodoApp'
import './style/style.css';

let store = createStore(todoApp)

render(
  <Provider store={store}>
    <div className="container">
      <TodoApp />
    </div>
  </Provider>,
  document.getElementById('root')
)
