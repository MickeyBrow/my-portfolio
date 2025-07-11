import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RootNavigation from '../components/rootNavigation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootNavigation />
  </StrictMode>,
)
