import { useReducer, Suspense } from "react";
import icon from "./icon.png";
import "./globalStyle.css";
import "font-awesome/css/font-awesome.min.css";
import ProgressBar from "./sharedcomponent/ProgressBar";
import Loader from "./sharedcomponent/Loader";
import { initialState, reducer } from "./reducer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  PersonalInfo,
  WorkspaceInfo,
  WorkspaceTypeInfo,
  Final,
} from "./componentIndex.js";


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const renderComponent = () => {
    let step = state.step;
    if (step == 1) return <PersonalInfo dispatch={dispatch} />;
    else if (step == 2) return <WorkspaceInfo dispatch={dispatch} />;
    else if (step == 3) return <WorkspaceTypeInfo dispatch={dispatch} />;
    else if (step == 4) return <Final dispatch={dispatch} />;
  };

  return (
    <>
      <main>
        <div className="head">
          <img clasname="logo" src={icon}></img>
          <h1>Eden</h1>
        </div>
        <ProgressBar step={state.step} totalCounter={state.totalStep} />
        <div className="container">
          <Suspense fallback={<Loader />}>{renderComponent()}</Suspense>
        </div>
      </main>
      <ToastContainer />
    </>
  );
}

export default App;
