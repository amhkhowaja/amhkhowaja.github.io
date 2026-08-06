import SectionTitle from "./SectionTitle";

interface Props {
  email: string;
  linkedin: string;
  github: string;
  location: string;
}

function Contact({ email, linkedin, github, location }: Props) {
  return (
    <section id="contact">
      <SectionTitle title="Contact" />
      <ul>
        <li><a href={`mailto:${email}`}>{email}</a></li>
        <li><a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href={github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li>{location}</li>
      </ul>
    </section>
  );
}

export default Contact;
