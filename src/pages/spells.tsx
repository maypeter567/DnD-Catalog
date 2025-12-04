import { defaultSpells } from "../data/Cards";

export default function Spells() {
  const cards = defaultSpells
    .filter((item) => item)
    .map((item, index) => (
      <li key={index} className="card">
        <details>
          <summary>
            <h3 className="card-title">{item.title}</h3>
          </summary>
          <p>{item.headerBlock}</p>
          <p>{item.description}</p>
        </details>
      </li>
    ));

  return (
    <div>
      <h2>Spells Page</h2>
      <ul className="cards-list">{cards}</ul>
    </div>
  );
}
