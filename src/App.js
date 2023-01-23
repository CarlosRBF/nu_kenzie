import "./App.css"
import "./components/Style/reset.css"
import "./components/Style/style.css"
import { useState } from "react"

import Header from "./components/Header"
import Form from "./components/Form"
import TotalMoney from "./components/TotalMoney"
import List from "./components/List"

function App() {
  const [listTransactions, setListTransactions] = useState([])

  return (
    <>
      <Header inicio={"Inicio"} />
      <div className="App">
        <div>
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <TotalMoney listTransactions={listTransactions} />
        </div>

        <List
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      </div>
    </>
  )
}

export default App
