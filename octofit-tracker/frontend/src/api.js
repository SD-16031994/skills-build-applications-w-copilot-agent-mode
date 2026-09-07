const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'

export const apiUrl = (resource) => `${apiBaseUrl}/api/${resource}/`

export function responseItems(payload) {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload?.results)) return payload.results
  if (Array.isArray(payload?.data)) return payload.data
  return []
}

export async function getResource(resource) {
  const response = await fetch(apiUrl(resource))
  if (!response.ok) throw new Error(`Unable to load ${resource}`)
  return responseItems(await response.json())
}