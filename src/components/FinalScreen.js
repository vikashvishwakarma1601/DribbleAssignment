import react from "react";
import Button from "../sharedcomponent/Button";

export default function FinalScreen() {
  return (
    <>
      <div className="textWrapper">
        <div className="checkIcon">
          <i class="fa fa-check" aria-hidden="true"></i>
        </div>
        <div className="textBox">
          <h2>Congratulations, Eren!</h2>
          <p className="info">
            You have completed onboarding, you can start using the Eden!
          </p>
          <Button text="Launch Eden" />
        </div>
      </div>
    </>
  );
}
