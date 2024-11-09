import React from 'react'

const Javascript_project = ({onClose}) => {
  return (
    <div className="text-center pt-4 pb-4 pl-12 pr-12 rounded-2xl bg-gray-800">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-white text-xl font-bold"
      > &times;</button>
        <h2 className='text-white'><u>Project Name</u>:- Myntra Functional Clone</h2>
        <h4 className="mt-4 text-white">Technology Used:- HTML, CSS and JavaScript</h4>
        <h4 className="mt-4 text-white">Features:- Added Shopping Cart Functionality</h4>
        <button className='text-white bg-blue-500 py-2 px-2 mt-4'>Link to My Github</button>
    </div>
  )
}

export default Javascript_project
