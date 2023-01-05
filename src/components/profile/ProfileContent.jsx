import React from 'react'

export default function ProfileContent({ id, activeTab, children }) {
  return activeTab === id ? <div>{children}</div> : null
}
