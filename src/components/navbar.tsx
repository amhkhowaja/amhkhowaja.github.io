import './navbar.css'

const links = [
  { path: '/about', label: 'About', anchor: true },
  { path: '/skills', label: 'Skills', anchor: true },
  { path: '/experience', label: 'Experience', anchor: true },
  { path: '/projects', label: 'Projects', anchor: true },
  { path: '/contact', label: 'Contact', anchor: true },
]

function Navbar() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="/" className="nav-brand">
          amh<span className="nav-brand-dot">.</span>
        </a>
        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.path} href={l.anchor ? `#${l.path.slice(1)}` : l.path}>
              <span className="nav-verb">GET</span> {l.path}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
