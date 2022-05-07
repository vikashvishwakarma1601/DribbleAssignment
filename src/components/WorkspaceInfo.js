import { useCallback,useState } from "react";
import Input from "../sharedcomponent/Input";
import URLInput from "../sharedcomponent/URLInput";
import Button from "../sharedcomponent/Button";
import { toast } from "react-toastify";


export default function WorkspaceInfo(props) {
  const { dispatch } = props;

  const [workspace, setWorkspace] = useState("");
  const [workSpaceURL, setWorkSpaceURL] = useState("");

  const notify = (message) => toast(message);

  const handleClick = useCallback(() => {
    if (workspace) {
      dispatch({
        type: "WORKSPACE_INFO",
        payload: {
          step: 3,
          workspace,
          workSpaceURL,
        },
      });
    } else{
      notify("Please enter workspace name");
    } 
  });

  return (
    <>
      <div className="header">
        <h2>Let's set up a home for all your work</h2>
        <p className="info">You can always create another workspace later.</p>
      </div>
      <div className="wrapper">
        <Input
          label="Workspace Name"
          type="text"
          placeholder="Eden"
          value={workspace}
          setValue={setWorkspace}
        />
        <URLInput
          label="Workspace URL"
          type="text"
          disabledText="www.eden.com/"
          placeholder="Example"
          optional={true}
          value={workSpaceURL}
          setValue={setWorkSpaceURL}
        />
        <Button text="Create Workspace" onClick={handleClick} />
      </div>
    </>
  );
}
