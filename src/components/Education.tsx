import SectionTitle from "./SectionTitle";

interface Props {
  education: string;
}

function Education({ education }: Props) {
  return (
    <section id="education">
      <SectionTitle title="Education" />
      <p>{education}</p>
    </section>
  );
}

export default Education;
