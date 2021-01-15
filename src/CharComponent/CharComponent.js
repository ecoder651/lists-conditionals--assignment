import React from 'react'

const charComponent = (props) =>{
    const box = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
      };

    return (
        <div style = {box} onClick={props.click}>
            <p >{props.val}</p>
        </div>
    )
}

export default charComponent;