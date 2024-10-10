import React from 'react'

const Dropdown = () => {
  return (
    <div id="dropdownBgHover" className="z-10 hidden w-48 bg-white rounded-lg shadow dark:bg-gray-700">
        <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
        </ul>
    </div>
  )
}

export default Dropdown