import React from 'react'

export default function TabContent({ id, activeTab, children }) {
  return activeTab === id ? <div>{children}</div> : null
}
