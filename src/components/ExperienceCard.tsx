import './ExperienceCard.css';

interface Props {
    role: string;
    company: string;
    period: string;
    points: string[];
}

function ExperienceCard( {role, company, period, points}: Props){
    return (
        <div className="experience-card">
            <h3>{role}</h3>
            <p>{company} | {period}</p>
            <ul>
                {points.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
        </div>
    );
}
export default ExperienceCard;
