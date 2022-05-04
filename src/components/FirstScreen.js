import react from "react";
import Input from "../sharedcomponent/Input";
import Button from "../sharedcomponent/Button";

export default function FirstScreen(props){
    const {setStep} = props;
    
    return (
        <>
            <div className="header">
                <h2>Welcome! First thing first...</h2>
                <p className="info">You can always change them later.</p>
            </div>
            <div className="wrapper">
                <Input label="Full Name" type="text" placeholder="Steve Jobs"/>
                <Input label="Display Name" type="text" placeholder="Steve"/>
                <Button text="Create Workspace" onClick={()=>setStep(2)}/>
            </div>
        </>
    )
}