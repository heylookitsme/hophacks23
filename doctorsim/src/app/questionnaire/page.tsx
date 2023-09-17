"use client"
import { useState } from "react";

export default function Page() {
  function Answer(props:any) {
    if (counter == 0) {
        return (<div>
         <div> What would you categorize your problem as? </div>
         <div> <p> Mental </p> <p> Physical </p> <p> Both </p> <p> I'm not sure </p> </div> 
         </div>);
    } else if (counter == 1) {
        return (<div> 
            <div> Tell us about your lifestyle! </div>
        <div> <p> Diet </p> <p> Exercise </p> <p> Sleep </p> </div> 
        </div>);
    } else if (counter == 2) {
      return (<div> 
          <div> Describe whats going on that led to this visit. </div>
      <div> <p> Write here </p> </div> 
      </div>);
    } else {
      if (props.color == "poopy"){
        return (<div> 
          <div> What type of pain are you experiencing? </div>
      <div> <p> Stinging </p> <p> Stabbing </p> <p> Burning </p> <p> I'm not sure </p> </div> 
      </div>);
      }
    }
    
    
  }
  
  const [counter, setCounter] = useState(0);
  const [problem, setProblem] = useState(0);
  
  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1)
  }
  
  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    // Counter state is decremented
    setCounter(counter - 1)
  }

  const handleClick3 = () => {
    setProblem(problem + 1)
  }

    return (
    <div> 
      <Answer color ="poopy"/>
      <div className="buttons">
        <button style={{
          fontSize: '60%',
          position: 'relative',
          top: '20vh',
          marginRight: '5px',
          color: 'white',
        }}
          onClick={handleClick1}>Next</button>
        <button style={{
          fontSize: '60%',
          position: 'relative',
          top: '20vh',
          marginLeft: '5px',
          color: 'white',
        }}
          onClick={handleClick2}>Back</button>
        <button style={{
          fontSize: '60%',
          position: 'relative',
          top: '1vh',
          marginRight: '5px',
          color: 'white',
        }}
          onClick={handleClick1}>Mental</button>

      </div>

      
      
      {/* <Answer life ="death"/> */}
    </div>
    );
  }