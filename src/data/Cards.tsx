import type { Contents } from "../components/Card";

// Generic Contents shape for catalog entries; headerBlock can hold meta like spell components.


export const defaultBackstories: Contents[] = [
  {
    title: "Noble",
    description: "You come from a wealthy family with a noble title.",
  },
  {
    title: "Soldier",
    description: "You have served in a military organization.",
  },
];

export const defaultClasses: Contents[] = [
  {
    title: "Barbarian",
    description: "The man, the myth, the rage.",
  },
  {
    title: "Bard",
    description: "The musical spellcaster.",
  },
];

export const defaultItems: Contents[] = [
  {
    title: "Sword",
    description: "A sharp blade for melee combat.",
  },
  {
    title: "Shield",
    description: "Provides protection against attacks.",
  },
];

export const defaultMonsters: Contents[] = [
  {
    title: "Goblin",
    description: "A small, green humanoid creature known for its cunning.",
  },
  {
    title: "Dragon",
    description: "A massive, fire-breathing reptile with wings.",
  },
];

export const defaultRaces: Contents[] = [
  {
    title: "Elf",
    description: "Graceful beings with a deep connection to nature.",
  },
  {
    title: "Dwarf",
    description: "Stout and sturdy, known for their craftsmanship.",
  },
];

export const defaultSpells: Contents[] = [
  {
    title: "Fireball\n3rd level evocation",
    headerBlock:
      "Casting time: 1 action\nRange: 150 feet\nComponents: V, S, M (a tiny ball of bat guano and sulfur)\nDuration: Instantaneous\nClasses: Sorcerer, Wizard",
    description: "A ball of fire that explodes upon impact, dealing damage.",
  },
  {
    title: "Healing Word",
    description: "A spell that heals a creature within range.",
  },
];

export const defaultToc: Contents[] = [
  {
    title: "Introduction",
    description: "Overview of the D&D Catalog.",
  },
  {
    title: "Getting Started",
    description: "How to use the catalog effectively.",
  },
];

