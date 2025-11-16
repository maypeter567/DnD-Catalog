import Card from "../components/Card"
import { defaultMonsters } from "../data/Cards"

export default function Monsters() {
    return (
        <div className="page-section">
            <h2>Monsters</h2>
            <ul className="cards-list">
                {defaultMonsters.map((item) => (
                    <Card key={item.title} content={item} />
                ))}
            </ul>
        </div>
    )
}
