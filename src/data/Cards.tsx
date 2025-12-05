import type { Contents } from "../components/Card";

// Generic Contents shape for catalog entries; headerBlock can hold meta like spell components.

export const defaultBackstories: Contents[] = [
  {
    title: "Acolyte",
    headerBlock:
      "Skill Proficiencies: Insight, Religion\n" +
      "Languages: Two of your choice\n" +
      "Equipment: A holy symbol, a prayer book or prayer wheel, 5 sticks of incense, vestments, a set of common clothes, and 15 gp\n" +
      "Feature: Shelter of the Faithful",
    description:
      "You have spent your life in the service of a temple, mediating between mortals and the divine.  Your faith community provides free healing and shelter, and you speak the tongues of your religion.",
  },
  {
    title: "Criminal",
    headerBlock:
      "Skill Proficiencies: Deception, Stealth\n" +
      "Tool Proficiencies: One type of gaming set, thieves’ tools\n" +
      "Equipment: A crowbar, a set of dark common clothes including a hood, and 15 gp\n" +
      "Feature: Criminal Contact",
    description:
      "You are experienced in breaking laws and avoiding authorities.  Whether burglar, smuggler, or highway robber, you maintain a reliable contact in the criminal underworld and can blend into unsavory circles.",
  },
  {
    title: "Entertainer",
    headerBlock:
      "Skill Proficiencies: Acrobatics, Performance\n" +
      "Tool Proficiencies: Disguise kit, one type of musical instrument\n" +
      "Equipment: A musical instrument (one of your choice), a favor from an admirer, a costume, and 15 gp\n" +
      "Feature: By Popular Demand",
    description:
      "You live to perform before an audience.  Your talents let you find work in any settlement and gain free lodging and food in return for your shows.  Fans admire you and may help you gain access to local circles.",
  },
  {
    title: "Folk Hero",
    headerBlock:
      "Skill Proficiencies: Animal Handling, Survival\n" +
      "Tool Proficiencies: One type of artisan’s tools, vehicles (land)\n" +
      "Equipment: A set of artisan’s tools, a shovel, an iron pot, a set of common clothes, and 10 gp\n" +
      "Feature: Rustic Hospitality",
    description:
      "You come from humble origins but have become a hero among your people.  Common folk will hide you and your companions, and they trust you implicitly.  You are comfortable living off the land and using simple tools.",
  },
  {
    title: "Guild Artisan",
    headerBlock:
      "Skill Proficiencies: Insight, Persuasion\n" +
      "Tool Proficiencies: One type of artisan’s tools\n" +
      "Languages: One of your choice\n" +
      "Equipment: A set of artisan’s tools, a letter of introduction from your guild, a set of traveler’s clothes, and 15 gp\n" +
      "Feature: Guild Membership",
    description:
      "As a member of a guild, you have spent years honing a craft.  Fellow artisans respect you and may offer lodging or assistance.  Your guild expects dues and favors, but it also shields you from legal troubles.",
  },
  {
    title: "Hermit",
    headerBlock:
      "Skill Proficiencies: Medicine, Religion\n" +
      "Tool Proficiencies: Herbalism kit\n" +
      "Languages: One of your choice\n" +
      "Equipment: A scroll case stuffed full of notes from your studies, a winter blanket, a set of common clothes, an herbalism kit, and 5 gp\n" +
      "Feature: Discovery",
    description:
      "You lived in seclusion for a formative part of your life, discovering a profound truth.  You are self‑sufficient and know how to survive alone, but now your secret may have world‑shaking implications.",
  },
  {
    title: "Noble",
    headerBlock:
      "Skill Proficiencies: History, Persuasion\n" +
      "Tool Proficiencies: One type of gaming set\n" +
      "Languages: One of your choice\n" +
      "Equipment: A set of fine clothes, a signet ring, a scroll of pedigree, and 25 gp\n" +
      "Feature: Position of Privilege",
    description:
      "You were born into a wealthy and influential family.  Your title opens doors and grants you respect among the nobility.  People treat you differently, assuming you have the right to be wherever you are.",
  },
  {
    title: "Sage",
    headerBlock:
      "Skill Proficiencies: Arcana, History\n" +
      "Languages: Two of your choice\n" +
      "Equipment: A bottle of ink, a quill, a small knife, a letter from a dead colleague posing a question you have not yet been able to answer, a set of common clothes, and 10 gp\n" +
      "Feature: Researcher",
    description:
      "You have devoted your life to learning.  Your research leads you to uncover facts others overlook, and your ability to recall lore makes you an invaluable source of information.",
  },
  {
    title: "Soldier",
    headerBlock:
      "Skill Proficiencies: Athletics, Intimidation\n" +
      "Tool Proficiencies: One type of gaming set, vehicles (land)\n" +
      "Equipment: An insignia of rank, a trophy taken from a fallen enemy, a set of bone dice or playing cards, a set of common clothes, and 10 gp\n" +
      "Feature: Military Rank",
    description:
      "You have served in a military organization, enduring the horrors of war.  Your rank commands respect among soldiers, and you can requisition simple equipment or horses from army outposts.",
  },
  {
    title: "Urchin",
    headerBlock:
      "Skill Proficiencies: Sleight of Hand, Stealth\n" +
      "Tool Proficiencies: Disguise kit, thieves’ tools\n" +
      "Equipment: A small knife, a map of the city you grew up in, a pet mouse, a token to remember your parents by, a set of common clothes, and 10 gp\n" +
      "Feature: City Secrets",
    description:
      "You grew up on the streets, learning to survive through theft and ingenuity.  You know secret passages and hidden routes through cities and can move through urban environments twice as fast as anyone else without being noticed.",
  },
];

