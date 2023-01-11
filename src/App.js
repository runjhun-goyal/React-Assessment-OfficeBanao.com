import React from 'react'
import NavigationBar from './components/NavigationBar'
import SwitchingTabs from './components/SwitchingTabs'
import './App.css'
function App() {
  return (
    <div>
      <NavigationBar />
      <div className='maincomp'>
        <SwitchingTabs />
      </div>
    </div>
  )
}

export default App