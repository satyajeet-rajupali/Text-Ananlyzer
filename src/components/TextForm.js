import React, { useState } from "react";

const TextForm = (props) => {
    const [text, setText] = useState('');

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleOnClickUppercase = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase.", "success");
    }

    const handleOnClickLowercase = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase.", "success");
    }

    const handleOnClickClear = () => {
        setText('');
        props.showAlert("Cleared text", "success");
    }

    const handleOnClickCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard.", "success");
    }

    const handleOnClickRemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces.", "success");
    }

    const totalWords = () => {
        return text !== '' ? text.trim().split(/\s+/).length : 0;
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
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleOnClickUppercase} >Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleOnClickLowercase} >Convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleOnClickClear} >Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleOnClickCopy} >Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleOnClickRemoveExtraSpaces} >Remove Extra Spaces</button>
            </div>
            <div className="container">
                <h3 className="mt-4">Your Text Summary</h3>
                <p>{totalWords()} words and {textLength()} characters</p>
                <p>{totalTime()} minutes read</p>
            </div>
            <div className="container">
                <h3>Preview</h3>
                <p>{text.length === 0 ? 'Text-Analyzer: Convert to Uppercase, Convert to Lowercase, Clear Text, Copy Text & Remove Extra Spaces.': text}</p>
            </div>
        </div>
    );
}

export default TextForm;