import React, { useCallback } from 'react'
import { Categories } from '../components/Categories';
import { SortPopup } from '../components/SortPopup';
import { PizzaBlock } from '../components/PizzaBlock';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { setCategory, setOrderBy } from '../redux/actions/filter';
import {filterPizzas} from '../redux/actions/pizza'
import {addPizzaToCart} from '../redux/actions/cart'


const categoryNames = [ 'Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']
const itemsSort =[
  {name:'популярности',type:'popular'},
  {name:'цене', type:'price'},
  {name:'алфавиту', type:'alphabet'}]

export const Home = () => {
  const pizzas =useSelector(state => state.pizzaReducer.filteredItems)
  const orderBy = useSelector(state => state.filterReducer.orderBy)
  const category = useSelector(state => state.filterReducer.category)
  const dispatch = useDispatch()
  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index))
  },[])

  const onSelectOrderBy = useCallback((type) => {
    dispatch(setOrderBy(type))
  },[])

  React.useEffect(() => {
    if (pizzas.length!==0)
    dispatch(filterPizzas(category,orderBy))
    
  },[category,orderBy])
  
  const onAddPizza = useCallback((pizza) => {
     dispatch(addPizzaToCart(pizza))
    console.log(pizza)
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
           <SortPopup items={itemsSort} activeSort={orderBy} onSelectOrderBy={onSelectOrderBy} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas && pizzas.map((pizza,index) => {
                return (
                    <PizzaBlock key={pizza.index} pizza={pizza} onClickAddPizza={onAddPizza}/>
                )
            })}
      </div>
      </div>
      </div>
    )
} 