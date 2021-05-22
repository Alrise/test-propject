import React, { useState } from 'react';
import Header from "./components/header/Header";
import './App.css';

const goodList= [
        {
        name: "Galaxy S5",
        price: 10000,
        brand: 'Samsung'
        },
        {
        name: "Iphone X",
        price: 1000000,
        brand: "Apple",
        },
        {
        name: "Honor 7A",
        price: 10000,
        brand: "Huawey"
        },
        {
        name:"Xaomi pro 7",
        price: 18000,
        brand:"Xaomi"
        },
        {
        name:"Samsung A70",
        price: 35000,
        brand:"Samsung"
        },
        {
        name:"Nokia Xperia",
        price: 35000,
        brand:"Nokia"
        },
         {
        name: "Samsung 12",
        price: 5000,
        brand: "Samsung"
        },
        {
            name: "Lopata",
            price: 80000,
            brand: "Skolkovo"
        }
        ]

function App() {
    const [inputValue, setInput] = useState ("2");
    const [goods, setGoods] = useState ([]);

    const onSearchItems = (e) => {
        setInput(e.target.value)
    };

    return (

    <div className="App">
        <header className={"header"}>
            <p>Le PAPION</p>
            <input
            className="search-field"
            type ="text"
            value = {inputValue}
            onChange={onSearchItems}/>
        </header>


            <main className={"main-wrapper"}>
                {
                    goodList.map((item) => (
                        <div className={"item-blocks"}>
                            <p className="item-name">{item.name}</p>
                            <p className="item-name2">{item.brand}</p>
                            <p className="item-name2">{item.price}</p>
                        </div>))
                }
            

                <div className="App">



                <main className={"main-wrapper"}>

                </main>
                </div>
    </main>
    </div>
  );
}

export default App;