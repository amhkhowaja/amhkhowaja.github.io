import './navbar.css'

interface Props{
    onToggleSidebar: () => void;
}

function Navbar({ onToggleSidebar }: Props){
    return (
        <nav className="navbar" >
            <button onClick={onToggleSidebar} className="menu-btn">☰</button>
            <div className="nav-title">
                <span className="nav-title-heading">Aadarsh Mehdi | Experienced Software Developer </span>
                
            </div>
      </nav>
    );
}
export default Navbar