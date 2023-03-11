import { useState } from 'react'
import './App.css'
import Card from "./components/card"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav>
        <div>
          <img src="./logo.png" alt="Logo DNC" />
          <ul>
            <li className="nav__item">Food</li>
            <li className="nav__item">Variedades</li>
            <li className="nav__item">Lanches</li>
            <li className="nav__item">Pizzas</li>
            <li className="nav__item">Doces</li>
            <li className="nav__item">Promoções</li>
          </ul>
        </div>
        <div>
          <span className="nav__item">Minhas Compras</span>
          <img src="./cart.png" alt="" />
        </div>
      </nav>

      <main>
        <div className="grid">
          <Card image="./image1.png" name={"X-Burguer"}></Card>
          <Card image="./image2.png" name={"Acai com mix de frutas"}></Card>
          <Card image="./image3.png" name={"Frango"}></Card>
          <Card image="./image4.png" name={"Pastel"}></Card>
          <Card image="./image5.png" name={"Pizza"}></Card>
          <Card image="./image6.png" name={"Biscoitos"}></Card>
        </div>
      </main>

    </div>
  )
}

export default App
