import { initGlobalState, registerMicroApps, start } from "qiankun";

registerMicroApps([
  {
    name: "qiankun-react", // app name registered
    entry: "//localhost:8080",
    container: "#root",
    activeRule: "/qiankun-react",
    loader: (loading) => {
      console.log("loading", loading);
    },
  },
  {
    name: "qiankun-vue3",
    entry: "//localhost:8081",
    container: "#root",
    activeRule: "/qiankun-vue3",
    loader: (loading) => {
      console.log("loading", loading);
    },
  },
]);

const { onGlobalStateChange, setGlobalState, offGlobalStateChange } =
  initGlobalState({
    user: "catdoll-admin",
  });

onGlobalStateChange((value, prev) =>
  console.log(`[onGlobalStateChange - ${value.user}] prev: ${prev.user}`)
);

start();