import React, { useState, useEffect} from 'react'

function InputV(){

    const pattern = /^[+-]?\d*(?:[.,]\d*)?$/

    // Declare a new states variables=======================================
    const [input,setInput] = useState(null)    
    const [display,setDisplay] = useState(false)

    
    // Fonction getInput====================================================
    function getInput(event){
        if (pattern.test(event.target.value))
            setInput(event.target.value)
        else 
            alert("Please, you have to enter a number!!")
    }

    // Fonction playInput====================================================
    // function play(){
    //       // affectation of usestate done using functions
    //       setInterval(
    //           () => {
    //               setInput(input =>(input%60)+1)
    //           },1000
    //       ) 
    //      }  

    // function pause(){

    // }

    // Fonction resetInput====================================================
    function resetInput(){
         setInput(null)
         {let val = document.getElementById("valinput")
          val.value=""
         }
    }
    var h = Math.floor(input/ 3600)
    var min = Math.floor((input  % 3600) / 60)
    var sec = input % 60 


    
   // const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    
        function toggle() {
          setIsActive(!isActive);
        }

     useEffect(() => {
        let interval = null;
        if (isActive) {
        interval = setInterval(() => {
            setInput(document.getElementById("valinput").value++ )
        }, 1000);
        } else if (!isActive && input !== 0) {
          clearInterval(interval);
        }
         return () => clearInterval(interval);
        }, [isActive, input]);



    return (
    <div className="container">
        <div className="buttons">
        <button onClick={() => setDisplay(true)}>DISPLAY INPUT</button>

        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'PAUSE' : 'PLAY'}
        </button>
        {/* <button onClick={() => play()}>Play</button>
        <button onClick={() => pause()}>PAUSE</button> */}
        <button onClick={() => resetInput()} >RESET</button>

       
    </div>
    <input id="valinput" type="text" onChange={getInput} />

    {display ? <p>{
                   <div>
                        <h3>{String(h).padStart(2, '0')} Hours &nbsp;  &nbsp;  &nbsp; 
                        {String(min).padStart(2, '0')} Mininutes &nbsp;  &nbsp;  &nbsp; 
                        {String(sec).padStart(2, '0')} Seconds </h3>
                   </div>
                   }</p> :null}
    </div>
)
                }
export default InputV
