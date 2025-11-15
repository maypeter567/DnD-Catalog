import { defaultRaces } from "../data/Cards";

export default function Races() {
    const cards = defaultRaces.filter((item) => item).map((item, index) => (
        <li key={index} className="card">
            <details>
                <summary>
                    <h3 className="card-title">{item.test_1}</h3>
                </summary>
                <p>{item.test_2}</p>
            </details>
        </li>
    ));

    return (
        <div>
            <h2>Races Page</h2>
            <ul className="cards-list">{cards}</ul>
        </div>
    );
}
