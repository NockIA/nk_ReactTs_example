import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { Ways } from './config/ways.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Ways />
  </React.StrictMode>,
)
