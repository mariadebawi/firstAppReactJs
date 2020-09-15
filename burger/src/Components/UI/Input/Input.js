import React, { Component } from 'react';

import './Input.css';

const input = (props) => {
    let Inputelement = null;
    const inputClasses = ["InputElement" ] ;

    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push('Invalid')
    }

    switch (props.elementType) {
        case ('input'):
            Inputelement =
                <input
                   className={inputClasses.join(' ')}  {...props.elementConfig} value={props.value}  onChange={props.changed} />
                ; break;
        case ('textarea'):
            Inputelement =
                <textarea
                   className={inputClasses.join(' ')}   {...props.elementConfig} value={props.value}   onChange={props.changed} />
                ; break;

                case ( 'select' ):
                    Inputelement = (
                        <select
                          className={inputClasses.join(' ')}
                            value={props.value}
                            onChange={props.changed}>
                            {props.elementConfig.options.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.displayValue}
                                </option>
                            ))}
                        </select>
                    );
                    break;
                default:
                    Inputelement = <input
                       className={inputClasses.join(' ')}
                        {...props.elementConfig}
                        value={props.value}  onChange={props.changed}
                         />;
    }


    return (
        <div className="Input" >

            <label className="Label" >{props.label}</label>

            {Inputelement}

        </div>

    )

}



export default input;