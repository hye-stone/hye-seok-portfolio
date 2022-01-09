import "./toggle.css"
import Sun from "../../img/sun-2.png";
import Moon from "../../img/moon-1.png";
import { useContext } from "react"
import { ThemeContext } from "../../context"

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" })
  }
  return (
    <div className="t" onClick={handleClick} style={{ backgroundColor: theme.state.darkMode ? "#333" : "white" }}>
      <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
      <div className="t-button" style={{ backgroundColor: theme.state.darkMode ? "#eee" : "#222", left: theme.state.darkMode ? 5 : 30 }}></div>
    </div>
  )
}
export default Toggle
