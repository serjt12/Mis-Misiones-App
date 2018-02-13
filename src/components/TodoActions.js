import React, { Component } from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';



class TodoActions extends Component {




  render() {

    const {

      currentFilter,
      handleFilter,
      handleRemoveCompleted,
      handleCompleteAll,
    } = this.props;



    return (

      <div className="row">
      
      
      <div className="col s3">
      
      
        <RadioButtonGroup
        style={{width:"10px"}}
          name="filter"
          defaultSelected={currentFilter}
          onChange={(e, value) => handleFilter(value)}
         
        >
        
          <RadioButton
            label="All"
            value="all"
            
          />
          
          <RadioButton
            label="Active"
            value="active"
           
          />
          
          <RadioButton
            label="Completed"
            value="completed"
           
          />
        </RadioButtonGroup>
    
</div>
     <div className="col s5" style={{position:"relative",bottom:10}}>
      <ul >
      <li >
      <i onClick = { handleRemoveCompleted } className = "material-icons prefix collection-item"  >
      delete </i> 
      <label style={styles.label} htmlFor = "icon_prefix" > Borra Todas Las Misiones      Completadas </label> 
      
      </li>
      <li className=" collection-item">
      
      <i onClick = { handleCompleteAll } className = "material-icons prefix" >
      clear_all 
      </i> 
      <label style={styles.label} htmlFor = "icon_prefix" > Cumpli Todas Mis Misiones </label> 
       </li>
       </ul>
</div>
</div>


    );
  }
}

const styles = {
  label: {

    display: "grid",
    position: "relative",
    bottom: 30

  }

}


export default TodoActions;
