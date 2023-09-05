import React from 'react'
import Button from './Button'

const ButtonsList = () => {
  const list = ["All", "Gaming","Songs","Live","Soccer","Cricket","Cooking","Valentines","Cricket","Cooking","Cricket"]
  return (
    <div className="flex">
      {list.map((item,index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  )
}

export default ButtonsList
