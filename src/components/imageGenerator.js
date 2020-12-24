import React, {useState} from 'react';
import './../css/components/ImageGenerator.scss';

function ImageGenerator(props) {

    const [task, setTask] = useState('');

    const searchImage = (e) => {
        e.preventDefault();
        
        if(task){
            setTask('');
        }
    }

    return (
        <>
        <form onSubmit={searchImage}>
                <input placeholder="enter task" 
                    onChange={event => 
                    setTask(event.target.value)} 
                    value={task}
                >
                </input>
                <button type="submit" className="button">Search</button>
            </form>
        </>
    );
}

export default ImageGenerator;