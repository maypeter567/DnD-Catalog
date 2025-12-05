import bookImage from "../assets/Scroll.png"
import { sectionDefinitions, type TabId } from "../data/sections"

type TabsProps = {
    activeTab: TabId
    onSelectTab: (tab: TabId) => void
}

export default function Tabs({ activeTab, onSelectTab }: TabsProps) {
    const activeIndex = Math.max(
        sectionDefinitions.findIndex((section) => section.id === activeTab),
        0,
    )

    const ActiveComponent =
        sectionDefinitions[activeIndex]?.Component ?? sectionDefinitions[0].Component

    return (
        <div className="book-layout">
            <div className="book-wrapper">
                <img src={bookImage} alt="Open book" className="book-image" />

                <div className="page-overlay">
                    <ActiveComponent />
                </div>

                <div className="tabs-right">
                    {sectionDefinitions.map((section) => (
                        <button
                            key={section.id}
                            type="button"
                            className={`tab-ribbon ${section.id === activeTab ? "active" : ""}`}
                            onClick={() => onSelectTab(section.id)}
                        >
                            {section.label}
                        </button>
                    ))}
                </div>

            </div>
        </div>
    )
}
