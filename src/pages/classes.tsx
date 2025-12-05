import Card from "../components/Card";
import { defaultClasses } from "../data/Cards";

export default function Classes() {
  return (
    <div className="page-section">
      <h2>Races</h2>
      <ul className="cards-list">
        {defaultClasses.map((item) => (
          <Card key={item.title} content={item} />
        ))}
      </ul>
    </div>
  );
}
