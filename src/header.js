import { useContext } from "react"
import { NavContext } from "./App"

const Header = () => {
    const {theme,setTheme} = useContext(NavContext)
    const changeTheme =()=>{
        if (theme === "light"){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }
    return(
        <div>
            <button onClick={changeTheme}>Change Theme</button>
        </div>
    )
}

export default Header