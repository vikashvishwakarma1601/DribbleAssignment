import { useCallback, useState } from "react";
import Radio from "../sharedcomponent/Radio";
import Button from "../sharedcomponent/Button";
import { toast } from "react-toastify";

export default function WorkspaceTypeInfo(props) {
  const { dispatch } = props;
  const [workSpaceType, setWrokSpaceType] = useState("");

  const notify = (message) => toast(message);

  const handleClick = useCallback(() => {
    if (workSpaceType) {
      dispatch({
        type: "WORKSPACE_TYPE",
        payload: {
          step: 4,
          workSpaceType,
        },
      });
    }else{
      notify("Please select workspace type");
    }
  });

  return (
    <>
      <div className="header">
        <h2>How are you planning to use Eden?</h2>
        <p className="info">
          We'll streamline your setup experience accordingly.
        </p>
      </div>
      <div className="wrapper">
        <div className="radioWrapper">
          <Radio
            title="For myself"
            description="Write better. Think more clearly. Stay organised"
            icon="fa fa-user"
            name="workspaceType"
            value={"For myself"}
            setValue={setWrokSpaceType}
          />
          <Radio
            title="With my team"
            description="Wikis, docs, tasks & projects, all in one place"
            icon="fa fa-users"
            name="workspaceType"
            value={"With my team"}
            setValue={setWrokSpaceType}
          />
        </div>

        <Button text="Create Workspace" onClick={handleClick} />
      </div>
    </>
  );
}
