import { sectionDefinitions } from "../data/sections"
import { useTabs } from "../context/TabsContext"

export default function Toc() {
    const { setActiveTab } = useTabs()
    const linkableSections = sectionDefinitions.filter(
        (section) => section.id !== "toc",
    )

    return (
        <div className="page-section">
            <h2>Table of Contents</h2>
            <p>Select any bookmark below to flip straight to that chapter.</p>
            <ul className="toc-links">
                {linkableSections.map((section) => (
                    <li key={section.id}>
                        <button type="button" onClick={() => setActiveTab(section.id)}>
                            <span>{section.label}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
