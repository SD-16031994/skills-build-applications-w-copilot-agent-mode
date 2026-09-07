import { getResource } from '../api'
import { ResourceState } from './ResourceState'
import { useResource } from './useResource'

// Resolved endpoint: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/
export default function Workouts() {
  const { loading, error, items } = useResource(getResource, 'workouts')
  return <section className="view-section"><div className="section-heading"><span className="eyebrow">Today’s menu</span><h1>Workouts</h1><p>Pick a focus and make it yours.</p></div><ResourceState loading={loading} error={error} empty={!items.length}><div className="workout-grid">{items.map((workout) => <article className="workout-card" key={workout._id || workout.title}><div className="workout-top"><span>{workout.focus}</span><span>{workout.durationMinutes} min</span></div><h2>{workout.title}</h2><p className="difficulty">{workout.difficulty}</p><ul>{workout.exercises?.map((exercise) => <li key={exercise}>{exercise}</li>)}</ul><button type="button" className="outline-button">Start workout <span>↗</span></button></article>)}</div></ResourceState></section>
}