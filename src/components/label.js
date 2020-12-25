import React from 'react';
import './../css/components/Label.scss';



function Label(props) {

    return (
        <>
        <span 
            className="label"
            onClick={() => props.selectLabel(props.text)}
        >{props.text}</span>
        </>
    );
}

export default Label;