export const defaultClasses: Contents[] = [
  {
    title: "Barbarian",
    headerBlock:
      "Hit Dice: 1d12 per barbarian level\n" +
      "Armor: Light armor, medium armor, shields\n" +
      "Weapons: Simple weapons, martial weapons\n" +
      "Tools: None\n" +
      "Saving Throws: Strength, Constitution\n" +
      "Skills: Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival",
    description:
      "Barbarians are fierce warriors who channel primal rage. While raging, they gain advantage on Strength checks and saving throws, add bonus damage to melee attacks, and resist bludgeoning, piercing, and slashing damage. They also have Unarmored Defense, calculating AC as 10 + Dexterity modifier + Constitution modifier when not wearing armor.",
  },
  {
    title: "Bard",
    headerBlock:
      "Hit Dice: 1d8 per bard level\n" +
      "Armor: Light armor\n" +
      "Weapons: Simple weapons, hand crossbows, longswords, rapiers, shortswords\n" +
      "Tools: Three musical instruments of your choice\n" +
      "Saving Throws: Dexterity, Charisma\n" +
      "Skills: Choose any three skills",
    description:
      "Bards are versatile performers and spellcasters.  They inspire allies with Bardic Inspiration and wield a broad selection of enchantments and support spells.  Their music and wit allow them to excel in social situations and adapt to many roles on the battlefield.",
  },
  {
    title: "Cleric",
    headerBlock:
      "Hit Dice: 1d8 per cleric level\n" +
      "Armor: Light armor, medium armor, shields\n" +
      "Weapons: Simple weapons\n" +
      "Tools: None\n" +
      "Saving Throws: Wisdom, Charisma\n" +
      "Skills: Choose two from History, Insight, Medicine, Persuasion, and Religion",
    description:
      "Clerics are divine spellcasters who draw power from a deity.  They can heal, protect, and smite foes with spells determined by their Divine Domain.  Their armor and weapon proficiencies let them stand on the front lines while calling upon divine magic to aid their companions.",
  },
  {
    title: "Druid",
    headerBlock:
      "Hit Dice: 1d8 per druid level\n" +
      "Armor: Light armor, medium armor, shields (druids will not wear armor or use shields made of metal)\n" +
      "Weapons: Clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears\n" +
      "Tools: Herbalism kit\n" +
      "Saving Throws: Intelligence, Wisdom\n" +
      "Skills: Choose two from Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, and Survival",
    description:
      "Druids are guardians of nature who wield the forces of the elements and can transform into animals using their Wild Shape.  Their spells emphasize healing, controlling plants and animals, and shaping the battlefield, and they draw their power from the natural world.",
  },
  {
    title: "Fighter",
    headerBlock:
      "Hit Dice: 1d10 per fighter level\n" +
      "Armor: All armor, shields\n" +
      "Weapons: Simple weapons, martial weapons\n" +
      "Tools: None\n" +
      "Saving Throws: Strength, Constitution\n" +
      "Skills: Choose two from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival",
    description:
      "Fighters are masters of arms and armor.  They gain a Fighting Style to suit their combat approach, can use Second Wind for self‑healing, and unleash extra actions with Action Surge.  At higher levels they make multiple attacks, making them formidable martial combatants.",
  },
  {
    title: "Monk",
    headerBlock:
      "Hit Dice: 1d8 per monk level\n" +
      "Armor: None\n" +
      "Weapons: Simple weapons, shortswords\n" +
      "Tools: Choose one type of artisan’s tools or one musical instrument\n" +
      "Saving Throws: Strength, Dexterity\n" +
      "Skills: Choose two from Acrobatics, Athletics, History, Insight, Religion, and Stealth",
    description:
      "Monks hone body and mind to achieve martial perfection.  They fight unarmored using Martial Arts, channel ki to flurry of blows, dash, disengage or dodge as a bonus action, and deflect missiles.  Their speed and agility let them run up walls and water, culminating in supernatural feats.",
  },
  {
    title: "Paladin",
    headerBlock:
      "Hit Dice: 1d10 per paladin level\n" +
      "Armor: All armor, shields\n" +
      "Weapons: Simple weapons, martial weapons\n" +
      "Tools: None\n" +
      "Saving Throws: Wisdom, Charisma\n" +
      "Skills: Choose two from Athletics, Insight, Intimidation, Medicine, Persuasion, and Religion",
    description:
      "Paladins swear sacred oaths that grant them divine power.  They blend martial prowess with spells and features like Lay on Hands for healing, Divine Smite to channel radiant energy through weapon strikes, and auras that protect allies.  Their steadfast devotion makes them paragons of virtue or vengeance.",
  },
  {
    title: "Ranger",
    headerBlock:
      "Hit Dice: 1d10 per ranger level\n" +
      "Armor: Light armor, medium armor, shields\n" +
      "Weapons: Simple weapons, martial weapons\n" +
      "Tools: None\n" +
      "Saving Throws: Strength, Dexterity\n" +
      "Skills: Choose three from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival",
    description:
      "Rangers are wilderness explorers and hunters.  Their Favored Enemy and Natural Explorer features help them track and thwart specific foes in their chosen terrain.  They can cast nature‑inspired spells, fight with specialized fighting styles, and at higher levels may bond with animal companions or choose a primal conclave.",
  },
  {
    title: "Rogue",
    headerBlock:
      "Hit Dice: 1d8 per rogue level\n" +
      "Armor: Light armor\n" +
      "Weapons: Simple weapons, hand crossbows, longswords, rapiers, shortswords\n" +
      "Tools: Thieves’ tools\n" +
      "Saving Throws: Dexterity, Intelligence\n" +
      "Skills: Choose four from Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, and Stealth",
    description:
      "Rogues are cunning and stealthy characters who excel at precision damage.  Sneak Attack lets them strike for extra damage when they have the drop on a foe, while Cunning Action allows dashing, disengaging, or hiding as a bonus action.  They also gain Expertise in key skills and can slip past dangers with uncanny agility.",
  },
  {
    title: "Sorcerer",
    headerBlock:
      "Hit Dice: 1d6 per sorcerer level\n" +
      "Armor: None\n" +
      "Weapons: Daggers, darts, slings, quarterstaffs, light crossbows\n" +
      "Tools: None\n" +
      "Saving Throws: Constitution, Charisma\n" +
      "Skills: Choose two from Arcana, Deception, Insight, Intimidation, Persuasion, and Religion",
    description:
      "Sorcerers wield magic drawn from within.  Their Sorcerous Origin defines the source of their power, and they use Sorcery Points and Metamagic to twist spells in creative ways.  They are less versatile than wizards but can cast spells with remarkable flexibility and flair.",
  },
  {
    title: "Warlock",
    headerBlock:
      "Hit Dice: 1d8 per warlock level\n" +
      "Armor: Light armor\n" +
      "Weapons: Simple weapons\n" +
      "Tools: None\n" +
      "Saving Throws: Wisdom, Charisma\n" +
      "Skills: Choose two from Arcana, Deception, History, Intimidation, Investigation, Nature, and Religion",
    description:
      "Warlocks forge pacts with powerful patrons to gain eldritch powers.  They cast spells using Pact Magic and can customize their abilities through Eldritch Invocations.  Their pact boon—Chain, Blade, or Tome—grants unique benefits, and their patron’s influence shapes the flavor of their magic.",
  },
  {
    title: "Wizard",
    headerBlock:
      "Hit Dice: 1d6 per wizard level\n" +
      "Armor: None\n" +
      "Weapons: Daggers, darts, slings, quarterstaffs, light crossbows\n" +
      "Tools: None\n" +
      "Saving Throws: Intelligence, Wisdom\n" +
      "Skills: Choose two from Arcana, History, Insight, Investigation, Medicine, and Religion",
    description:
      "Wizards study arcane lore and prepare spells from a spellbook.  They recover expended spell slots with Arcane Recovery and specialize in schools of magic through Arcane Traditions.  Their unparalleled breadth of spells allows them to solve problems with careful planning and knowledge.",
  },
];

