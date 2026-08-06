interface Props {
    title: string;
}

function SectionTitle({title}: Props) {
    return (
        <h2>{title}</h2>
    );
}

export default SectionTitle