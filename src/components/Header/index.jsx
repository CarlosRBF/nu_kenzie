import "./style.css"
import logo from "../assets/icon/nukenzie.svg"
import { ButtonInfos } from "../Buttons"

const Header = () => {
  return (
    <header className="center-header">
      <img src={logo} alt="" />
      <ButtonInfos callAction={() => window.location.reload(true)} text={"Inicio"} />
    </header>
  )
}

export default Header
