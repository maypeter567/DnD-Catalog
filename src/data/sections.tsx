import type { ComponentType } from "react"

import type { Contents } from "../components/Card"
import Backstory from "../pages/backstory"
import Bookmarks from "../pages/bookmarks"
import Classes from "../pages/classes"
import Items from "../pages/items"
import Monsters from "../pages/monsters"
import Races from "../pages/races"
import Spells from "../pages/spells"
import TableOfContents from "../pages/toc"
import {
  defaultBackstories,
  defaultClasses,
  defaultItems,
  defaultMonsters,
  defaultRaces,
  defaultSpells,
  defaultToc,
} from "./Cards"

export type TabId =
  | "toc"
  | "bookmarks"
  | "races"
  | "classes"
  | "backstory"
  | "spells"
  | "monsters"
  | "items"

export interface SectionDefinition {
  id: TabId
  label: string
  Component: ComponentType
  entries?: Contents[]
}

export const sectionDefinitions: SectionDefinition[] = [
  {
    id: "toc",
    label: "Table of Contents",
    Component: TableOfContents,
    entries: defaultToc,
  },
  { id: "bookmarks", label: "Bookmarks", Component: Bookmarks },
  {
    id: "races",
    label: "Races",
    Component: Races,
    entries: defaultRaces,
  },
  {
    id: "classes",
    label: "Classes",
    Component: Classes,
    entries: defaultClasses,
  },
  {
    id: "backstory",
    label: "Backstory",
    Component: Backstory,
    entries: defaultBackstories,
  },
  {
    id: "spells",
    label: "Spells",
    Component: Spells,
    entries: defaultSpells,
  },
  {
    id: "monsters",
    label: "Monsters",
    Component: Monsters,
    entries: defaultMonsters,
  },
  {
    id: "items",
    label: "Items",
    Component: Items,
    entries: defaultItems,
  },
]

export const searchableSections = sectionDefinitions.filter(
  (section) => section.entries && section.entries.length,
)
