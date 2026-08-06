import SectionTitle from "./SectionTitle";

interface Achievement {
  title: string;
  description: string;
}

interface Props {
  achievements: Achievement[];
}

function Achievements({ achievements }: Props) {
  return (
    <section id="achievements">
      <SectionTitle title="Achievements" />
      <ul>
        {achievements.map((a, i) => (
          <li key={i}><strong>{a.title}</strong> — {a.description}</li>
        ))}
      </ul>
    </section>
  );
}

export default Achievements;
