import SectionTitle from "./SectionTitle";
import ExperienceCard from "./ExperienceCard";

interface ExperienceEntry {
    role: string;
    company: string;
    period: string;
    points: string[];
}
  
interface Props {
    entries: ExperienceEntry[];
}

function Experience( {entries} : Props) {
    return (
        <section id="experience">
            <SectionTitle title="Experience"></SectionTitle>
            {entries.map((entry, i) => (
                <ExperienceCard key={i} {...entry} />
            ))}
        </section>
    );
}

export default Experience