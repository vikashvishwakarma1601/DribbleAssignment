import react from "react";
import Radio from "../sharedcomponent/Radio";
import Button from "../sharedcomponent/Button";

export default function ThirdScreen(props) {
  const {setStep} = props;

  return (
    <>
      <div className="header">
        <h2>How are you planning to use Eden?</h2>
        <p className="info">We'll streamline your setup experience accordingly.</p>
      </div>
      <div className="wrapper">
        <div className="radioWrapper">
          <Radio
            title="For myself"
            description="Write better. Think more clearly. Stay organised"
            icon="fa fa-user"
            name="workspaceType"
          />
          <Radio
            title="With my team"
            description="Wikis, docs, tasks & projects, all in one place"
            icon="fa fa-users"
            name="workspaceType"
          />
        </div>

        <Button text="Create Workspace" onClick={()=>setStep(4)}/>
      </div>
    </>
  );
}
