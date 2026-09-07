import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities'
import Leaderboard from './components/Leaderboard'
import Teams from './components/Teams'
import Users from './components/Users'
import Workouts from './components/Workouts'
import './App.css'

const navigation = [
  { to: '/activities', label: 'Activities', icon: '↗' },
  { to: '/leaderboard', label: 'Leaderboard', icon: '№' },
  { to: '/teams', label: 'Teams', icon: '✦' },
  { to: '/users', label: 'Members', icon: '◌' },
  { to: '/workouts', label: 'Workouts', icon: '⊙' },
]

function AppShell() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand"><img src="/octofitapp-small.png" alt="OctoFit" /><span>OctoFit<small>TRACKER</small></span></div>
        <div className="sidebar-rule" />
        <p className="nav-label">Explore</p>
        <nav aria-label="Primary navigation">{navigation.map((item) => <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} key={item.to} to={item.to}><span>{item.icon}</span>{item.label}</NavLink>)}</nav>
        <div className="sidebar-footer"><span className="status-dot" />API connected<div className="api-caption">Live activity sync</div></div>
      </aside>
      <main className="main-content"><header className="topbar"><span className="topbar-kicker">OCTOFIT / 2026</span><span className="user-chip"><span className="mini-avatar">A</span> Alex Morgan</span></header><Routes><Route path="/" element={<Navigate to="/activities" replace />} /><Route path="/activities" element={<Activities />} /><Route path="/leaderboard" element={<Leaderboard />} /><Route path="/teams" element={<Teams />} /><Route path="/users" element={<Users />} /><Route path="/workouts" element={<Workouts />} /></Routes></main>
    </div>
  )
}

export default AppShell
