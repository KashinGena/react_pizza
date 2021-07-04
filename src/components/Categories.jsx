import React, { useState } from 'react'

export const Categories = ({items, onClick}) => {
  const [active, setActive] = useState(0)
    return (
        <div className="categories">
              <ul>
                {items && items.map((item,index) => {
                    console.log(item)
                    return (
                        <li className={active===index?'active':''}
                            key={item+index}
                            onClick={()=> setActive(index)}>
                                 {item}
                        </li>
                        )
                })}
              </ul>
            </div>
    )
}