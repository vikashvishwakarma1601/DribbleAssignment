import React from "react";

const PersonalInfo = React.lazy(() => import("../components/PersonalInfo"));
const WorkspaceInfo = React.lazy(() => import("../components/WorkspaceInfo"));
const WorkspaceTypeInfo = React.lazy(() =>
  import("../components/WorkspaceTypeInfo")
);
const Final = React.lazy(() => import("../components/Final"));

export { PersonalInfo, WorkspaceInfo, WorkspaceTypeInfo, Final };
