import React from 'react'
import { Categories } from '../components/Categories';
import { SortPopup } from '../components/SortPopup';
import { PizzaBlock } from '../components/PizzaBlock';


export const Home = ({pizzas}) => {
    return (
        <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories
              active={0}
              items= {[ 'Все',
                      'Мясные',
                      'Вегетарианская',
                      'Гриль',
                      'Острые',
                      'Закрытые'
                    ]}
              onClick={() => {alert(123)}}
            />
           <SortPopup items={['популярности','цене','алфавиту']} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas && pizzas.map((pizza,index) => {
                console.log(pizza);
                
                return (
                    <PizzaBlock key={pizza.index} pizza={pizza}/>
                )
            })}
      </div>
      </div>
      </div>
    )
} 