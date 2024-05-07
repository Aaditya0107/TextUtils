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
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleSpacesClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces has been Removed!", "success");
    }

    const handleCopyClick = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);  
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    
  return (
    <>
    <div className="container" style={{color: props.mode === "dark" ? "white" : "#042743"}}>
    <h1 className='mt-4 mb-3'>{props.Heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" style={{backgroundColor: props.mode === "dark" ? "grey" : "white",
                  color: props.mode === "dark" ? "white" : "#042743"}} rows="8" placeholder='Enter Text Here' />
    </div> 
     {/* <div className="btn-box d-flex gap-3"> */}
        <button className="btn btn-primary my-2" style={{marginRight: "20px"}} onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary my-2" style={{marginRight: "20px"}} onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary my-2" style={{marginRight: "20px"}} onClick={handleSpacesClick}>Remove Extra Spaces</button>
        <button className="btn btn-primary my-2" style={{marginRight: "20px"}} onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
     {/* </div> */}
    </div>
    <div className="container my-3" style={{color: props.mode === "dark" ? "white" : "#042743"}}>
        <h2>Your Text Summary</h2> 
        <p className=''>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split("").length} Minutes Read</p>
        <h3>Preview</h3>
        <p className='text-break'>{text.length>0 ? text : "Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}

export default TextForm;
