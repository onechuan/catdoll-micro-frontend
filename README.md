# Catdoll Micro Frontend

一个使用 single-spa、React 和 Vue 3 构建的微前端应用。

## 项目结构

- 基础应用: `single-spa/main` (使用 React)
- React 子应用: `single-spa/react-app` (使用 React + TypeScript)
- Vue 子应用: `single-spa/react-app2` (使用 Vue 3 + TypeScript)

## 前置条件

- Node.js (v14 或更高版本)
- pnpm (v6 或更高版本)

## 安装

```bash
# 安装所有应用的依赖
pnpm run install:all
```

## 开发

要在开发模式下运行应用，您需要分别启动每个应用：

```bash
# 启动所有应用（使用 concurrently）
pnpm start

# 或者分别启动各个应用
# 启动基础应用
pnpm run start:main

# 在新的终端中，启动 React 子应用
pnpm run start:react

# 在新的终端中，启动 Vue 子应用
pnpm run start:vue
```

然后打开浏览器并导航到：
- 基础应用: http://localhost:9000
- React 子应用（独立模式）: http://localhost:8080
- Vue 子应用（独立模式）: http://localhost:8081

当运行基础应用时，它将自动加载子应用。

## 构建生产版本

```bash
# 构建所有应用
pnpm run build

# 或者分别构建各个应用
# 构建基础应用
pnpm run build:main

# 构建 React 子应用
pnpm run build:react

# 构建 Vue 子应用
pnpm run build:vue
```

## 部署

构建应用后，您可以将它们部署到您喜欢的托管服务。确保更新基础应用中的导入映射，以指向已部署的子应用的正确 URL。

## 功能特点

- **基础应用**：提供导航和布局框架
- **React 子应用**：展示一个 Todo 列表应用
- **Vue 子应用**：展示一个计数器和卡片组件

## 技术栈

- **single-spa**: 微前端框架
- **React**: 用于基础应用和第一个子应用
- **Vue 3**: 用于第二个子应用
- **TypeScript**: 用于类型安全
- **Webpack**: 用于构建和打包
- **SystemJS**: 用于模块加载
