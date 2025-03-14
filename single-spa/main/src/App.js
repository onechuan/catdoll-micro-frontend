import React from "react";
import "./styles.css";

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Catdoll 微前端应用</h1>
        <nav className="nav">
          <ul>
            <li>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, "", "/");
                }}
              >
                首页
              </a>
            </li>
            <li>
              <a
                href="/react-app"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, "", "/react-app");
                }}
              >
                React 应用
              </a>
            </li>
            <li>
              <a
                href="/react-app2"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, "", "/react-app2");
                }}
              >
                React应用2
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main id="content" className="content">
        {window.location.pathname === "/" && (
          <div className="home-content">
            <h2>欢迎来到 Catdoll 微前端项目</h2>
            <p>这是一个使用 single-spa 构建的微前端应用，包含 React 子应用。</p>
            <p>点击上方导航可以访问不同的子应用。</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
