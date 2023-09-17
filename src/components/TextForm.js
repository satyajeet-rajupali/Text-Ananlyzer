import React, { useState } from "react";

const TextForm = (props) => {
    const [text, setText] = useState('');

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleOnClickUppercase = () => {
        setText(text.toUpperCase());
    }

    const handleOnClickLowercase = () => {
        setText(text.toLowerCase());
    }

    const handleOnClickClear = () => {
        setText('');
    }

    const handleOnClickCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleOnClickRemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const totalWords = () => {
        return text !== '' ? text.split(' ').length : 0;
    }

    const textLength = () => {
        return text.length;
    }

    const totalTime = () => {
        return 0.008 * totalWords();
    }

    return (
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#000000'}}>
            <div className="container" >
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" placeholder={"Enter your text here...."} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleOnClickUppercase} >Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleOnClickLowercase} >Convert to LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={handleOnClickClear} >Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleOnClickCopy} >Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleOnClickRemoveExtraSpaces} >Remove Extra Spaces</button>
            </div>
            <div className="container">
                <h3 className="mt-4">Your Text Summary</h3>
                <p>{totalWords()} words and {textLength()} characters</p>
                <p>{totalTime()} minutes read</p>
            </div>
            <div className="container">
                <h3>Preview</h3>
                <p>{text.length === 0 ? 'Enter your text to preview': text}</p>
            </div>
        </div>
    );
}

export default TextForm;