import SectionTitle from "./SectionTitle"

interface Props {
    summary: string;
  }
  
  function About({ summary }: Props) {
    return (
      <section id="about">
        <SectionTitle title="About" />
        <p>{summary}</p>
      </section>
    );
  }

  export default About