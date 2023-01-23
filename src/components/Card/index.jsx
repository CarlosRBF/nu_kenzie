import "./style.css"
import { FaTrash } from "react-icons/fa"

const Card = ({ transaction, listTransactions, setListTransactions }) => {
  let colorType
  const verificationType =
    transaction.type === "Entrada" ? (colorType = "entry") : ""

  const deletar = (description, type, value) => {
    const filterTransaction = listTransactions.filter(
      (item) =>
        item.description !== description ||
        item.type !== type ||
        item.value !== value
    )
    setListTransactions([...filterTransaction])
  }

  return (
    <>
      <li className={`infos--card ${colorType}`}>
        <div className="div--type-title">
          <h3 className="title--transaction title-3">
            {transaction.description}
          </h3>
          <span className="span--typeTransaction body">{transaction.type}</span>
        </div>
        <div className="div--button-value">
          <span className="span--valueDescription body">
            {transaction.value}
          </span>
          <button
            onClick={() =>
              deletar(
                transaction.description,
                transaction.type,
                transaction.value
              )
            }
            className="button--delete"
          >
            {" "}
            <FaTrash />
          </button>
        </div>
      </li>
    </>
  )
}

export default Card
