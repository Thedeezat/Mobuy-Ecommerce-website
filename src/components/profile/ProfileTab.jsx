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
      className={`cursor-pointer text-sm ${extraStyle}
    hover:text-darkOrange ${
      activeTab === id ? 'text-darkOrange' : 'text-charcoal'
    }`}
      onClick={handleClick}
    >
      {children}
    </p>
  )
}
