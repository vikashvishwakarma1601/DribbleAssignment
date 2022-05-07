import { useState } from "react";
import Input from "../sharedcomponent/Input";
import Button from "../sharedcomponent/Button";
import { toast } from "react-toastify";

export default function PersonalInfo(props) {
  const { dispatch } = props;

  const [firstName, setFirstName] = useState("");
  const [displayName, setDisplayName] = useState("");

  const notify = (message) => toast(message);

  const handleClick = () => {
    if (firstName && displayName) {
      dispatch({
        type: "PERSONAL_INFO",
        payload: {
          step: 2,
          firstName,
          displayName,
        },
      });
    } else if (!firstName) {
      notify("Please enter first name");
    } else {
      notify("Please enter display name");
    }
  };

  return (
    <>
      <div className="header">
        <h2>Welcome! First thing first...</h2>
        <p className="info">You can always change them later.</p>
      </div>
      <div className="wrapper">
        <Input
          label="Full Name"
          type="text"
          placeholder="Steve Jobs"
          value={firstName}
          setValue={setFirstName}
        />
        <Input
          label="Display Name"
          type="text"
          placeholder="Steve"
          value={displayName}
          setValue={setDisplayName}
        />
        <Button text="Create Workspace" onClick={handleClick} />
      </div>
    </>
  );
}
