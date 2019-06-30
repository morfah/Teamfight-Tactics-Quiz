const itemsData  = 
{
    "baseItems": [
        {
            "id": "BFSword",
            "name": "B.F Sword",
            "shortName": "BF",
            "description": "+20 Attack Damage",
            "image": ""
        },
        {
            "id": "RecurveBow",
            "name": "Recurve Bow",
            "shortName": "RB",
            "description": "+20% Attack Speed",
            "image": ""
        },
        {
            "id": "ChainVest",
            "name": "Chain Vest",
            "shortName": "CV",
            "description": "+20 Armor",
            "image": ""
        },
        {
            "id": "NegatronCloak",
            "name": "Negatron Cloak",
            "shortName": "NC",
            "description": "+20 Magic Resist",
            "image": ""
        },
        {
            "id": "NeedlesslyLargeRod",
            "name": "Needlessly Large Rod",
            "shortName": "NLR",
            "description": "+20% Spell Damage",
            "image": ""
        },
        {
            "id": "TearOfTheGoddess",
            "name": "Tear of the Goddess",
            "shortName": "Tear",
            "description": "+20 Starting Mana",
            "image": ""
        },
        {
            "id": "GiantsBelt",
            "name": "Giant's Belt",
            "shortName": "GB",
            "description": "+200 Health",
            "image": ""
        },
        {
            "id": "Spatula",
            "name": "Spatula",
            "shortName": "Spat",
            "description": "It must do something...",
            "image": ""
        }
    ],
    "combinedItems": [
        {
            "id": "InfinityEdge",
            "name": "Infinity Edge",
            "shortName": "IE",
            "description": "+100% Critical Strike Damage",
            "image": "",
            "combinedFrom": [
                { "itemId": "BFSword" },
                { "itemId": "BFSword" }
            ]
        },
        {
            "id": "SwordOfTheDivine",
            "name": "Sword of the Divine",
            "shortName": "SD",
            "description": "Every second, has a 5% chance to gain 100% critical strike change until the end of combat.",
            "image": "",
            "combinedFrom": [
                { "itemId": "BFSword" },
                { "itemId": "RecurveBow" }
            ]
        },
        {
            "id": "HextechGunblade",
            "name": "Hextech Gunblade",
            "shortName": "Gunblade",
            "description": "Heal for 25% of damage dealt.",
            "image": "",
            "combinedFrom": [
                { "itemId": "BFSword" },
                { "itemId": "NeedlesslyLargeRod" }
            ]
        },
        {
            "id": "SpearOfShojin",
            "name": "Spear of Shojin",
            "shortName": "Shojin",
            "description": "After casting Special Ability for the first time, basic attacks restore an additional 15% of maximum mana on-hit.",
            "image": "",
            "combinedFrom": [
                { "itemId": "BFSword" },
                { "itemId": "TearOfTheGoddess" }
            ]
        },
        {
            "id": "GuardianAngel",
            "name": "Guardian Angel",
            "shortName": "GA",
            "description": "upon death, revice with 500 health.",
            "image": "",
            "combinedFrom": [
                { "itemId": "BFSword" },
                { "itemId": "ChainVest" }
            ]
        },
        {
            "id": "Bloodthirster",
            "name": "Bloodthirster",
            "shortName": "Blood",
            "description": "Hela for 50% of damage dealt by basic attacks.",
            "image": "",
            "combinedFrom": [
                { "itemId": "BFSword" },
                { "itemId": "NegatronCloak" }
            ]
        },
        {
            "id": "ZekesHerald",
            "name": "Zeke's Herald",
            "shortName": "Herald",
            "description": "At the beginning of combat, all adjesent allies gain 10% attack speed.",
            "image": "",
            "combinedFrom": [
                { "itemId": "BFSword" },
                { "itemId": "GiantsBelt" }
            ]
        },
        {
            "id": "YoumuusGhostblade",
            "name": "Youmuu's Ghostblade",
            "shortName": "Ghostblade",
            "description": "Becomes an Assassin.",
            "image": "",
            "combinedFrom": [
                { "itemId": "BFSword" },
                { "itemId": "Spatula" }
            ]
        },
        {
            "id": "RapidFirecannon",
            "name": "Rapid Firecannon",
            "shortName": "RFC",
            "description": "Doubles attack range. Basic attacks cannot miss.",
            "image": "",
            "combinedFrom": [
                { "itemId": "RecurveBow" },
                { "itemId": "RecurveBow" }
            ]
        },
        {
            "id": "GuinsoosRageblade",
            "name": "Guinsoo's Rageblade",
            "shortName": "Rageblade",
            "description": "Gain 3% attack speed on-hit. Stacks with no upper limit.",
            "image": "",
            "combinedFrom": [
                { "itemId": "RecurveBow" },
                { "itemId": "NeedlesslyLargeRod" }
            ]
        },
        {
            "id": "StatikkShiv",
            "name": "Statikk Shiv",
            "shortName": "Shiv",
            "description": "Every third basic attack deals 100 magic damage to the target and all adjacent enemies.",
            "image": "",
            "combinedFrom": [
                { "itemId": "RecurveBow" },
                { "itemId": "TearOfTheGoddess" }
            ]
        },
        {
            "id": "PhantomDancer",
            "name": "Phantom Dancer",
            "shortName": "PD",
            "description": "Dodge all critical strikes.",
            "image": "",
            "combinedFrom": [
                { "itemId": "RecurveBow" },
                { "itemId": "ChainVest" }
            ]
        },
        {
            "id": "CursedBlade",
            "name": "Cursed Blade",
            "shortName": "CB",
            "description": "Basic attacks have a 20% change to shrink the target, removing 1 Star",
            "image": "",
            "combinedFrom": [
                { "itemId": "RecurveBow" },
                { "itemId": "NegatronCloak" }
            ]
        },
        {
            "id": "TitanicHydra",
            "name": "Titanic Hydra",
            "shortName": "TH",
            "description": "Basic attacks deal 10% of your maximum health bonus damage to the target and all adjacent enemies.",
            "image": "",
            "combinedFrom": [
                { "itemId": "RecurveBow" },
                { "itemId": "GiantsBelt" }
            ]
        },
        {
            "id": "BladeOfTheRuinedKing",
            "name": "Blade of the Ruined King",
            "shortName": "Ruined King",
            "description": "Becomes a Blademaster.",
            "image": "",
            "combinedFrom": [
                { "itemId": "RecurveBow" },
                { "itemId": "Spatula" }
            ]
        },
        {
            "id": "RabadonsDeathcap",
            "name": "Rabadon's Deathcap",
            "shortName": "Deathcap",
            "description": "Increases ability power by 50%",
            "image": "",
            "combinedFrom": [
                { "itemId": "NeedlesslyLargeRod" },
                { "itemId": "NeedlesslyLargeRod" }
            ]
        },
        {
            "id": "LudensEcho",
            "name": "Luden's Echo",
            "shortName": "LE",
            "description": "Special Ability deals 200 magic damage to all adjacent enemies.",
            "image": "",
            "combinedFrom": [
                { "itemId": "NeedlesslyLargeRod" },
                { "itemId": "TearOfTheGoddess" }
            ]
        },
        {
            "id": "LocketOfTheIronSolari",
            "name": "Locket of the Iron Solari",
            "shortName": "Solari",
            "description": "At the beginning of combat, all adjacent allies gain a 200 health shield.",
            "image": "",
            "combinedFrom": [
                { "itemId": "NeedlesslyLargeRod" },
                { "itemId": "ChainVest" }
            ]
        },
        {
            "id": "IonicSpark",
            "name": "Ionic Spark",
            "shortName": "Spark",
            "description": "Enemies take 200 magic damage whenever they cast their Special Ability.",
            "image": "",
            "combinedFrom": [
                { "itemId": "NeedlesslyLargeRod" },
                { "itemId": "NegatronCloak" }
            ]
        },
        {
            "id": "Morellonomicon",
            "name": "Morellonomicon",
            "shortName": "Morello",
            "description": "Spacial Ability deals 5% of target's maximum health as true damage per second and prevents healing on the target.",
            "image": "",
            "combinedFrom": [
                { "itemId": "NeedlesslyLargeRod" },
                { "itemId": "GiantsBelt" }
            ]
        },
        {
            "id": "Yuumi",
            "name": "Yuumi",
            "shortName": "Yuumi",
            "description": "Becomes a Sorcerer.",
            "image": "",
            "combinedFrom": [
                { "itemId": "NeedlesslyLargeRod" },
                { "itemId": "Spatula" }
            ]
        },
        {
            "id": "SeraphsEmbrace",
            "name": "Seraph's Embrace",
            "shortName": "Seraph",
            "description": "After casting Special Ability, gain 20 mana.",
            "image": "",
            "combinedFrom": [
                { "itemId": "TearOfTheGoddess" },
                { "itemId": "TearOfTheGoddess" }
            ]
        },
        {
            "id": "FrozenHeart",
            "name": "Frozen Heart",
            "shortName": "Frozen Heart",
            "description": "Adjacent enemies have their attack speed reduced by 20%.",
            "image": "",
            "combinedFrom": [
                { "itemId": "TearOfTheGoddess" },
                { "itemId": "ChainVest" }
            ]
        },
        {
            "id": "Hush",
            "name": "Hush",
            "shortName": "Hush",
            "description": "Basic attacks hace a 20% chance to silence the target.",
            "image": "",
            "combinedFrom": [
                { "itemId": "TearOfTheGoddess" },
                { "itemId": "NegatronCloak" }
            ]
        },
        {
            "id": "Redemption",
            "name": "Redemtion",
            "shortName": "Redemption",
            "description": "On death, after a small delay, heal nearby allies for 1000 healh.",
            "image": "",
            "combinedFrom": [
                { "itemId": "TearOfTheGoddess" },
                { "itemId": "GiantsBelt" }
            ]
        },
        {
            "id": "Darkin",
            "name": "Darkin",
            "shortName": "Darkin",
            "description": "Becomes a Demon.",
            "image": "",
            "combinedFrom": [
                { "itemId": "TearOfTheGoddess" },
                { "itemId": "Spatula" }
            ]
        },
        {
            "id": "Thornmail",
            "name": "Thornmail",
            "shortName": "Thornmail",
            "description": "Reflect 35% of damage taken from basic attacks.",
            "image": "",
            "combinedFrom": [
                { "itemId": "ChainVest" },
                { "itemId": "ChainVest" }
            ]
        },
        {
            "id": "SwordBreaker",
            "name": "Sword Breaker",
            "shortName": "Sword Breaker",
            "description": "Basic attacks have a 20% change to disarm the target.",
            "image": "",
            "combinedFrom": [
                { "itemId": "ChainVest" },
                { "itemId": "NegatronCloak" }
            ]
        },
        {
            "id": "RedBuff",
            "name": "Red Buff",
            "shortName": "Red",
            "description": "Basic attacks deal 2.5% of target's maximum health as true damage per second and prevent healing on the target.",
            "image": "",
            "combinedFrom": [
                { "itemId": "ChainVest" },
                { "itemId": "GiantsBelt" }
            ]
        },
        {
            "id": "KnightsVow",
            "name": "Knight's Vow",
            "shortName": "Knight's Vow",
            "description": "Becomes a Knight.",
            "image": "",
            "combinedFrom": [
                { "itemId": "ChainVest" },
                { "itemId": "Spatula" }
            ]
        },
        {
            "id": "DragonsClaw",
            "name": "Dragon's Claw",
            "shortName": "Claw",
            "description": "Gain 83% resistance to magic damage.",
            "image": "",
            "combinedFrom": [
                { "itemId": "NegatronCloak" },
                { "itemId": "NegatronCloak" }
            ]
        },
        {
            "id": "Zephyr",
            "name": "Zephyr",
            "shortName": "Zephyr",
            "description": "At the start of combat, banishes for 5 secons the unit that mirrors the wielder placement on the other side.",
            "image": "",
            "combinedFrom": [
                { "itemId": "NegatronCloak" },
                { "itemId": "GiantsBelt" }
            ]
        },
        {
            "id": "RunaansHurricane",
            "name": "Runaan's Hurricane",
            "shortName": "Hurricane",
            "description": "Basic attacks hit 2 additional targets for 20% damage.",
            "image": "",
            "combinedFrom": [
                { "itemId": "NegatronCloak" },
                { "itemId": "Spatula" }
            ]
        },
        {
            "id": "WarmogsArmor",
            "name": "Warmog's Armor",
            "shortName": "Warmog",
            "description": "Regenerates 3% of maximum health per second.",
            "image": "",
            "combinedFrom": [
                { "itemId": "GiantBelt" },
                { "itemId": "GiantBelt" }
            ]
        },
        {
            "id": "FrozenMallet",
            "name": "Frozen Mallet",
            "shortName": "Mallet",
            "description": "Becomes a Glacial.",
            "image": "",
            "combinedFrom": [
                { "itemId": "GiantBelt" },
                { "itemId": "Spatula" }
            ]
        },
        {
            "id": "ForceOfNature",
            "name": "Force of Nature",
            "shortName": "Force of Nature",
            "description": "Increases the unit cap by 1.",
            "image": "",
            "combinedFrom": [
                { "itemId": "Spatula" },
                { "itemId": "Spatula" }
            ]
        }
    ]
}

export default itemsData;
