import icon from "./icon.png";
import "./App.css";
import React, { useState } from "react";
import FirstScreen from "./components/FirstScreen";
import SecondScreen from "./components/SecondScreen";
import ThirdScreen from "./components/ThirdScreen";
import FinalScreen from "./components/FinalScreen";
import "font-awesome/css/font-awesome.min.css";
import ProgressBar from "./sharedcomponent/ProgressBar";

function App() {
  const [step, setStep] = useState(1);
  const Components = {
    1 : <FirstScreen setStep={setStep}/>,
    2 : <SecondScreen setStep={setStep}/>,
    3 : <ThirdScreen setStep={setStep}/>,
    4 : <FinalScreen />,
  }

  return (
    <div className="container">
      <div className="head">
        <img clasname="logo" src={icon}></img>
        <h1>Eden</h1>
      </div>
      <ProgressBar step={step} totalStep = {4}/>
      {Components[step]}
    </div>
  );
}

export default App;
