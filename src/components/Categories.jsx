import React from 'react'

export const Categories = ({items}) => {
    return (
        <div className="categories">
              <ul>
                {items.map((item,index) => {
                    console.log(item)
                    return (
                        <li key={item+index}>{item}</li>
                        )
                })}
              </ul>
            </div>
    )
}