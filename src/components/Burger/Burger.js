import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(igntKey => { 
            return [...Array(props.ingredients[igntKey])].map((_, i) => {
                return <BurgerIngredient key={ igntKey + i } type={ igntKey } />;
                });
             }).reduce((arr, el) => {
                 return arr.concat(el);
             }, []); 
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }
    return (
    <div className={styles.Burger}>
        <BurgerIngredient type="bread-top"></BurgerIngredient>
        { transformedIngredients }
        <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </div>
    );
};

export default Burger;