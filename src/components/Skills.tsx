import SectionTitle from "./SectionTitle";
import './Skills.css';

interface Prop {
    skills: Record<string, string[]>;
}

function Skills({ skills }: Prop){
    return (
        <section id="skills">
            <SectionTitle title="Technical Skills" />
            {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="skills-category">
                    <h4>{category}</h4>
                    <ul className="skills-list">
                        {items.map((skill, i) => <li key={i} className="skill-tag">{skill}</li>)}
                    </ul>
                </div>
            ))}
        </section>
    );
}

export default Skills;
