import React from 'react';
import TodoActions from './TodoActions';

const Footer = ({ todos, currentFilter, handleFilter, handleRemoveCompleted, handleCompleteAll }) => {
  const leftTodos = todos.reduce((count, { completed }) => completed ? count : count + 1, 0);
  return (
    <div >
    <span
    className="new badge  light-blue " 
    data-badge-caption={" Misiones Por Realizar"}
    >
          {leftTodos} 
        </span>
        <TodoActions
          todos={todos}
          currentFilter={currentFilter}
          handleFilter={handleFilter}
          handleRemoveCompleted={handleRemoveCompleted}
          handleCompleteAll={handleCompleteAll}
          
        />
    
    
     
    
  </div>
  );
};

export default Footer;
