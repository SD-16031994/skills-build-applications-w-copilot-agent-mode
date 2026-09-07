import { getResource } from '../api'
import { ResourceState } from './ResourceState'
import { useResource } from './useResource'

// Resolved endpoint: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/
export default function Teams() {
  const { loading, error, items } = useResource(getResource, 'teams')
  return <section className="view-section"><div className="section-heading"><span className="eyebrow">Find your people</span><h1>Teams</h1><p>Collective energy makes the habit stick.</p></div><ResourceState loading={loading} error={error} empty={!items.length}><div className="team-grid">{items.map((team) => <article className="team-card" key={team._id || team.name}><div className="team-mark">✦</div><h2>{team.name}</h2><p>{team.description}</p><footer><span>{team.memberUsernames?.length || 0} members</span><span>Open team →</span></footer></article>)}</div></ResourceState></section>
}