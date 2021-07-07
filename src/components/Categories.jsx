import React, { useState } from 'react'

export const Categories = React.memo(({items, onClick}) => {
  const [active, setActive] = useState(0)
  console.log('rerend');
  
  const onClickCategory = (index) => {
    setActive(index)
    onClick(index)
  }

    return (
        <div className="categories">
              <ul>
                {items && items.map((item,index) => {
                  
                    return (
                        <li className={active===index?'active':''}
                            key={item+index}
                            onClick={()=> onClickCategory(index)}>
                                 {item}
                        </li>
                        )
                })}
              </ul>
            </div>
    )
})