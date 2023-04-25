interface AuthorProps {
    name: string;
}

export default function Author({ name }: AuthorProps) {
    return <p className="text-lg text-left">{name}</p>;
}