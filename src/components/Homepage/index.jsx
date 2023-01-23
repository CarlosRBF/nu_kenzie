import logoKenzie from "../assets/icon/nukenzie2.svg"
import { ReactComponent as Image } from "../assets/icon/image.svg"
import "./style.css"
import { ButtonPrimary } from "../Buttons"

const Homepage = ({ renderizar }) => {
  return (
    <div className="homepage">
      <div className="texts--main">
        <img className="imgHomepage" src={logoKenzie} alt="" />
        <h1 className="title-1 textMain">
          Centralize o controle das suas finanças
        </h1>
        <p className="headline infoMain">de forma rápida e segura</p>
        <ButtonPrimary callRenderize={renderizar} text={"Iniciar"} />
      </div>
      <Image className="ellipse" />
    </div>
  )
}

export default Homepage