export const defaultItems: Contents[] = [
  {
    title: "Longsword",
    headerBlock:
      "Martial melee weapon\n" +
      "Cost: 15 gp\n" +
      "Damage: 1d8 slashing (versatile 1d10)\n" +
      "Weight: 3 lb.\n" +
      "Properties: Versatile",
    description:
      "A longsword is the quintessential knight's weapon—a sturdy, double‑edged blade that can be wielded in one hand or two.  " +
      "It deals 1d8 slashing damage when used one‑handed and 1d10 when used with both hands.  " +
      "The weapon costs 15 gp, weighs 3 pounds and is versatile, allowing warriors to switch between a sword‑and‑shield style and a heavier grip.",
  },
  {
    title: "Dagger",
    headerBlock:
      "Simple melee weapon\n" +
      "Cost: 2 gp\n" +
      "Damage: 1d4 piercing\n" +
      "Weight: 1 lb.\n" +
      "Properties: Finesse, light, thrown (range 20/60)",
    description:
      "Daggers are small, easily concealed blades that adventurers use for stabbing or throwing.  They deal 1d4 piercing damage and benefit from the finesse property, allowing the wielder to use Dexterity instead of Strength.  " +
      "A dagger weighs only 1 pound, costs 2 gp and is light and throwable, with a normal range of 20 feet and a long range of 60 feet.",
  },
  {
    title: "Rapier",
    headerBlock:
      "Martial melee weapon\n" +
      "Cost: 25 gp\n" +
      "Damage: 1d8 piercing\n" +
      "Weight: 2 lb.\n" +
      "Properties: Finesse",
    description:
      "The rapier is a slender thrusting sword prized by duelists and rogues for its precision.  It deals 1d8 piercing damage and has the finesse property, letting wielders use Dexterity for attack and damage rolls.  " +
      "Rapiers cost 25 gp and weigh 2 pounds, making them a stylish yet deadly choice for lightly armored combatants.",
  },
  {
    title: "Shortbow",
    headerBlock:
      "Simple ranged weapon\n" +
      "Cost: 25 gp\n" +
      "Damage: 1d6 piercing\n" +
      "Weight: 2 lb.\n" +
      "Properties: Ammunition (range 80/320), two‑handed",
    description:
      "A shortbow is a compact bow used to fire arrows at distant targets.  It deals 1d6 piercing damage and requires two hands to draw and shoot.  The shortbow uses ammunition and has a normal range of 80 feet and a maximum range of 320 feet.  It costs 25 gp and weighs 2 pounds.",
  },
  {
    title: "Greatsword",
    headerBlock:
      "Martial melee weapon\n" +
      "Cost: 50 gp\n" +
      "Damage: 2d6 slashing\n" +
      "Weight: 6 lb.\n" +
      "Properties: Heavy, two‑handed",
    description:
      "Greatswords are massive blades that require both hands to swing.  They inflict 2d6 slashing damage and count as heavy weapons, which means Small creatures have disadvantage on attack rolls with them.  The sword costs 50 gp, weighs 6 pounds and must be wielded with two hands.",
  },
  {
    title: "Light Crossbow",
    headerBlock:
      "Simple ranged weapon\n" +
      "Cost: 25 gp\n" +
      "Damage: 1d8 piercing\n" +
      "Weight: 5 lb.\n" +
      "Properties: Ammunition (range 80/320), loading, two‑handed",
    description:
      "The light crossbow is a mechanical bow that fires bolts with deadly accuracy.  It deals 1d8 piercing damage and has the loading property, meaning you can fire only one bolt per action regardless of extra attacks.  It requires two hands to load and shoot and uses ammunition with a normal range of 80 feet and a long range of 320 feet.  A light crossbow costs 25 gp and weighs 5 pounds.",
  },
  {
    title: "Leather Armor",
    headerBlock:
      "Light armor\n" +
      "Cost: 10 gp\n" +
      "Armor Class: 11 + Dexterity modifier\n" +
      "Weight: 10 lb.",
    description:
      "Leather armor consists of cured hide and offers modest protection without sacrificing agility.  As light armor it sets a base AC of 11 plus the wearer’s Dexterity modifier and weighs 10 pounds.  It costs 10 gp and doesn’t impose disadvantage on Dexterity (Stealth) checks.",
  },
  {
    title: "Chain Mail",
    headerBlock:
      "Heavy armor\n" +
      "Cost: 75 gp\n" +
      "Armor Class: 16\n" +
      "Strength Requirement: 13\n" +
      "Stealth: Disadvantage\n" +
      "Weight: 55 lb.",
    description:
      "Chain mail is a suit of interlocking metal rings that provides stout protection.  It grants a fixed AC of 16 but requires a Strength score of 13 to wear effectively and imposes disadvantage on Stealth checks.  The armor weighs 55 pounds and costs 75 gp.",
  },
  {
    title: "Plate Armor",
    headerBlock:
      "Heavy armor\n" +
      "Cost: 1,500 gp\n" +
      "Armor Class: 18\n" +
      "Strength Requirement: 15\n" +
      "Stealth: Disadvantage\n" +
      "Weight: 65 lb.",
    description:
      "Plate armor consists of interlocking metal plates that cover the entire body.  It provides an AC of 18, requires a Strength score of 15 to don properly, and imposes disadvantage on Stealth checks.  Plate weighs 65 pounds and is the most expensive mundane armor, costing 1,500 gp.",
  },
  {
    title: "Shield",
    headerBlock:
      "Armor\n" + "Cost: 10 gp\n" + "AC Bonus: +2\n" + "Weight: 6 lb.",
    description:
      "A shield is a broad piece of metal or wood strapped to the arm.  Wielding a shield increases your Armor Class by 2 but usually occupies one hand.  A standard shield weighs 6 pounds and costs 10 gp.",
  },
  {
    title: "Potion of Healing",
    headerBlock:
      "Potion (common)\n" +
      "Cost: 50 gp\n" +
      "Weight: 0.5 lb.\n" +
      "Effect: Restores 2d4 + 2 hit points",
    description:
      "This vial of glimmering red liquid restores vitality when consumed.  Drinking a common potion of healing causes the imbiber to regain 2d4 + 2 hit points.  The item weighs half a pound, costs 50 gp and is commonly kept in a healer’s kit or adventurer’s pack.  More potent variants grant greater healing as noted in the Potions of Healing table.",
  },
  {
    title: "Rope (50 ft., hempen)",
    headerBlock:
      "Adventuring gear\n" +
      "Cost: 1 gp\n" +
      "Length: 50 ft.\n" +
      "Weight: 10 lb.",
    description:
      "A 50‑foot coil of hempen rope is a staple of any adventuring kit.  Rope made of hemp has 2 hit points and can be burst with a DC 17 Strength check.  This length weighs 10 pounds and costs 1 gp, and is invaluable for climbing, tying or securing equipment.",
  },
  {
    title: "Thieves’ Tools",
    headerBlock: "Tools\n" + "Cost: 25 gp\n" + "Weight: 1 lb.",
    description:
      "Thieves’ tools are a collection of delicate instruments used to pick locks and disable traps.  The kit contains a small file, various lock picks, a mirror mounted on a handle, narrow‑bladed scissors and a pair of pliers.  Proficiency with these tools lets a character add their proficiency bonus to checks made to open locks or disarm traps.  Thieves’ tools weigh 1 pound and cost 25 gp.",
  },
  {
    title: "Spellbook",
    headerBlock: "Adventuring gear\n" + "Cost: 50 gp\n" + "Weight: 3 lb.",
    description:
      "A spellbook is a leather‑bound tome containing 100 blank vellum pages for the recording of spells.  It is essential for wizards, who inscribe the rituals and formulae of their spells in its pages.  A blank spellbook weighs 3 pounds and costs 50 gp.",
  },
  {
    title: "Hooded Lantern",
    headerBlock: "Adventuring gear\n" + "Cost: 5 gp\n" + "Weight: 2 lb.",
    description:
      "This lantern has a shuttered hood that lets you control the amount of light it sheds.  When uncovered, it casts bright light in a 30‑foot radius and dim light for an additional 30 feet.  A hooded lantern burns for 6 hours on a single pint of oil, and you can lower the hood to reduce its light to dim light in a 5‑foot radius.  The lantern costs 5 gp and weighs 2 pounds.",
  },
  {
    title: "Explorer’s Pack",
    headerBlock: "Equipment pack\n" + "Cost: 10 gp\n" + "Weight: 59 lb.",
    description:
      "The explorer’s pack bundles together essentials for long expeditions.  It includes a backpack, a bedroll, a mess kit, a tinderbox, ten torches, ten days of rations, a waterskin and a 50‑foot coil of hempen rope strapped to the side.  The entire pack weighs 59 pounds and costs 10 gp.",
  },
];

