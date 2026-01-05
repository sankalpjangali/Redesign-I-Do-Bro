import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from './components/ErrorBoundary.tsx'
import './index.css'
import App from './App.tsx'
// import 'aos/dist/aos.css';
// import AOS from 'aos';
// AOS.init();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
      
    </ErrorBoundary>
  </StrictMode>,
)
