import React, { useState } from 'react'
import Button from '../Button'

export const PizzaBlock = ({pizza, onClickAddPizza}) => {
   const [activeType,setActiveType]=useState(0)
   const [activeSize,setActiveSize]=useState(26)

    const typeNames=['тонкое','традиционное']
    const avaliableSizes=[26,30,40]
    function onAddPizza  ()  {
       const obj= {
        id:this.id,
        imageUrl:this.id,
        price:this.price,
        type:typeNames[activeType],
        size:avaliableSizes[activeSize]
       }
       onClickAddPizza(obj)
       
      
    }
    return (
        <div className="pizza-block">
  <img
    className="pizza-block__image"
    src={pizza.imageUrl}
    alt="Pizza"
  />
<h4 className="pizza-block__title">{pizza.name}</h4>
  <div className="pizza-block__selector">
    <ul>
        {typeNames.map((type,index) => {
            return (
                <li className={[activeType===index?'active':'',
                !pizza.types.includes(index)?'disabled':''].join('')}
                 onClick={() => setActiveType(index)}
                >
                    {type}</li>
            )
        })}
    </ul>
    <ul>
        {avaliableSizes.map((size,index) => {
           
                return (
                    <li className={[activeSize===size?'active':' ',
                    !pizza.sizes.includes(size)?'disabled':' '].join('')}
                    onClick={() => setActiveSize(size)}
                    >
                        {size} см.
                    </li>
                )
            })}
    </ul>
  </div>
  <div className="pizza-block__bottom">
    <div className="pizza-block__price">от {pizza.price} ₽</div>
    <Button
      className ='button--outline button--add'
      onClick={onAddPizza.bind(pizza)}>
    <div >
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
          fill="white"
        />
      </svg>
      <span>Добавить</span>
      <i>2</i>
    </div>
    </Button>
    
    </div>
    </div>
    )
}