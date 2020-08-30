import React  from 'react';
import BurgerIngredient from  './BurgerIngredient/BurgerIngredient' ;
import  './Burger.css' ;



const burger = (props) => {

    let transformedIngredient = Object.keys(props.ingredients).map(
        igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
               return <BurgerIngredient  key={igKey+i}   type ={igKey}/>

            }) ;
        }
    ).reduce((arr , el) => {
        return arr.concat(el) // transfor to one list
    } , [])

    console.log( transformedIngredient)

    if(transformedIngredient.length ===0){
        transformedIngredient = <p>  please add ingredients </p> ;
    }


    return (
        <div className="Burger">
            <BurgerIngredient type ="bread-top"/>
              {transformedIngredient}
            <BurgerIngredient type ="bread-bottom"/>
        </div>
    )
}



export default burger;