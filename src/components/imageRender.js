import React from 'react';
import './../css/components/ImageRender.scss';

function ImageRender(props) {

    return (
        <>
        { props.image.isLoaded ?
        <div>
                <button className="button-red" onClick={props.onChange}>Random</button>
                <br></br>
                <img
                    src={props.image.img}
                    alt="from pexel website"
                />
            </div> 
            :null
        }    
        </>
    );
}

export default ImageRender;