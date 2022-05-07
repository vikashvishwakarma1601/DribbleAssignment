export const initialState = {
    step: 1,
    totalStep: 4,
    firstName: "",
    displayName: "",
    workSpace: "",
    workSpaceURL: "",
    workSpaceType: "",
  };
  
export const reducer = (state, action) => {
    switch (action.type) {
      case "PERSONAL_INFO":
        return { ...state, ...action.payload };
      case "WORKSPACE_INFO":
        return { ...state, ...action.payload };
      case "WORKSPACE_TYPE":
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };