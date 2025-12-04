import Card from "../components/Card";
import { defaultItems } from "../data/Cards";

export default function Items() {
  return (
    <div className="page-section">
      <h2>Items</h2>
      <ul className="cards-list">
        {defaultItems.map((item) => (
          <Card key={item.title} content={item} />
        ))}
      </ul>
    </div>
  );
}
