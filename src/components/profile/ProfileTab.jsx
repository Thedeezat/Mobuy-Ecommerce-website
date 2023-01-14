import React from 'react'

export default function ProfileTab({
  extraStyle,
  children,
  id,
  activeTab,
  setActiveTab,
}) {
  const handleClick = () => {
    setActiveTab(id)
  }
  return (
    <p
      className={`2xl:text-base lg:text-sm cursor-pointer text-xs ${extraStyle}
    hover:text-darkOrange ${
      activeTab === id ? 'text-darkOrange' : 'text-charcoal'
    }`}
      onClick={handleClick}
    >
      {children}
    </p>
  )
}
