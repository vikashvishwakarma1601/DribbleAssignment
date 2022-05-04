import react from "react";
import Input from "../sharedcomponent/Input";
import URLInput from "../sharedcomponent/URLInput";
import Button from "../sharedcomponent/Button";

export default function SecondScreen(props) {
  const { setStep } = props;

  return (
    <>
      <div className="header">
        <h2>Let's set up a home for all your work</h2>
        <p className="info">You can always create another workspace later.</p>
      </div>
      <div className="wrapper">
        <Input label="Workspace Name" type="text" placeholder="Eden" />
        <URLInput
          label="Workspace URL"
          type="text"
          disabledText="www.eden.com/"
          placeholder="Example"
          optional={true}
        />
        <Button text="Create Workspace" onClick={() => setStep(3)} />
      </div>
    </>
  );
}
