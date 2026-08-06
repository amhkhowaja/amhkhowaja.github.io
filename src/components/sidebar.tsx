import "./sidebar.css"

function Sidebar(){
    return (
        <aside className="sidebar">
            <h2 className="sidebar-title">Sections</h2>
            <ul className="sidebar-list">
                <li className="sidebar-item"><a href="#about">About</a></li>
                <li className="sidebar-item"><a href="#skills">Skills</a></li>
                <li className="sidebar-item"><a href="#experience">Experience</a></li>
                <li className="sidebar-item"><a href="#education">Education</a></li>
                <li className="sidebar-item"><a href="#projects">Projects</a></li>
                <li className="sidebar-item"><a href="#achievements">Achievements</a></li>
                <li className="sidebar-item"><a href="#contact">Contact</a></li>
            </ul>
        </aside>
    );
}
export default Sidebar
