import React,{useState} from 'react'
import './Components.css';

export default function Textform(props) {
  const [text, setText] = useState("");
  const handleUperCase=()=>{
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to uppercase.");
  }
  const handleLowerCase=()=>{
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to lowercase.")

  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  const handleCopy=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard.")

  }

  const handleClear=()=>{
    const newText = '';
    setText(newText);
    props.showAlert("Text cleared.");
  }
  const handleExtraSpaces=()=>{
    const newtext = text.split(/[ ]+/); //Regex
    setText(newtext.join(" "));
    props.showAlert("Extra spaces removed.")

  }
  const handleDownload=()=>{
    const element = document.createElement("a");
    const file = new Blob([text], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    element.click();
  }
  return (
      <>
    {/* textarea and heading  */}
    <div className="container">
        <h1>TextUtils - Enter text to analyze</h1>
        <textarea value={text} onChange={handleOnChange} id="textArea"></textarea>
    </div>

     {/* button under textarea  */}
     <div className="btn">
            <button className="btns" onClick={handleUperCase}>Covert to Uppercase</button>
            <button className="btns" onClick={handleLowerCase}>Covert to Lowercase</button>   
            <button className="btns" onClick={handleCopy}>Copy Text</button>   
            <button className="btns" onClick={handleClear}>Clear Text</button>   
            <button className="btns" onClick={handleExtraSpaces}>Remove Extra Spaces</button>   
            <button className="btns" onClick={handleDownload}>Download Text File</button>   
    </div>

    {/* //Preview  */}
    <div className="container2">
      <h2>Text summary</h2>
      <p>{text.split(/\s+/).filter((element)=> {return element.length !==0}).length} words and {text.length} characters.</p>
      <h4>Preview</h4>
      <p>{text}</p>
    </div>
    
    </>

  )
}
