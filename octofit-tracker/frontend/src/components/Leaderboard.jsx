import { getResource } from '../api'
import { ResourceState } from './ResourceState'
import { useResource } from './useResource'

// Resolved endpoint: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/
export default function Leaderboard() {
  const { loading, error, items } = useResource(getResource, 'leaderboard')
  return <section className="view-section"><div className="section-heading"><span className="eyebrow">Friendly competition</span><h1>Leaderboard</h1><p>Small wins, shared openly.</p></div><ResourceState loading={loading} error={error} empty={!items.length}><div className="leaderboard">{items.map((entry) => <article className={`rank-row rank-${entry.rank}`} key={entry._id || entry.username}><span className="rank-number">{String(entry.rank).padStart(2, '0')}</span><div className="rank-bar"><h2>@{entry.username}</h2><div><span style={{ width: `${Math.min(100, (entry.points / (items[0]?.points || 1)) * 100)}%` }} /></div></div><strong>{entry.points}<small> pts</small></strong></article>)}</div></ResourceState></section>
}