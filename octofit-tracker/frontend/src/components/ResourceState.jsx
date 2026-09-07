import * as React from 'react'

export function ResourceState({ loading, error, empty, children }) {
  if (loading) return <p className="state-message">Loading your OctoFit data...</p>
  if (error) return <p className="state-message state-error">{error}</p>
  if (empty) return <p className="state-message">No records yet.</p>
  return children
}
