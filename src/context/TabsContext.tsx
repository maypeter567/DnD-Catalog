import { createContext, useContext } from "react"

import type { TabId } from "../data/sections"

type TabsContextValue = {
  activeTab: TabId
  setActiveTab: (tab: TabId) => void
}

const TabsContext = createContext<TabsContextValue | undefined>(undefined)

export const TabsProvider = TabsContext.Provider

export function useTabs() {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error("useTabs must be used within a TabsProvider")
  }
  return context
}
