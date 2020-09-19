import * as actionType from './action';

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4,
    
};

const PRICE_INGREDEINT = {
    salad : 1.4 ,
    bacon :0.6 ,
    cheese:1.4,
    meat :0.5
}


    const reducer = ( state = initialState, action ) => {

    switch (action.type) {
        case actionType.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice : state.totalPrice+PRICE_INGREDEINT[action.ingredientName]
            }
        case actionType.REMOVE_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice : state.totalPrice-PRICE_INGREDEINT[action.ingredientName]

            };
             default:
            return state;
    
 
    }
}


export default reducer;