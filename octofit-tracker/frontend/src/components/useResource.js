import { useEffect, useState } from 'react'

export function useResource(getResource, resource) {
  const [state, setState] = useState({ loading: true, error: '', items: [] })

  useEffect(() => {
    let active = true
    getResource(resource)
      .then((items) => active && setState({ loading: false, error: '', items }))
      .catch(() => active && setState({ loading: false, error: 'Could not connect to the OctoFit API.', items: [] }))
    return () => { active = false }
  }, [getResource, resource])

  return state
}