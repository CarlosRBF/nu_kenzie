import "./style.css"

const ButtonPrimary = ({ callRenderize, text }) => {
  return (
    <>
      <button onClick={callRenderize} className="button-text">
        {text}
      </button>
    </>
  )
}
const ButtonInfos = ({ text, callAction }) => {
  return (
    <>
      <button onClick={callAction} className="button-infoGrey-2 headline">
        {text}
      </button>
    </>
  )
}
const ButtonValue = ({ text }) => {
  return (
    <>
      <button className="button-value headline">{text}</button>
    </>
  )
}
export { ButtonPrimary, ButtonInfos, ButtonValue }
