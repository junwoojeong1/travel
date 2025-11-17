import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import TravelPlannerApp from './travel-planner-react-app.jsx'  // 파일명 그대로 유지

const el = document.getElementById('root')
createRoot(el).render(
  <React.StrictMode>
    <BrowserRouter>
      <TravelPlannerApp />
    </BrowserRouter>
  </React.StrictMode>
)
