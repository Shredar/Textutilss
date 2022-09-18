import React, {useState} from 'react'

 



export default function TextForm(props) {
  const handleupClick = ()=> {
    console.log("Uppercase was clicked" + text ) ;
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleClearClick = ()=> {
    let newText = " ";
    setText(newText)
  }   
      const handleOnChange = (event)=> {
      console.log("On Change");
      setText(event.target.value);
  }




  const [text, setText] = useState(' ');

return (
    <>
<div className="container" style={{color: props.mode==='dark'?'white':'#042743'}} >
        <h1>{props.heading}</h1> 
        <div className="mb-3"> 
        <textarea className=  "form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="5"></textarea>
</div> 
         <button className="btn btn-primary mx-1" onClick={handleupClick}>Convert to Uppercase</button>
         <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button> 

</div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p> {0.008 * text.split (" ").length} Minutes read </p>
        <hr2>Preview</hr2>
        <p>{text.lenght>0?text:"Enter Something in the textbox above to preview it"} </p>
      </div>
    </>
  )
}
