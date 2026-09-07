import { getResource } from '../api'
import { ResourceState } from './ResourceState'
import { useResource } from './useResource'

// Resolved endpoint: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/
export default function Activities() {
  const { loading, error, items } = useResource(getResource, 'activities')
  return <section className="view-section"><div className="section-heading"><span className="eyebrow">Movement log</span><h1>Activities</h1><p>Every session adds a little more momentum.</p></div><ResourceState loading={loading} error={error} empty={!items.length}><div className="activity-list">{items.map((activity) => <article className="activity-row" key={activity._id || `${activity.username}-${activity.completedAt}`}><div className="activity-icon">↗</div><div><h2>{activity.activityType}</h2><p>{activity.username} · {new Date(activity.completedAt).toLocaleDateString()}</p></div><span>{activity.durationMinutes} min</span><strong>+{activity.points}</strong></article>)}</div></ResourceState></section>
}