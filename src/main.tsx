import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { OpportunityTracker } from './OpportunityTracker';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OpportunityTracker />
  </StrictMode>,
)
