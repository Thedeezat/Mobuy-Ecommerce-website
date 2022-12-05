import React from 'react'

export default function TabItem({
  icon,
  product,
  id,
  activeTab,
  setActiveTab,
}) {
  const handleClick = () => {
    setActiveTab(id)
  }
  return (
    <div
      onClick={handleClick}
      className={`w-7.1 h-7.1 bg-transparent rounded-3xl text-sm
        border cursor-pointer border-stone-400 ${
          activeTab === id ? 'border-darkYellow' : ''
        }
        flex flex-col text-center justify-center items-center
        px-2 py-5 text-black-200 hover:border-darkYellow`}
    >
      {' '}
      {icon}
      <h4> {product} </h4>
    </div>
  )
}
