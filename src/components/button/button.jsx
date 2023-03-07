import React from "react";
import PropTypes from "prop-types"


const button= props =>{
    return(
        <button 
            className={`btn ${props.className}`} 
            onclick={props.onclick ? ()=> props.onclick() : null}>
            {props.children}
        </button>

    )
}

const OutlineButton=props=>{
    return(
        <button
            className={ `btn-outline ${props.className}`}
            onclick={props.onclick ? ()=> props.onclick() : null}>
            
            {props.children}

        </button>
    )
}

button.PropTypes={
    onclick: PropTypes.func
}
export default button