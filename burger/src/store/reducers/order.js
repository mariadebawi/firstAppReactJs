import * as actionType from '../actions/actionTypes';

import {updateObject} from '../utility'


const initialState = {
    loading: true,
    orders: [],
    purchased: false
};


const purchaseInit = ( state, action ) => {
    return updateObject( state, { purchased: false } );
};



const orderReducer = (state = initialState, action) => {

    switch (action.type) {

        case actionType.PURCHASE_INIT:  return purchaseInit(state, action)
          
        case actionType.PURCHASE_BURGER_START:

            return {
                ...state,
                loading: true
            }



        case actionType.PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId,

            }

            return {
                ...state,
                orders: state.orders.concat(newOrder),
                loading: false,
                purchased: true


            }

        case actionType.PURCHASE_BURGER_FAIL:
            return {
                ...state,
                loading: false

            }



        //ORDER 

        case actionType.FETCH_ORDERS_START:

            return {
                ...state,
                loading: true
            }

        case actionType.FETCH_ORDERS_SUCCESS:
          
            return {
                ...state,
                orders: action.orders,
                loading: false,


            }

        case actionType.FETCH_ORDERS_FAIL:
            return {
                ...state,
                loading: false

            }


        default:
            return state;


    }
}


export default orderReducer;