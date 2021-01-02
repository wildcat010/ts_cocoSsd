import React from 'react';
import './../css/components/SearchLabels.scss';
import Label from "./label";

function SearchLabels(props) {

    const selectLabel = (label) => {
        props.setSearch(label);
    }

    return (
        <div className="labels-area">
            <div className="labels">
            <Label text="people" selectLabel={selectLabel}></Label>
            <Label text="face" selectLabel={selectLabel}></Label>
            <Label text="animals" selectLabel={selectLabel}></Label>
            <Label text="computer" selectLabel={selectLabel}></Label>
            <Label text="dogs" selectLabel={selectLabel}></Label>
            </div>
        </div>
    );
}

export default SearchLabels;