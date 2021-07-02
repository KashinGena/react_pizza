import React from 'react'

function Button (props) {
        const className=props.type? 'button--'+ props.type : ""
        return (
            <button onClick={props.onClick} className={"button "+ className}>
                {props.children}
            </button>
        )
        
        
    
}

export default Button