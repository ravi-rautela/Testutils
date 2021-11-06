import React, { useState } from 'react'


export default function Form(props) {
    // Here we Are creating about hooks{useState} in React.
    const [text, setText] = useState("");
    const handleUppercase = () => {
        // console.log("You click on upperCase Button");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowercase = () => {
        // console.log("You click on upperCase Button");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleCleartext = () => {
        // console.log("You click on upperCase Button");
        let newText = '';
        setText(newText);
    }
    const handleOnChange = (event) => {
        // console.log("ON change");
        setText(event.target.value);
    }

    const handleCopy = () => {
        let text = document.getElementById('text-area')
        text.select();  // For select the text use select() function.
        navigator.clipboard.writeText(text.value);
    }
    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <h2>{props.heading}</h2>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="text-area" placeholder="Enter Text Here" rows="5"></textarea>
                    <div className="btn btn-primary mt-3 mx-1" onClick={handleUppercase}>Convert To Uppercase</div>
                    <div className="btn btn-primary mt-3 mx-1" onClick={handleLowercase}>Convert To LowerCase</div>
                    <div className="btn btn-primary mt-3 mx-1" onClick={handleCleartext}>Clear Text</div>
                    <div className="btn btn-primary mt-3 mx-1" onClick={handleCopy}>Copy Text</div>
                </div>
            </div>
            <div className="container">
                <h2>Text Summery</h2>
                <p>{(text.split(" ").length) - 1} word and {text.length} character</p>
                <p>{0.008 * text.split(" ").length}Minuts read</p>
                <h2>Priview</h2>
                <p>{text}</p>
            </div>
        </>
    )

}
