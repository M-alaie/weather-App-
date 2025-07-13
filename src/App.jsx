import Header from "./components/Header"
import { Main } from "./components/Main"
import "bootstrap-icons/font/bootstrap-icons.scss"
import "./assets/style/components/App.scss"
import ThemeContext from "./context/themeContext"
import { useContext } from "react"

const App=()=>{


  const {dark}= useContext(ThemeContext)
  return(
   <div className={`App-${dark ? 'dark' : 'light'}`}>
   <Header />
   <Main />
   </div>
  )
  
}

export default App
