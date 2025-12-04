export type Contents = {
  title: string;
  headerBlock?: string;
  description: string;
};

interface Props {
  content: Contents;
}

const Card = (props: Props) => {
  return (
    <div>
      <li className="card">
        <details>
          <summary>
            <h3 className="card-title">Example Card</h3>
          </summary>
          <p>{props.content.title}</p>
        </details>
      </li>
    </div>
  );
};

export default Card;
