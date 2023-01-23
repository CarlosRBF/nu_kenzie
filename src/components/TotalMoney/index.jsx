import "./style.css"

const TotalMoney = ({ listTransactions }) => {
  return listTransactions.length > 0 ? (
    <div className="card--totalValue">
      <div className="info--AllPrice">
        <span className="title-3">Valor total:</span>
        <p className="title-3 price">
          R$:
          {listTransactions.reduce((acc, price) => {
            return Number(acc) + Number(price.value)
          }, 0)}{" "}
        </p>
      </div>

      <div>
        <p className="body">O valor se refere ao saldo</p>
      </div>
    </div>
  ) : (
    <></>
  )
}

export default TotalMoney
