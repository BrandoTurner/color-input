import { useState } from 'react';
import './App.css';




export default function App() {

  const [color, setColor] = useState("coral")
  const updateColor = (text) => { 

    if (text.target.value == ""){
      setColor(color);
    }else{
    setColor(text.target.value);
    console.log(text.target.value)
  }
}

  return (
    <div className="App">
        <h1>Color Input</h1>
        <div style={{backgroundColor: color}} className="box"/>
          <input placeholder=' Type in a color!' onChange={(color) => updateColor(color)}/>
           <a href="https://www.w3schools.com/colors/colors_names.asp">List of predefined CSS colors</a> 
      </div>
  );
  }
