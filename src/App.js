import {createContext, useState} from 'react'

import Header from './header'
export const NavContext = createContext(null)

const App =()=>{
  const [theme, setTheme] = useState('light')
  const backgroundColor = theme === 'light'?'#f0f0f0':'black'
  const color = theme === 'light'?'black':'white'
  return(
    <NavContext.Provider value={{theme,setTheme}}>
    <div style={{backgroundColor :backgroundColor, color:color}}>
      <Header/>
      <h1>Content</h1>
      
    </div>
    </NavContext.Provider>
  )
}

export default App