import *  as actionsTypes from './actionTypes' ;
import axios from '../../axios-order' ;


export const PurchaseBurgerSuccess = (id , orderData) =>{
    return {
        type : actionsTypes.PURCHASE_BURGER_SUCCESS,
        orderId:id,
        orderData : orderData
    }
}



export const PurchaseBurgerFail = (error) =>{
    return {
        type : actionsTypes.PURCHASE_BURGER_FAIL,
        error:error,
    }
}

export const PurchaseBurgerStart=() => {
    return {
        type : actionsTypes.PURCHASE_BURGER_START,
    }  
}

export const PurchaseBurger = (orderData) =>{
    return  dispatch => {
        dispatch(PurchaseBurgerStart())
        axios.post('/orders.json', orderData)
        .then(res => {
            dispatch(PurchaseBurgerSuccess(res.data.name , orderData))
        })
        .catch(error => {
            dispatch(PurchaseBurgerFail(error))
         })
  
       
    }
}


export const PurchaseInit=() => {
    return {
        type : actionsTypes.PURCHASE_INIT,
    }  
}


//orders 

export const fetchOrderStart =() => {
    return {
        type : actionsTypes.FETCH_ORDERS_START,
    }  
}



export const fetchOrdersFaild =(error) => {
    return {
        type : actionsTypes.FETCH_ORDERS_FAIL,
        error : error
    }  
}



export const fetchOrderSuccess = (orders) =>{
    return {
        type : actionsTypes.FETCH_ORDERS_SUCCESS,
        orders:orders,
    }
}




export const fetchOrders = () =>{

    return  dispatch => {
        dispatch(fetchOrderStart())
        axios.get('/orders.json')
        .then(res => {
            const fetchOrders=[] ;
            for(let key in res.data){
                fetchOrders.push({
                    ...res.data[key],
                    id:key
                })
            }
            console.log(fetchOrders)
            dispatch(fetchOrderSuccess(fetchOrders))

        })
        .catch(err=> {
            dispatch(fetchOrdersFaild(err))


        })
  
       
    }



}


