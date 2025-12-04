import Card from "../components/Card"
import { defaultSpells } from "../data/Cards"

export default function Spells() {
    return (
        <div className="page-section">
            <h2>Spells</h2>
            <ul className="cards-list">
                {defaultSpells.map((item) => (
                    <Card key={item.title} content={item} />
                ))}
            </ul>
        </div>
    )
}
