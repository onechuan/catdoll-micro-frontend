import "./public-path";
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

let app: any = null;

function render(props: any) {
  const { container } = props;
  app = createApp(App);

  app.mount(container ? container.querySelector("#app") : "#app");
}

import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
console.log("🚀 ~ qiankunWindow:", qiankunWindow.__POWERED_BY_QIANKUN__);

// 通过 renderWithQiankun 方法包裹主应用的渲染函数
// 同样生命周期是不变的
// bootstrap、update、mount、unmount
renderWithQiankun({
  bootstrap: () => {
    console.log("vue3app bootstrap");
    Promise.resolve();
  },
  mount: (props) => {
    console.log("vue3app mount props", props);
    render(props);
    // props.onGlobalStateChange &&
    //   props.onGlobalStateChange((state, prev) => {
    //     console.log("vue3app onGlobalStateChange", state, prev);
    //   });
    Promise.resolve();
  },
  update: () => {
    console.log("vue3app update");
    Promise.resolve();
  },
  unmount: () => {
    console.log("vue3app unmount");
    if (app) {
      app.unmount();
      app = null;
    }
    Promise.resolve();
  },
});

// 如果你现在的应用不是跑在乾坤中间
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
