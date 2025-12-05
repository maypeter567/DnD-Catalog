import { useState } from 'react'

import './App.css'
import SearchFairy from './components/SearchFairy'
import Tabs from './components/Tabs'
import type { TabId } from './data/sections'
import { TabsProvider } from './context/TabsContext'
import { BookmarkProvider } from './context/BookmarkContext'

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('toc')

  return (
    <BookmarkProvider>
      <TabsProvider value={{ activeTab, setActiveTab }}>
        <div className="app-shell">
          <header className="app-header">
            
            <div>
              <h1>D&amp;D Catalog</h1>
              <p className="subtitle">Flip through lore, legends, and loot.</p>
            </div>
            <SearchFairy onNavigate={setActiveTab} />
          </header>
          <main>
            <Tabs activeTab={activeTab} onSelectTab={setActiveTab} />
          </main>
        </div>
      </TabsProvider>
    </BookmarkProvider>
  )
}

export default App
