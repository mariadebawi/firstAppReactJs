import * as actionType from '../actions/actionTypes';
import { updateObject } from '../utility'




const initialState = {
    ingredients: null,
    totalPrice: 4,
    errors: false


};

const PRICE_INGREDEINT = {
    salad: 1.4,
    bacon: 0.6,
    cheese: 1.4,
    meat: 0.5
}


const addIngredient = (state, action) => {
    const updatedIngredient = {
        [action.ingredientName]: state.ingredients[action.ingredientName] + 1
    }
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + PRICE_INGREDEINT[action.ingredientName]
    }
    return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
    const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }
    const updatedIngs = updateObject(state.ingredients, updatedIng);
    const updatedSt = {
        ingredients: updatedIngs,
        totalPrice: state.totalPrice - PRICE_INGREDEINT[action.ingredientName]
    }
    return updateObject(state, updatedSt);
};

const setIngredients = (state, action) => {
    return updateObject(state, {
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat
        },
        totalPrice: 4,
        error: false
    });
};



const BurgerBuilders = (state = initialState, action) => {

    switch (action.type) {
        case actionType.ADD_INGREDIENTS:
            return addIngredient(state, action);

        case actionType.REMOVE_INGREDIENTS:
            return removeIngredient(state, action);

        case actionType.SET_INGREDIENTS:
            return setIngredients(state, action);

        case actionType.FETCH_INGREDIENTS_FAILED:
            return {
                ...state,
                errors: true

            }
        default:
            return state;

    }
}


export default BurgerBuilders;