export const defaultMonsters: Contents[] = [
  {
    title: "Goblin",
    headerBlock:
      "Size/Type: Small humanoid (goblinoid), neutral evil\n" +
      "Armor Class: 14 (hide armor, shield)\n" +
      "Hit Points: 7 (2d6)\n" +
      "Speed: 30 ft.\n" +
      "Ability Scores: Str 8, Dex 14, Con 10, Int 10, Wis 8, Cha 8\n" +
      "Skills: Stealth +6\n" +
      "Senses: Darkvision 60 ft., passive Perception 9\n" +
      "Languages: Goblin\n" +
      "Challenge: 1/4 (50 XP)",
    description:
      "Goblin raiders skulk in caves and ruins.  Their Nimble Escape trait lets them take the Disengage or Hide action as a bonus action, allowing them to dart in and out of combat.  Goblins prefer ambush tactics and rarely fight fair.",
  },
  {
    title: "Skeleton",
    headerBlock:
      "Size/Type: Medium undead, lawful evil\n" +
      "Armor Class: 13 (armor scraps)\n" +
      "Hit Points: 13 (2d8 + 4)\n" +
      "Speed: 30 ft.\n" +
      "Ability Scores: Str 10, Dex 14, Con 15, Int 6, Wis 8, Cha 5\n" +
      "Damage Vulnerabilities: Bludgeoning\n" +
      "Damage Immunities: Poison; Condition Immunities: Exhaustion, Poisoned\n" +
      "Senses: Darkvision 60 ft., passive Perception 9\n" +
      "Languages: Understands languages it knew in life but can’t speak\n" +
      "Challenge: 1/4 (50 XP)",
    description:
      "Reanimated by dark magic, skeletons wield rusty swords or bows and follow simple orders.  They are brittle and vulnerable to bludgeoning damage but immune to poison and do not tire.",
  },
  {
    title: "Zombie",
    headerBlock:
      "Size/Type: Medium undead, neutral evil\n" +
      "Armor Class: 8\n" +
      "Hit Points: 22 (3d8 + 9)\n" +
      "Speed: 20 ft.\n" +
      "Ability Scores: Str 13, Dex 6, Con 16, Int 3, Wis 6, Cha 5\n" +
      "Damage Immunities: Poison; Condition Immunities: Poisoned\n" +
      "Senses: Darkvision 60 ft., passive Perception 8\n" +
      "Languages: Understands languages it knew in life but can’t speak\n" +
      "Challenge: 1/4 (50 XP)",
    description:
      "Zombies shamble forward relentlessly.  Their Undead Fortitude lets them drop to 1 hit point instead of 0 when a fatal blow would kill them, unless the damage is radiant or from a critical hit.  They attack with rotting fists.",
  },
  {
    title: "Wolf",
    headerBlock:
      "Size/Type: Medium beast, unaligned\n" +
      "Armor Class: 13 (natural armor)\n" +
      "Hit Points: 11 (2d8 + 2)\n" +
      "Speed: 40 ft.\n" +
      "Ability Scores: Str 12, Dex 15, Con 12, Int 3, Wis 12, Cha 6\n" +
      "Skills: Perception +3, Stealth +4\n" +
      "Senses: Passive Perception 13\n" +
      "Languages: —\n" +
      "Challenge: 1/4 (50 XP)",
    description:
      "Wolves are pack hunters that rely on teamwork.  They have Keen Hearing and Smell, granting advantage on Wisdom (Perception) checks relying on those senses, and Pack Tactics, allowing them advantage on attack rolls when an ally is within 5 feet of the target.",
  },
  {
    title: "Ogre",
    headerBlock:
      "Size/Type: Large giant, chaotic evil\n" +
      "Armor Class: 11 (hide armor)\n" +
      "Hit Points: 59 (7d10 + 21)\n" +
      "Speed: 40 ft.\n" +
      "Ability Scores: Str 19, Dex 8, Con 16, Int 5, Wis 7, Cha 7\n" +
      "Senses: Darkvision 60 ft., passive Perception 8\n" +
      "Languages: Common, Giant\n" +
      "Challenge: 2 (450 XP)",
    description:
      "Ogres are hulking brutes that swing enormous clubs.  Their tremendous Strength lets them hurl javelins or crush opponents with a greatclub for massive damage.  They are slow witted but ferocious.",
  },
  {
    title: "Troll",
    headerBlock:
      "Size/Type: Large giant, chaotic evil\n" +
      "Armor Class: 15 (natural armor)\n" +
      "Hit Points: 84 (8d10 + 40)\n" +
      "Speed: 30 ft.\n" +
      "Ability Scores: Str 18, Dex 13, Con 20, Int 7, Wis 9, Cha 7\n" +
      "Skills: Perception +2\n" +
      "Senses: Darkvision 60 ft., passive Perception 12\n" +
      "Languages: Giant\n" +
      "Challenge: 5 (1,800 XP)",
    description:
      "Trolls are fearsome regenerative monsters.  Their Keen Smell aids tracking, and their Regeneration allows them to regain 10 hit points at the start of each of their turns unless they take acid or fire damage.  They tear foes apart with bite and claw attacks.",
  },
  {
    title: "Adult Red Dragon",
    headerBlock:
      "Size/Type: Huge dragon, chaotic evil\n" +
      "Armor Class: 19 (natural armor)\n" +
      "Hit Points: 256 (19d12 + 133)\n" +
      "Speed: 40 ft., fly 80 ft., climb 40 ft.\n" +
      "Ability Scores: Str 27, Dex 10, Con 25, Int 16, Wis 13, Cha 21\n" +
      "Saving Throws: Dex +6, Con +12, Wis +7, Cha +10\n" +
      "Skills: Perception +13, Stealth +6\n" +
      "Damage Immunity: Fire\n" +
      "Senses: Blindsight 60 ft., Darkvision 120 ft., passive Perception 23\n" +
      "Languages: Common, Draconic\n" +
      "Challenge: 17 (18,000 XP)",
    description:
      "An adult red dragon is the embodiment of greed and destruction.  It can breathe a devastating cone of fire and has legendary resistance to shrug off failed saving throws.  Its legendary actions allow it to make additional tail or wing attacks, making it a deadly apex predator.",
  },
  {
    title: "Orc",
    headerBlock:
      "Size/Type: Medium humanoid (orc), chaotic evil\n" +
      "Armor Class: 13 (hide armor)\n" +
      "Hit Points: 15 (2d8 + 6)\n" +
      "Speed: 30 ft.\n" +
      "Ability Scores: Str 16, Dex 12, Con 16, Int 7, Wis 11, Cha 10\n" +
      "Skills: Intimidation +2\n" +
      "Senses: Darkvision 60 ft., passive Perception 10\n" +
      "Languages: Common, Orc\n" +
      "Challenge: 1/2 (100 XP)",
    description:
      "Orcs are savage raiders who worship mighty gods.  Their Aggressive trait allows them to move toward enemies as a bonus action, helping them close distances quickly and overwhelm foes with greataxe swings and javelin throws.",
  },
  {
    title: "Giant Spider",
    headerBlock:
      "Size/Type: Large beast, unaligned\n" +
      "Armor Class: 14 (natural armor)\n" +
      "Hit Points: 26 (4d10 + 4)\n" +
      "Speed: 30 ft., climb 30 ft.\n" +
      "Ability Scores: Str 14, Dex 16, Con 12, Int 2, Wis 11, Cha 4\n" +
      "Skills: Stealth +7\n" +
      "Senses: Blindsight 10 ft., Darkvision 60 ft., passive Perception 10\n" +
      "Languages: —\n" +
      "Challenge: 1 (200 XP)",
    description:
      "Giant spiders spin webs to trap prey.  Their Spider Climb lets them traverse walls and ceilings, and Web Sense and Web Walker enable them to detect creatures in contact with their webs and ignore movement restrictions caused by webbing.  They attack with venomous fangs and entangling webs.",
  },
  {
    title: "Kobold",
    headerBlock:
      "Size/Type: Small humanoid (kobold), lawful evil\n" +
      "Armor Class: 12\n" +
      "Hit Points: 5 (2d6 − 2)\n" +
      "Speed: 30 ft.\n" +
      "Ability Scores: Str 7, Dex 15, Con 9, Int 8, Wis 7, Cha 8\n" +
      "Senses: Darkvision 60 ft., passive Perception 8\n" +
      "Languages: Common, Draconic\n" +
      "Challenge: 1/8 (25 XP)",
    description:
      "Kobolds are cowardly but cunning trapmakers.  They suffer Sunlight Sensitivity and fight best underground.  Pack Tactics grants them advantage on attack rolls when an ally is adjacent to the target.  They attack with daggers or slings from the safety of numbers.",
  },
];

