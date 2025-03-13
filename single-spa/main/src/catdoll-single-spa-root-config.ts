import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

// 获取路由
const routes = constructRoutes(microfrontendLayout);

// 获取所有的子应用
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return import(/* webpackIgnore: true */ name); // 使用import动态引入项目
  },
});

// 创建布局引擎
const layoutEngine = constructLayoutEngine({ routes, applications });

// 批量注册子应用
applications.forEach(registerApplication);

// 激活布局引擎
layoutEngine.activate();

// 启动应用
start();
