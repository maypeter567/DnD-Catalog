import type { CSSProperties } from "react"

import bookImage from "../assets/background-book.png"
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
    const overlayTopPercent = 18
    const overlayBottomPercent = 9
    const overlayHeightPercent = 100 - (overlayTopPercent + overlayBottomPercent)

    return (
        <div className="book-layout">
            <div className="book-wrapper">
                <img src={bookImage} alt="Open book" className="book-image" />
                <div className="page-overlay">
                    <ActiveComponent />
                </div>
                {sectionDefinitions.map((section, index) => {
                    const isLeft = index < activeIndex
                    const slot = (index + 0.5) / sectionDefinitions.length
                    const topPercent = overlayTopPercent + slot * overlayHeightPercent
                    const baseStack = sectionDefinitions.length - index
                    const stackValue = section.id === activeTab ? 50 : baseStack
                    return (
                        <button
                            type="button"
                            key={section.id}
                            className={`tab-ribbon ${isLeft ? "left" : "right"}${section.id === activeTab ? " active" : ""}`}
                            style={{ top: `${topPercent}%`, '--stack': stackValue } as CSSProperties}
                            onClick={() => onSelectTab(section.id)}
                            aria-label={`Go to ${section.label}`}
                        >
                            <span>{section.label}</span>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
