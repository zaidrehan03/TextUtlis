import React, { useState } from 'react'
export default function TextForm(props) {

    const handleUpclicked = () => {

        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowclicked = () => {

        let newText = text.toLowerCase();
        setText(newText)
    }


    const handleCopy = () => {
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);

    }

    const hanleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }


    const handleClearclicked = () => {

        let newText = '';
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleReplace = () => {
        let replace = prompt("Which word You Want To Replace?");
        let replaceWith = prompt("Replace With?");
        let newText = text.replaceAll(replace, replaceWith);
        setText(newText)
    }

    const [text, setText] = useState('');

    return (
        <div>

            <div className="container"  style={{ color: props.mode==='dark'?'rgb(212, 238, 238)':'#042743'}} >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ border: "dashed" , backgroundColor: props.mode==='dark'?'grey':'rgb(212, 238, 238)' , color: props.mode==='dark'?'rgb(212, 238, 238)':'#042743' }}  id="mybox" value={text} onChange={handleOnChange} rows="6"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpclicked}>Convert to Uppercase</button>

                <button className="btn btn-warning mx-2" onClick={handleLowclicked}>Convert to Lowercase</button>

                <button className="btn btn-success mx-2" onClick={handleCopy}>Copy Text</button>

                <button className="btn btn-danger mx-2" onClick={hanleExtraSpace}>Remove Extra Spaces</button>

                <button className="btn btn-info mx-3" onClick={handleReplace}>Replace Text</button>

                <button className="btn btn-secondary mx-2" onClick={handleClearclicked}>Clear Text</button>
            </div>
            <div className='container my-3' style={{ color: props.mode==='dark'?'white':'#042743'}} >
                <center>
                    <br />
                    <br />
                    <h2 style={{ color: props.mode==='dark'?'lightblue':'#042743'}}>YOUR TEXT SUMMARY</h2>
                    <b>
                        <p>{text.trim().length} Characters</p>
                        <p>{text.replace(/\n/g, " ").split(' ').filter(value => value != "").length} Words</p>
                        <p>{0.008 * text.split(" ").length} Minutes for reading</p>
                    </b>
                    <br />
                    <h2 style={{ color: props.mode==='dark'?'lightblue':'#042743' }}>PREVIEW</h2>
                    <textarea style={{ border: "double", backgroundColor: props.mode==='dark'?'grey':'rgb(212, 238, 238)' , color: props.mode==='dark'?'rgb(212, 238, 238)':'#042743' }} className="form-control" id="mybox" value={text} onChange={handleOnChange} rows="3"> <p>{text}</p> </textarea>
                </center>
            </div>

        </div>
    )
}