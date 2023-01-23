import noCard from "../assets/icon/nocard.svg"
import "./style.css"

import { ButtonInfos, ButtonPrimary } from "../Buttons"
import Card from "../Card"

const List = ({ listTransactions, setListTransactions }) => {
  const allValue = listTransactions.length === 0

  return (
    <div className="div--container">
      <div className="cards--buttons-list">
        <div className="cardList-text">
          <h4 className="title-3">Resumo Financeiro</h4>
        </div>

        <div>
          <div className="buttons--cardList">
            <ButtonPrimary text={"Todos"} />
            <ButtonInfos text={"Entradas"} />
            <ButtonInfos text={"Despesas"} />
          </div>
        </div>
      </div>

      <ul className="list--infos">
        {allValue && (
          <>
            <span className="title-2 noContent">
              Você ainda não possui lançamento
            </span>
            <img src={noCard} alt="" />
          </>
        )}
        {listTransactions.map((transaction, index) => (
          <Card
            transaction={transaction}
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            key={index}
          />
        ))}
      </ul>
    </div>
  )
}

export default List
