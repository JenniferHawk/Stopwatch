import React, {useState} from 'react';
import DisplayComponent from './Component/DisplayComponent';
import BtnComponent from './Component/BtnComponent';


import './App.css';

function App() {
  const [time, setTime] = useState({s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const start=() =>{
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };
  
  var updatedH=time.s, updatedM=time.m, updatedS=time.h;

  const run = () => {
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    updatedS++;
    return setTime({s:updatedS, m:updatedM, h:updatedH});
  }
  const stop=() =>{
    clearInterval(interv);
    setStatus(2);
  };
  const reset=() =>{
    clearInterval(interv);
    setStatus(0);
    return setTime({s:0, m:0, h:0});
  };
  const resume = () => start();

  return (
    <div className="main-section">
      <div classname="clock-holder">
        <div classname="stopwatch">
          <DisplayComponent time={time}/>
          <BtnComponent status={status} resume={resume} reset={reset} stop={stop} start={start} />
         
          

        </div>
      </div>
      
    </div>
  );
}  

export default App;
