export type Contents = {
  title: string;
  headerBlock?: string;
  description: string;
};

interface Props {
  content: Contents;
}

const Card = ({ content }: Props) => {
  return (
    <li className="card">
      <div className="details">
        <div className="card-summary">
          <h3 className="card-title">{content.title}</h3>
        </div>
        <p className="card-description">{content.description}</p>
      </div>
    </li>
  )
}

export default Card
