import * as actionsTypes from './actionTypes' ;

import axios from '../../axios-order' ;

export const addIngredient = (name) =>{
    return {
        type : actionsTypes.ADD_INGREDIENTS,
        ingredientName:name
    }
}



export const removeIngredient = (name) =>{
    return {
        type : actionsTypes.REMOVE_INGREDIENTS,
        ingredientName:name
    }
}



export const setIngredient = (ingredients) =>{
    return {
        type : actionsTypes.SET_INGREDIENTS,
        ingredients:ingredients
    }
}



export const fetchIngredientFaild = () =>{
    return {
        type : actionsTypes.FETCH_INGREDIENTS_FAILED,
       
    }
}







export const initIngredient = () =>{
    return  dispatch => {
         axios.get('https://reactproject-b61f5.firebaseio.com/ingredients.json').then(
           res => {
              dispatch(setIngredient(res.data))
           }).catch(error => {
              dispatch(fetchIngredientFaild())

            })
            
    }
}



