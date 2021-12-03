import React, {useState, useEffect, useRef} from 'react';
import './../css/components/ImageGenerator.scss';
import ImageRender from "./imageRender";
import SearchLabels from "./searchLabels";
import * as cocoSsd from "@tensorflow-models/coco-ssd";


function ImageGenerator(props) {

    const [search, setSearch] = useState('');
    const [imgState, setimgState] = useState({isLoaded: false, img: ""});
    const [arrayImage, setArrayImage] = useState([]);
    const [model, setModel] = useState(undefined);

    const childRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "//cdnjs.cloudflare.com/ajax/libs/seedrandom/3.0.5/seedrandom.min.js";
        script.async = true;
        document.body.appendChild(script);

        console.log("load");
        cocoSsd.load().then(modelLoaded => {
        console.log("loaded");
           setModel(modelLoaded);
           console.log("finish");
        });

        return () => {
            document.body.removeChild(script);
        }
    }, []);


    const searchImage = (e) => {
        e.preventDefault();

        if(search){
            ajaxQuery();
        }
    }

    const ajaxQuery = () => {
        
        const rand = randomNumber(1,10);
        const requestOptions = {
            headers: { Authorization: "563492ad6f9170000100000131cfe086a8d94c53927c7b4ff9dd41ff" }
        };
        fetch("https://api.pexels.com/v1/search?query="+search+"&per_page=100&page="+rand, requestOptions)
        .then(response => {
            return response.json()})
        .then(image => {
                generateRandom(image.photos);
                childRef.current.childProcess();
            },
            (error) => {
                alert("Error loading the image API");
                console.log(error);
            }
        )
    }

    const randomNumber = (min, max) => {
        new Math.seedrandom('added entropy.', { entropy: true });
        const rand = Math.floor(min + Math.random() * (max - min));

        return rand;
    }

    const generateRandom = async(photos) => {

        const rand = randomNumber(1,photos.length);

        setimgState({
            isLoaded: true,
            img: photos[rand-1].src.medium,
            id: photos[rand-1].id
        });
       
        //remove id photo from array
        photos.splice(rand-1, 1);
        await setArrayImage(photos);
    }

    const clickRandomPicture = () => {
        if(arrayImage.length === 0){
            ajaxQuery();
        }
        else{
            generateRandom(arrayImage);
        }
    }

    return (
        <>
        <SearchLabels setSearch={setSearch}></SearchLabels>
        <form onSubmit={searchImage}>
            <input
                onChange={event => 
                    setSearch(event.target.value)} 
                value={search}
                >
            </input>
            <button type="submit" className="button" >Search</button>
        </form>
        <ImageRender image={imgState} onChange={clickRandomPicture} model={model} ref={childRef}></ImageRender>
        </>
    );
}

export default ImageGenerator;