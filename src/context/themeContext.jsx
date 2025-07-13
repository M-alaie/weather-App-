import { createContext, useEffect, useState } from "react"
const ThemeContext = createContext()

const THEME_KEY = "theme"
const ThemeContextCpmponents = ({ children }) => {

    const [dark, setDark] = useState(true)
      
        const saveThemeStorage=(theme)=>{
            localStorage.setItem(THEME_KEY,JSON.stringify(theme))
        }


    useEffect(() => {
        const savedTheme = JSON.parse(localStorage.getItem(THEME_KEY));
        if (savedTheme !== null) {
            setDark(savedTheme)
            return
        }

        const IsSystemDark = window.matchMedia(`(prefers-color-schema:dark)`).matches
        setDark(IsSystemDark===dark)

        console.log(IsSystemDark);
      

    },[])


    return (
        <ThemeContext.Provider value={{ dark, setDark,saveThemeStorage }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContextCpmponents }

export default  ThemeContext  
