import { registerApplication, start } from "single-spa";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// 渲染主应用
ReactDOM.render(<App />, document.getElementById("root"));

// 注册React子应用
registerApplication(
  "@catdoll/react-app",
  () => System.import("@catdoll/react-app"),
  (location) => location.pathname.startsWith("/react-app")
);

// 注册Vue3子应用
registerApplication(
  "@catdoll/react-app2",
  () => System.import("@catdoll/react-app2"),
  (location) => location.pathname.startsWith("/react-app2")
);

// 启动 single-spa
start();
