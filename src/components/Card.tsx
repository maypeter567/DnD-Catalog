export type Contents = {
  title: string,
  description: string,
}

interface Props {
  content: Contents;
}

const Card = ({ content }: Props) => {
  return (
    <li className="card">
      <details>
        <summary className="card-summary">
          <h3 className="card-title">{content.title}</h3>
        </summary>
        <p className="card-description">{content.description}</p>
      </details>
    </li>
  )
}

export default Card
