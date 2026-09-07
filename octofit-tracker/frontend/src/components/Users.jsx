import { getResource } from '../api'
import { ResourceState } from './ResourceState'
import { useResource } from './useResource'

// Resolved endpoint: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/
export default function Users() {
  const { loading, error, items } = useResource(getResource, 'users')

  return (
    <section className="view-section">
      <div className="section-heading"><span className="eyebrow">Community</span><h1>Members</h1><p>See who is showing up and building momentum.</p></div>
      <ResourceState loading={loading} error={error} empty={!items.length}>
        <div className="member-grid">{items.map((user) => <article className="member-card" key={user._id || user.username}><div className="avatar">{user.displayName?.slice(0, 1) || '?'}</div><div><h2>{user.displayName}</h2><p>@{user.username}</p></div><strong>{user.points ?? 0}<small> pts</small></strong></article>)}</div>
      </ResourceState>
    </section>
  )
}