export const defaultRaces: Contents[] = [
  {
    title: "Human",
    headerBlock:
      "Ability Score Increase: +1 to all ability scores\n" +
      "Size: Medium\n" +
      "Speed: 30 ft.\n" +
      "Languages: Common plus one of your choice",
    description:
      "Humans are the most adaptable and ambitious people among the common races. They reach adulthood in their late teens and live less than a century. Because of their versatility, every human character gains a +1 bonus to each ability score and knows Common and one extra language of their choice. Humans vary widely in height and build, but all share a base walking speed of 30 feet and count as Medium creatures.",
  },
  {
    title: "Dwarf",
    headerBlock:
      "Ability Score Increase: +2 Constitution\n" +
      "Size: Medium\n" +
      "Speed: 25 ft. (not reduced by heavy armor)\n" +
      "Languages: Common, Dwarvish",
    description:
      "Dwarves are known for their toughness and hearty constitution. They typically stand between 4 and 5 feet tall and weigh about 150 pounds. Dwarves have darkvision, can see in dim light within 60 feet as if it were bright light, and gain advantage on saving throws against poison as well as resistance to poison damage. They are proficient with battleaxes, handaxes, light hammers and warhammers, and gain a tool proficiency in smith’s tools, brewer’s supplies or mason’s tools. Stonecunning grants them double proficiency on History checks related to stonework. They speak Common and Dwarvish.",
  },
  {
    title: "Elf",
    headerBlock:
      "Ability Score Increase: +2 Dexterity\n" +
      "Size: Medium\n" +
      "Speed: 30 ft.\n" +
      "Languages: Common, Elvish",
    description:
      "Elves are graceful, long‑lived people who love freedom and self‑expression. They reach physical maturity at roughly the same age as humans but aren’t considered adults until around 100 and can live up to 750 years. All elves have darkvision (seeing in dim light within 60 feet as if it were bright light), proficiency in the Perception skill, advantage on saving throws against being charmed and immunity to magical sleep, and they enter a trance instead of sleeping. Elves speak Common and Elvish.",
  },
  {
    title: "Halfling",
    headerBlock:
      "Ability Score Increase: +2 Dexterity\n" +
      "Size: Small\n" +
      "Speed: 25 ft.\n" +
      "Languages: Common, Halfling",
    description:
      "Halflings are cheerful and stealthy folk standing about 3 feet tall and weighing around 40 pounds. They gain Lucky, allowing them to reroll a 1 on attack rolls, ability checks or saving throws. They also have Brave (advantage on saving throws against being frightened) and Halfling Nimbleness, enabling them to move through spaces occupied by larger creatures. Halflings speak Common and Halfling.",
  },
  {
    title: "Gnome",
    headerBlock:
      "Ability Score Increase: +2 Intelligence\n" +
      "Size: Small\n" +
      "Speed: 25 ft.\n" +
      "Languages: Common, Gnomish",
    description:
      "Gnomes are inventive and hardy. They stand between 3 and 4 feet tall and weigh about 40 pounds. Gnomes possess darkvision up to 60 feet and the Gnome Cunning trait, giving advantage on Intelligence, Wisdom and Charisma saving throws against magic. Rock gnomes, a common subrace, gain +1 Constitution and access to the Artificer’s Lore and Tinker features. Gnomes speak Common and Gnomish.",
  },
  {
    title: "Dragonborn",
    headerBlock:
      "Ability Score Increase: +2 Strength, +1 Charisma\n" +
      "Size: Medium\n" +
      "Speed: 30 ft.\n" +
      "Languages: Common, Draconic",
    description:
      "Dragonborn are proud, honorable beings descended from dragons. They are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Their draconic ancestry grants them a breath weapon—an action that exudes damaging energy in a line or cone depending on their chosen dragon type—and resistance to that same damage type. Dragonborn speak Common and Draconic.",
  },
  {
    title: "Half‑Elf",
    headerBlock:
      "Ability Score Increase: +2 Charisma, +1 to two other abilities of your choice\n" +
      "Size: Medium\n" +
      "Speed: 30 ft.\n" +
      "Languages: Common, Elvish, plus one extra language",
    description:
      "Half‑elves combine human versatility with elven grace. They mature at the same rate as humans but live much longer, often over 180 years. Half‑elves inherit darkvision from their elven heritage, gain advantage on saving throws against being charmed, cannot be put to sleep magically and select two skill proficiencies of their choice. They speak Common, Elvish and one extra language of their choice.",
  },
  {
    title: "Half‑Orc",
    headerBlock:
      "Ability Score Increase: +2 Strength, +1 Constitution\n" +
      "Size: Medium\n" +
      "Speed: 30 ft.\n" +
      "Languages: Common, Orc",
    description:
      "Half‑orcs blend human and orc blood, resulting in robust, imposing figures ranging from 5 to well over 6 feet tall. They have darkvision out to 60 feet, proficiency in the Intimidation skill (Menacing), and two signature abilities: Relentless Endurance allows them to drop to 1 hit point instead of 0 once per long rest, and Savage Attacks grants extra damage on melee critical hits. They speak Common and Orc.",
  },
  {
    title: "Tiefling",
    headerBlock:
      "Ability Score Increase: +1 Intelligence, +2 Charisma\n" +
      "Size: Medium\n" +
      "Speed: 30 ft.\n" +
      "Languages: Common, Infernal",
    description:
      "Tieflings are the descendants of humans and fiends. They mature at the same rate as humans but live slightly longer. Their infernal heritage grants darkvision, resistance to fire damage (Hellish Resistance) and innate spellcasting: the thaumaturgy cantrip at 1st level, hellish rebuke at 3rd and darkness at 5th level. Tieflings speak Common and Infernal.",
  },
];

