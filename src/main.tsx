import { createRoot } from 'react-dom/client'
import App from './components/App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { useContext } from 'react';

createRoot(document.getElementById('root')!).render(
  <Router>
    <App />
    <h1>
      aaa
    </h1>
  </Router>
)
