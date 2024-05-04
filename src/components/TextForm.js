import React, { useState } from 'react';

const TextForm = (props) => {

    const [text, setText] = useState("");

    const handleOnChange = (event) => {
        // console.log("On Change");  
        setText(event.target.value);
    }

    const handleUpClick = () => {
        // console.log("Upppercase was Clicked" +  text);
        let newText = text.toUpperCase(); 
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }

    const handleCopyClick = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);  
    }

    const handleExtraSpacesClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

  return (
    <>
    <div className="container">
    <h1 className='mt-4 mb-3'>{props.Heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter Text Here'></textarea>
    </div> 
    <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary my-2 mx-4" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary my-2" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary my-2 mx-4" onClick={handleCopyClick}>Copy Text</button>
    <button className="btn btn-primary my-2" onClick={handleExtraSpacesClick}>Remove Extra Spaces</button>

    </div>
    <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p className=''>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split("").length} Minutes Read</p>
        <h3>Preview</h3>
        <p className='text-break'>{text}</p>
    </div>
    </>
  );
}

export default TextForm;
