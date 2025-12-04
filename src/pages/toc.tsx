import { defaultToc } from "../data/Cards";

export default function Toc() {
  const cards = defaultToc
    .filter((item) => item)
    .map((item, index) => (
      <li key={index} className="card">
        <details>
          <summary>
            <h3 className="card-title">{item.title}</h3>
          </summary>
          <p>{item.description}</p>
        </details>
      </li>
    ));

  return (
    <div>
      <h2>Table of Contents Page</h2>
      <ul className="cards-list">{cards}</ul>
    </div>
  );
}
