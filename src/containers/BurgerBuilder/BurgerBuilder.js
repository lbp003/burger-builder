import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

state = {
    ingredients: {
        meat: 0,
        salad: 0,
        bacon: 0,
        cheese: 0
    }
}

   render() {
       return (
           <Aux>
                <Burger ingredients={this.state.ingredients}/>
               <div>Builder</div>
           </Aux>
       )
   }
}

export default BurgerBuilder;