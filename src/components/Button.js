import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className="px-6 py-2.5 m-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out hover:from-purple-600 hover:to-pink-600">
        {name}
      </button>
    </div>
  )
}

export default Button
