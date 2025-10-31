import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className="px-3 py-1.5 m-1 bg-gray-100 hover:bg-gray-200 text-sm font-medium rounded-lg transition-colors">
        {name}
      </button>
    </div>
  )
}

export default Button
