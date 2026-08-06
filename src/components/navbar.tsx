import './navbar.css'

const links = [
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/experience', label: 'Experience' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
]

function Navbar() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="nav-brand">
          amh<span className="nav-brand-dot">.</span>
        </a>
        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.path} href={`#${l.path.slice(1)}`}>
              <span className="nav-verb">GET</span> {l.path}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
