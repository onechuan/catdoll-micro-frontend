import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import App from './App';
import './styles.css';

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err, info, props) {
    return <div>发生错误: {err.message}</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles; 