import "./style.css"
import { ButtonPrimary } from "../Buttons"
import { useState } from "react"

const Form = ({ listTransactions, setListTransactions }) => {
  const [description, setDescription] = useState("")
  const [entry, setEntry] = useState("Entrada")
  const [value, setValue] = useState(0)

  const Informations = () => {
    if (value < 1) {
      return undefined
    }

    if (entry === "Despesa") {
      const valueNeg = parseFloat(value * -1)

      const list = { description: description, type: entry, value: valueNeg }
      setListTransactions([...listTransactions, list])

      setDescription("")
      setEntry("Entrada")
      setValue(0)
    } else {
      setListTransactions([
        ...listTransactions,
        { description: description, type: entry, value: parseFloat(value) },
      ])
      setDescription("")
      setEntry("Entrada")
      setValue(0)
    }
  }

  return (
    <form
      onSubmit={(event) => Informations(event.preventDefault())}
      className="form--description"
    >
      <span className="headline">Descrição</span>
      <input
        onChange={(event) => setDescription(event.target.value)}
        className="input--value"
        type="text"
        placeholder="Digite aqui sua descrição"
        value={description}
        required
      />
      <p className="body">Ex: Compra de roupas</p>
      <div className="div--valuesTypes">
        <label className="title-4">
          Valor
          <input
            onChange={(event) => setValue(event.target.value)}
            className="input--descriptionValue"
            type="number"
            placeholder="R$: 0,00"
            value={value}
            required
          />
        </label>
        <label className="title-4">
          Tipo de valor
          <select
            onChange={(event) => setEntry(event.target.value)}
            className="select--entryExit"
            name=""
            id=""
            value={entry}
          >
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>
        </label>
      </div>
      <ButtonPrimary text={"Inserir Valor"} />
    </form>
  )
}

export default Form
