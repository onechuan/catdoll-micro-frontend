import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './public-path'
import './index.css'
import App from './App'

// Define the window with qiankun properties for TypeScript
declare global {
  interface Window {
    __POWERED_BY_QIANKUN__?: boolean;
    __INJECTED_PUBLIC_PATH_BY_QIANKUN__?: string;
  }
}

let root: ReturnType<typeof createRoot> | null = null;

// Define props interface for qiankun
interface QiankunProps {
  container?: HTMLElement;
  name?: string;
  [key: string]: unknown;
}

// We don't directly use props in this function but need it for qiankun compatibility
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function render(props: QiankunProps = {}) {
  const container = document.querySelector('#root');
  if (!container) {
    console.error('Root container not found');
    return;
  }
  
  root = createRoot(container);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}

// Standalone mode
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

// Lifecycle hooks for qiankun
export async function bootstrap(): Promise<void> {
  console.log('react app bootstrap');
}

export async function mount(props: QiankunProps): Promise<void> {
  console.log('react app mount', props);
  render(props);
}

export async function unmount(): Promise<void> {
  console.log('react app unmount');
  root?.unmount();
  root = null;
}
