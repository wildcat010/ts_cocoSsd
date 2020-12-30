import React, {useState, forwardRef, useImperativeHandle } from 'react';
import './../css/components/ImageRender.scss';
import "@tensorflow/tfjs";
import DrawScene from "./DrawScene";
import { Surface } from '@progress/kendo-drawing';

const ImageRender = forwardRef((props, ref) => {
    
    const [nbrElement, setNbrElement] = useState(0);
    const [elements, setElements] = useState([]);

    const clickRandom = async(myProcess) => {
        resetPrediction();
        await props.onChange();
        setTimeout(() => {
            myProcess();
        }, 1000);
    
    }

    useImperativeHandle(ref, () => {
        return{
            childProcess: childProcess
        };
    })

    const resetPrediction = () => {
        setNbrElement(0);
        setElements([]);
    }

    const childProcess = () => {
        setTimeout(() => {
            process();
        }, 1000);
    }


    const process = () => {
         const image = document.getElementById("imageToProcess");


        props.model.detect(image.children[0]).then(function (predictions) {
            if(predictions.length === 0)
            {
                resetPrediction();
            }

            setNbrElement(predictions.length);
            const myArray = [];
            predictions.forEach(element => {
                const predict = {
                    class: element.class,
                    score: Math.round(element.score*100)
                };
                myArray.push(predict);

                //draw element
                debugger;
                const e = document.getElementById("surface");
                const surface = Surface.create(e);

                DrawScene(surface,element);
            });
            setElements(myArray);
        });
    }

    
    
    return (
        <>
        { props.image.isLoaded ?
        <div >
                <button className="button-red" onClick={() => clickRandom(process)}>Random</button>
                <br></br>
                <div className="container">
                    <div id="imageToProcess" >
                        <img
                            src={props.image.img}
                            alt="from pexel website"
                            crossorigin="anonymous"
                        />
                        <div id="surface" />
                    </div>
                    <div className="identification">
                        <h4>Identifications:</h4>
                        {nbrElement} element found:
                        <ul>
                            {elements.map((i) => 
                            (<li>class: {i.class} - {i.score}%</li>)
                            )}
                        </ul>
                    </div>
                </div>
                
        </div> 
            :null

        }    
        </>
    );
});

export default ImageRender;