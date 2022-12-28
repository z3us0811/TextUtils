import React, { useState } from 'react';


export default function TextForm(props) {
    const [text,setText] = useState("Enter Text Here...");
    const handleUpClick = () => {
        // console.log('Button is clicked');
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to UpperCase', 'success');
    }

    const handleLoClick = () => {
        // console.log('Button is clicked');
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Converted to LowerCase', 'success');
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert('Text Cleared', 'success');
    }

    const handleOnClick = (event) => {
        // console.log('Handle on Click')
        setText(event.target.value)
    }

    const handleCopy = () => {
        let newText = document.getElementById('myBox');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert('Copied to Clipboard', 'success');
    }

    const handleSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" onChange={handleOnClick} style={{backgroundColor: props.mode==='dark'?'#2e3860':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="5"></textarea>
                <button className="btn btn-primary mt-2 me-2" onClick={handleUpClick}>To Uppercase</button>
                <button className="btn btn-primary mt-2 me-2" onClick={handleLoClick}>To Lowercase</button>
                <button className="btn btn-primary mt-2 me-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mt-2 me-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mt-2 me-2" onClick={handleSpace}>Remove Extra Spaces</button>
            </div>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} Characters and {text.length} words.</p>
            <p>{0.008 * text.split(" ").length} Minutes Read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:'Enter something to preview'}</p>
        </div>
        </>
    )
}
