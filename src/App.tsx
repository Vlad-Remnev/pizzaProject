import React from 'react';
import './scss/app.scss';
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Sort from "./components/Sort/Sort";
import PizzaBlock from "./components/PizzaBlock/PizzaBlock";
import pizzas from './assets/pizza.json'

function App() {
    console.log(pizzas)
  return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {pizzas.map(pizza => (
                    <PizzaBlock key={pizza.id}
                                // title={pizza.title}
                                // price={pizza.price}
                                // imageUrl={pizza.imageUrl}
                                // sizes={pizza.sizes}
                                // types={pizza.types}
                                {...pizza}
                    />
                ))}
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
