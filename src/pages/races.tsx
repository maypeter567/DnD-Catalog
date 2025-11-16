import Card from "../components/Card"
import { defaultRaces } from "../data/Cards"

export default function Races() {
    return (
        <div className="page-section">
            <h2>Races</h2>
            <ul className="cards-list">
                {defaultRaces.map((item) => (
                    <Card key={item.title} content={item} />
                ))}
            </ul>
        </div>
    )
}
