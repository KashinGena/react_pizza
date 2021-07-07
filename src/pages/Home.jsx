import React, { useCallback } from 'react'
import { Categories } from '../components/Categories';
import { SortPopup } from '../components/SortPopup';
import { PizzaBlock } from '../components/PizzaBlock';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { setCategory } from '../redux/actions/filter';

const categoryNames = [ 'Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']
const itemsSort =['популярности','цене','алфавиту']

export const Home = () => {
  const pizzas =useSelector(state => state.pizzaReducer.items)
  const dispatch = useDispatch()
  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index))
  },[])
  
    return (
        <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories
              active={0}
              items= {categoryNames}
              onClick={onSelectCategory}
              
            />
           <SortPopup items={itemsSort} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas && pizzas.map((pizza,index) => {
                
                
                return (
                    <PizzaBlock key={pizza.index} pizza={pizza}/>
                )
            })}
      </div>
      </div>
      </div>
    )
} 