export const defaultSpells: Contents[] = [
  {
    title: "Fireball",
    headerBlock:
      "3rd level evocation\n" +
      "Casting time: 1 action\n" +
      "Range: 150 feet\n" +
      "Components: V, S, M (a tiny ball of bat guano and sulfur)\n" +
      "Duration: Instantaneous\n" +
      "Classes: Sorcerer, Wizard",
    description:
      "A bright streak flashes from you to a point you choose within range and then blossoms with a low roar into a fiery explosion. Each creature in a 20‑foot‑radius Sphere centered on that point makes a Dexterity saving throw, taking 8d6 Fire damage on a failed save or half as much damage on a successful one. Flammable objects in the area that aren’t being worn or carried start burning.\n\n" +
      "Using a Higher‑Level Spell Slot. The damage increases by 1d6 for each spell slot level above 3.",
  },
  {
    title: "Healing Word",
    headerBlock:
      "1st level evocation\n" +
      "Casting time: 1 bonus action\n" +
      "Range: 60 feet\n" +
      "Components: V\n" +
      "Duration: Instantaneous\n" +
      "Classes: Bard, Cleric, Druid",
    description:
      "A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs. When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d4 for each slot level above 1st.",
  },
  {
    title: "Magic Missile",
    headerBlock:
      "1st level evocation\n" +
      "Casting time: 1 action\n" +
      "Range: 120 feet\n" +
      "Components: V, S\n" +
      "Duration: Instantaneous\n" +
      "Classes: Sorcerer, Wizard, Fighter (Eldritch Knight)",
    description:
      "You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 Force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several. When you cast this spell using a spell slot of 2nd level or higher, the spell creates one additional dart for each slot level above 1st.",
  },
  {
    title: "Shield",
    headerBlock:
      "1st level abjuration\n" +
      "Casting time: 1 reaction (when you are hit by an attack or targeted by the magic missile spell)\n" +
      "Range: Self\n" +
      "Components: V, S\n" +
      "Duration: 1 round\n" +
      "Classes: Sorcerer, Wizard",
    description:
      "An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from magic missile.",
  },
  {
    title: "Misty Step",
    headerBlock:
      "2nd level conjuration\n" +
      "Casting time: 1 bonus action\n" +
      "Range: Self\n" +
      "Components: V\n" +
      "Duration: Instantaneous\n" +
      "Classes: Sorcerer, Warlock, Wizard",
    description:
      "Briefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space that you can see.",
  },
  {
    title: "Lightning Bolt",
    headerBlock:
      "3rd level evocation\n" +
      "Casting time: 1 action\n" +
      "Range: Self (100‑foot line)\n" +
      "Components: V, S, M (a bit of fur and a rod of amber, crystal, or glass)\n" +
      "Duration: Instantaneous\n" +
      "Classes: Sorcerer, Wizard",
    description:
      "A stroke of lightning forming a line 100 feet long and 5 feet wide blasts out from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 8d6 lightning damage on a failed save, or half as much on a successful one. The lightning ignites flammable objects in the area that aren't being worn or carried. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.",
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
