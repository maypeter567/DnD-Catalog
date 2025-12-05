import Card from "../components/Card";
import { defaultBackstories } from "../data/Cards";

export default function Backstories() {
  return (
    <div className="page-section">
      <h2>Races</h2>
      <ul className="cards-list">
        {defaultBackstories.map((item) => (
          <Card key={item.title} content={item} />
        ))}
      </ul>
    </div>
  );
}
