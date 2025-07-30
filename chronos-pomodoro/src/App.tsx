import { TaskContextProvider } from './contexts/TaskContextProvider'

import Home from './pages/Home'

import './style/theme.css'
import './style/global.css'


export default function App() 
{
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  )
}