import React,{useState} from 'react'

export default function TextArea(props) {
    const [text,setText] = useState('')

    const handleUpClick = ()=> {
        console.log('handleUpClick clicked');
        
         if(text.length>0){
            setText(text.toUpperCase())
        }
        else{
           setText("First enter any character") 
        }
    }
    const handleLowClick = ()=> {
          if(text.length>0){
            setText(text.toLowerCase())
        }
        else{
           setText("First enter any character") 
        }
    }
    const handleCountClick = ()=> {
        
        if (typeof text === 'string'){
            setText(text.length)
        }
        else{
            setText('Please enter any String')
        }
    }
    const handleWordCountClick = ()=> {
        if (typeof text === 'string'){
            setText(text.split(" ").length)
        }
        else{
            setText('Please enter any String')
        }
        
    }
    const handleResetClick = ()=> {
        setText("")
    }
    const handledummyTextClick = ()=> {
        setText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum")
    }
    const handleOnChange = (event)=> {
        console.log('handleUpClick clicked');
        setText(event.target.value)
    }
    return (
        <>
        <div>
        <h1>{props.heading}</h1>
        <div class="mb-3">
        <textarea class="form-control" value={text} onChange = {handleOnChange} id="textBox" rows="6"></textarea>
        </div> 
        <button className="btn btn-primary mx-4" onClick={handleUpClick} >Upper Case</button>
        <button className="btn btn-primary mx-4" onClick={handleLowClick} >Lower Case</button>
        {/* <button className="btn btn-primary mx-4" onClick={handleCountClick} >Characters count</button>
        <button className="btn btn-primary mx-4" onClick={handleWordCountClick} >Words count</button> */}
        <button className="btn btn-primary mx-4" onClick={handledummyTextClick} >Enter Dummy Text</button>
        <button className="btn btn-primary mx-4" onClick={handleResetClick} >Clear Screen</button>
        </div>
        <div className="container my-3">
            <h3>Text Summary</h3>
            <p>{text.split(" ").length} Words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes read time</p>
            <h3>Preview</h3>
            <p>{text}</p>

        </div>
        </>
    )
}
