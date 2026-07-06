import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DynamicListTodos } from './DynamicListTodos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RenderingListOfObject/>
    <Usercard/>
    <DynamicListTodos/>
  </StrictMode>,
)
