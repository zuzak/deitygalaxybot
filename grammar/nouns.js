const nounNotToPluralise = [
  "absence",
  "absinthe",
  "absorption",
  "abstinence",
  "absurdity",
  "abundance",
  "acceptance",
  "accessibility",
  "accommodation",
  "accountability",
  "accounting",
  "accreditation",
  "accuracy",
  "acquiescence",
  "acreage",
  "actuality",
  "adage",
  "adaptation",
  "adherence",
  "adjustment",
  "adoption",
  "adultery",
  "advancement",
  "advertising",
  "advice",
  "aesthetics",
  "affinity",
  "aggression",
  "agriculture",
  "airtime",
  "allocation",
  "ammonia",
  "anatomy",
  "anemia",
  "anthropology",
  "anxiety",
  "apartheid",
  "apparatus",
  "appeasement",
  "applause",
  "archery",
  "architecture",
  "arctic weather",
  "ardor",
  "Armour",
  "arrears",
  "artistry",
  "asbestos",
  "asthma",
  "atheism",
  "attraction",
  "attractiveness",
  "authority",
  "avarice",
  "aversion",
  "aviation",
  "babbling",
  "bad art",
  "ballet",
  "battling",
  "The BBC",
  "bedtime",
  "bending",
  "billing",
  "bingo",
  "blather",
  "boasting",
  "boldness",
  "bondage",
  "bonding",
  "bouillon",
  "bowling",
  "brainstorming",
  "breadth",
  "brevity",
  "Brexit",
  "brightness",
  "brotherhood",
  "browsing",
  "brunch",
  "bullion",
  "bureaucracy",
  "burglary",
  "canonization",
  "Catholicism",
  "CCTV",
  "celebrity",
  "certainty",
  "certification",
  "chemotherapy",
  "China",
  "chivalry",
  "cholera",
  "civilisation",
  "civility",
  "closeness",
  "clothing",
  "coding",
  "combustion",
  "commemoration",
  "Communism",
  "competition",
  "completeness",
  "complexity",
  "computing",
  "confiscation",
  "consistency",
  "consolidation",
  "conspiracy theory",
  "contentment",
  "coriander",
  "correlation",
  "countryside",
  "coverage",
  "criminality",
  "cropping",
  "cross-examination",
  "cumin",
  "custard",
  "cynicism",
  "cytoplasm",
  "darkness",
  "dawning",
  "daybreak",
  "dealing",
  "dedication",
  "deduction",
  "defacation",
  "defection",
  "deference",
  "deflation",
  "degeneration",
  "delegation",
  "delirium",
  "deliverance",
  "demeanor",
  "depletion",
  "depression",
  "despotism",
  "detention",
  "devolution",
  "dexterity",
  "diagnosis",
  "differentiation",
  "dioxide",
  "disarmament",
  "discord",
  "dishonesty",
  "disobedience",
  "distribution",
  "diversity",
  "docking",
  "Doctor Who",
  "dominance",
  "domination",
  "Donald Trump",
  "drafting",
  "drilling",
  "drumming",
  "drunkenness",
  "dynamics",
  "eagerness",
  "earnestness",
  "Easter",
  "ectoplasm",
  "effectiveness",
  "electricity",
  "eloquence",
  "emancipation",
  "employment",
  "encouragement",
  "endangerment",
  "enlightenment",
  "enterprise software",
  "enthusiasm",
  "epilepsy",
  "espionage",
  "estimation",
  "evacuation",
  "exaggeration",
  "expediency",
  "exploitation",
  "extinction",
  "Facism",
  "faeces",
  "fake news",
  "fascism",
  "fastball",
  "feedback",
  "ferocity",
  "fertilization",
  "fingering",
  "firing",
  "fixing",
  "flashing",
  "flora",
  "folklore",
  "footing",
  "forgiveness",
  "formality",
  "fragmentation",
  "fraud",
  "freestyle",
  "friendliness",
  "fulfillment",
  "functionality",
  "fusion",
  "futility",
  "gallantry",
  "genesis",
  "genever",
  "glamour",
  "glitter",
  "glucose",
  "google",
  "grandeur",
  "grappling",
  "greens",
  "gridlock",
  "groundwork",
  "gusto",
  "habitation",
  "handling",
  "happiness",
  "hardship",
  "hauntology",
  "headquarters",
  "hegemony",
  "height",
  "helping",
  "helplessness",
  "hierarchy",
  "hoarding",
  "hockey",
  "Homer",
  "honesty",
  "horror",
  "hostility",
  "housing",
  "humility",
  "ignition",
  "illustration",
  "immunization",
  "imperialism",
  "imprisonment",
  "inaction",
  "inactivity",
  "indecency",
  "inevitability",
  "infamy",
  "infiltration",
  "innocence",
  "innovation",
  "insanity",
  "inspiration",
  "interaction",
  "intercession",
  "intercourse",
  "intolerance",
  "involvement",
  "irrigation",
  "jogging",
  "jurisprudence",
  "knicker-elastic",
  "knocking",
  "K-Pop",
  "laminate flooring",
  "larceny",
  "laurels",
  "leadership",
  "leasing",
  "legislation",
  "liberation",
  "lifeblood",
  "liquidation",
  "literature",
  "litigation",
  "loathing",
  "logic",
  "longevity",
  "lordship",
  "unrequited love",
  "Lowry",
  "lustre",
  "lycra",
  "machinery",
  "madness",
  "magnificence",
  "mahogany",
  "mailing",
  "maintenance",
  "manga",
  "martyrdom",
  "mayhem",
  "means",
  "meantime",
  "melodrama",
  "mentality",
  "metaphysics",
  "metre",
  "mirth",
  "misery",
  "mitochondria",
  "mobility",
  "modern life",
  "molasses",
  "momentum",
  "Monetarism",
  "morale",
  "mortality",
  "mowing",
  "Nandos",
  "narration",
  "NATO",
  "negligence",
  "nervousness",
  "networking",
  "nobility",
  "normality",
  "nutrition",
  "nylon",
  "obscurity",
  "offense",
  "opposition",
  "Orientalism",
  "originality",
  "outdoors",
  "overtime",
  "oxygen",
  "panic",
  "parliament",
  "parsley",
  "pasta",
  "patchwork",
  "pathos",
  "patriotism",
  "parallel parking",
  "permission",
  "perusal",
  "pessimism",
  "philosophy",
  "phosphorus",
  "phrasing",
  "epistemology",
  "phrenology",
  "ping pong",
  "plasma",
  "playing",
  "plurality",
  "pneumonia",
  "pointing",
  "poker",
  "polling",
  "pork",
  "posterity",
  "posting",
  "potassium",
  "poultry",
  "pounding",
  "pragmatism",
  "precedence",
  "pretense",
  "priesthood",
  "privacy",
  "probation",
  "proceedings",
  "processing",
  "prominence",
  "prorogation",
  "providence",
  "proximity",
  "puberty",
  "publicity",
  "punditry",
  "putting",
  "quilting",
  "racism",
  "radiance",
  "rapidity",
  "rapport",
  "ratification",
  "rationality",
  "rebirth",
  "recognition",
  "recourse",
  "recreation",
  "redemption",
  "redistribution",
  "reinforcement",
  "reinstatement",
  "relativism",
  "relaxation",
  "rendition",
  "repentance",
  "resentment",
  "retention",
  "retirement",
  "riches",
  "righteousness",
  "rubbing",
  "Rupert Murdoch",
  "S&M",
  "salvation",
  "sarcasm",
  "scarcity",
  "schnapps",
  "scissors",
  "scolding",
  "scouring",
  "seating",
  "seduction",
  "self-confidence",
  "self-control",
  "self-respect",
  "sending",
  "serendipity",
  "serenity",
  "seriousness",
  "servitude",
  "sesame",
  "sewing",
  "sharpness",
  "shaving",
  "Shiraz",
  "shoplifting",
  "shopping",
  "simplicity",
  "sinking",
  "snark",
  "soccer",
  "sociology",
  "solemnity",
  "solicitation",
  "solitude",
  "somewhere",
  "sophistication",
  "sorcery",
  "spaghetti",
  "specs",
  "speculation",
  "sperm",
  "staging",
  "stagnation",
  "stamina",
  "standstill",
  "stillness",
  "stimulus",
  "stocks",
  "syntax",
  "technology",
  "tequila",
  "terror",
  "Central Line",
  "Daily Mail",
  "today",
  "tossing",
  "touchdown",
  "toxicity",
  "trauma",
  "triburaty",
  "twenties",
  "underwear",
  "unhappiness",
  "unification",
  "urban decay",
  "verification",
  "viability",
  "vindication",
  "violation",
  "vogue",
  "vomiting",
  "vulnerability",
  "warmth",
  "wealth",
  "weariness",
  "whereabouts",
  "whisky",
  "whiteness",
  "width",
  "wiring",
  "witchcraft",
  "withholding",
  "womanhood",
  "word",
];

const nounToPluralise = [
  "word",
  "abbey",
  "accomplice",
  "actress",
  "advert",
  "advertisement",
  "aircraft",
  "allegation",
  "allegiance",
  "allegory",
  "allergy",
  "ally",
  "alligator",
  "allotment",
  "altercation",
  "ambulance",
  "ankle",
  "announcement",
  "annoyance",
  "annuity",
  "anomaly",
  "apology",
  "apostle",
  "appellation",
  "appendix",
  "appointment",
  "appraisal",
  "archipelago",
  "arrow",
  "artisan",
  "ascent",
  "assembly",
  "asshole",
  "assignment",
  "association",
  "attacker",
  "auspice",
  "backlash",
  "baker",
  "ball",
  "banjo",
  "baron",
  "barrier",
  "barrister",
  "base",
  "basin",
  "battery",
  "beginner",
  "bicycle",
  "biography",
  "biology",
  "birthplace",
  "blackberry",
  "blobfish",
  "blossom",
  "boardroom",
  "bodyguard",
  "bomber",
  "bone",
  "bonus",
  "bookmark",
  "baby-boomer",
  "booty",
  "brewer",
  "Brexiteer",
  "broccoli",
  "broth",
  "building",
  "burger bar",
  "burrito",
  "buyout",
  "by-election",
  "cabal",
  "cabbage",
  "calamity",
  "campaign",
  "carcass",
  "carpal tunnel",
  "carrier",
  "cartridge",
  "cassette",
  "catch",
  "catfish",
  "cemetery",
  "charade",
  "chasm",
  "check-in",
  "cheerleader",
  "cheesecake",
  "Chihuahua",
  "chilli",
  "circus",
  "clearance",
  "clerk",
  "climber",
  "clown shoe",
  "coaster",
  "coconut",
  "collaborator",
  "colleague",
  "college",
  "collision",
  "colour",
  "comedian",
  "commander",
  "commenter",
  "commissioner",
  "commune",
  "computer monitor",
  "comrade",
  "condominium",
  "conduit",
  "confidant",
  "configuration",
  "conflagration",
  "conflict",
  "Conservative Government",
  "conspiracy",
  "constable",
  "consul",
  "consultancy",
  "contractor",
  "conversation",
  "cornerstone",
  "councillor",
  "counselor",
  "countdown",
  "covering",
  "coyote",
  "cracker",
  "creator",
  "crocodile",
  "crossover",
  "crossroad",
  "culprit",
  "curator",
  "curfew",
  "cursor",
  "cutter",
  "cyclist",
  "cyclone",
  "cylinder",
  "daddy",
  "damsel",
  "dank meme",
  "dead letter office",
  "deficiency",
  "definition",
  "delicacy",
  "demon",
  "demonstration",
  "denomination",
  "dentist",
  "departure",
  "designation",
  "detox",
  "developer",
  "dialect",
  "digger",
  "digression",
  "diploma",
  "disability",
  "discovery",
  "dismissal",
  "dispatcher",
  "disservice",
  "distributor",
  "diver",
  "doctrine",
  "dollar",
  "dolls' house",
  "dominion",
  "donkey",
  "doorstep",
  "doorway",
  "dossier",
  "downside",
  "drinking fountain",
  "driver",
  "duchess",
  "duck",
  "dugout",
  "dump",
  "dune",
  "dustbowl",
  "dwelling",
  "e-cigarette",
  "earning",
  "eater",
  "editor",
  "effigy",
  "elbow patch",
  "element",
  "embodiment",
  "embroidery",
  "emperor",
  "encampment",
  "enclosure",
  "end-of-level boss",
  "English monarchy",
  "entrepreneur",
  "environ",
  "environment",
  "envoy",
  "equation",
  "equator",
  "erogenous zone",
  "error",
  "eschaton",
  "examination",
  "exclamation",
  "extension cable",
  "eyewitness",
  "fake tan",
  "fall",
  "fetish",
  "feudal system",
  "finale",
  "flask",
  "floozy",
  "fluke",
  "follower",
  "foothold",
  "forefinger",
  "forefront",
  "formation",
  "formula",
  "foyer",
  "framework",
  "Frenchman",
  "frequency",
  "frigate",
  "fruit",
  "fruitbowl",
  "fry",
  "fry-up",
  "fuck-up",
  "function",
  "fundraiser",
  "gallery",
  "genital",
  "gesture",
  "GIF",
  "gin",
  "girlfriend",
  "grocery",
  "grouping",
  "gunman",
  "hacker",
  "hallway",
  "hamburger",
  "hammock",
  "hand",
  "handshake",
  "head",
  "headcount",
  "header",
  "headset",
  "heart",
  "hearth",
  "heath",
  "helper",
  "hideaway",
  "hipster",
  "homeland",
  "horseman",
  "hovel",
  "hurricane",
  "hyacinth",
  "iceberg",
  "illness",
  "illustrator",
  "immunity",
  "inaccuracy",
  "inauguration",
  "indicator",
  "influx",
  "iniquity",
  "instruction",
  "instructor",
  "insurer",
  "intermission",
  "interpretation",
  "intersection",
  "interval",
  "intruder",
  "invasion",
  "investment",
  "iteration",
  "jelly roll",
  "juggernaut",
  "juncture",
  "juror",
  "kangaroo",
  "kingdom",
  "laborer",
  "laser",
  "latte",
  "layout",
  "leopard",
  "licence",
  "lifeline",
  "ligament",
  "lighting",
  "likeness",
  "lineage",
  "liner",
  "lineup",
  "listener",
  "locality",
  "lodging",
  "lookout",
  "madam",
  "mainframe",
  "majority",
  "makerspace",
  "mango",
  "manifesto",
  "mantra",
  "manufacturer",
  "maple",
  "martin",
  "mathematician",
  "matrix",
  "matron",
  "mayor",
  "measurement",
  "mechanic",
  "mediator",
  "medic",
  "meme",
  "memory",
  "metatarsal",
  "method",
  "microbrew",
  "microwave",
  "miner",
  "misconception",
  "mishap",
  "misunderstanding",
  "moccasin",
  "monarchy",
  "monolith",
  "monument",
  "motto",
  "mouthful",
  "mouthpiece",
  "mover",
  "movie",
  "murderer",
  "musician",
  "mutation",
  "mythology",
  "narrator",
  "nationality",
  "neighborhood",
  "neighbour",
  "newsreader",
  "nexus",
  "nightmare",
  "nobody",
  "noodle",
  "notification",
  "nourishment",
  "novella",
  "nucleus",
  "nuisance",
  "nursery",
  "oasis",
  "obscenity",
  "observer",
  "onslaught",
  "operation",
  "opportunity",
  "oracle",
  "orchestra",
  "organisation",
  "organiser",
  "orientation",
  "ounce",
  "outage",
  "outcome",
  "outing",
  "outpost",
  "overseer",
  "owner",
  "pairing",
  "palindrome",
  "panther",
  "paradox",
  "parson",
  "passenger",
  "pedestrian crossing",
  "pendulum",
  "penguin",
  "persona",
  "Pharaoh",
  "philosopher",
  "phone accessory shop",
  "phone mast",
  "physique",
  "pile",
  "plateau",
  "plaza",
  "plenipotentiary",
  "plethora",
  "police constable",
  "policeman",
  "porno",
  "poster",
  "postponement",
  "potato",
  "pottery",
  "precinct",
  "prefecture",
  "preoccupation",
  "pretzel",
  "prisoner",
  "proboscis monkey",
  "proceeding",
  "processor",
  "progression",
  "projection",
  "propensity",
  "prophecy",
  "prospectus",
  "protein",
  "prototype",
  "provider",
  "provocation",
  "publicist",
  "publisher",
  "Pueblo",
  "pundit",
  "quantity",
  "quart",
  "Quisling",
  "quorum",
  "ralph",
  "rancher",
  "ranger",
  "reaction",
  "reader",
  "reassurance",
  "receptor",
  "recipe",
  "rector",
  "recurrence",
  "redundancy",
  "referendum",
  "refinery",
  "reflection",
  "reformer",
  "refrigerator",
  "regularity",
  "regulator",
  "rein",
  "Remoaner",
  "repayment",
  "repertoire",
  "repository",
  "republic",
  "reputation",
  "residency",
  "resignation",
  "restaurant",
  "resurgent",
  "retailer",
  "reviewer",
  "roadblock",
  "robber",
  "rock",
  "Rodeo",
  "rood screen",
  "runoff",
  "safety barrier",
  "saloon",
  "Saturday",
  "saucer",
  "saviour",
  "scenario",
  "scenery",
  "schism",
  "scholarship",
  "schoolboy",
  "schooner",
  "scooter",
  "scrimmage",
  "scrum",
  "sediment",
  "seeder",
  "seizure",
  "semicolon",
  "semiconductor",
  "semifinal",
  "senator",
  "setup",
  "shitstorm",
  "siding",
  "simulation",
  "Sister",
  "skate",
  "sloth",
  "slugger",
  "snack",
  "snail",
  "snapshot",
  "snowdrop",
  "snowflake",
  "socialist",
  "souvenir",
  "specification",
  "specimen",
  "spectacle",
  "spectre",
  "spoiler",
  "squad",
  "squid",
  "staircase",
  "stairway",
  "standard unit",
  "standpoint",
  "stanza",
  "statement",
  "stole",
  "stoppage",
  "story",
  "storyteller",
  "stylus",
  "subcommittee",
  "subcutaneous layer",
  "subscription",
  "subsidy",
  "suburb",
  "success",
  "sufferer",
  "suntan",
  "Supertram",
  "supposition",
  "suspension",
  "sweater",
  "sweepstake",
  "swimmer",
  "syndrome",
  "synopsis",
  "system",
  "tablespoon",
  "tabloid press",
  "taker",
  "tardigrade",
  "tautology",
  "tavern",
  "telephone",
  "template",
  "tempo",
  "testicle",
  "testimonial",
  "tendency",
  "tendon",
  "terrier",
  "terry",
  "theater",
  "theology",
  "therapy",
  "thicket",
  "thoroughfare",
  "threshold",
  "thriller",
  "thunderstorm",
  "ticker",
  "tiger",
  "tight",
  "Tory",
  "tosser",
  "tourist",
  "tourney",
  "tracing",
  "tractor",
  "translation",
  "transmission",
  "transmitter",
  "traveler",
  "treadmill",
  "tricycle",
  "trilogy",
  "trout",
  "Tuesday",
  "tuning",
  "tycoon",
  "tyrant",
  "ultimatum",
  "underdog",
  "university",
  "uprising",
  "vaccination",
  "validity",
  "vampire",
  "vanguard",
  "variation",
  "vegetation",
  "ventilation shaft",
  "vicinity",
  "victory",
  "viewpoint",
  "villa",
  "vista",
  "vocalist",
  "volcano",
  "voltage",
  "waistcoat",
  "waitress",
  "wanker",
  "walrus",
  "wardrobe",
  "watchdog",
  "wedding list",
  "widget",
  "windfall",
  "windtunnel",
  "workman",
  "youngster",
  "zip file",
];

const anyNoun = [
  "#nounNotToPluralise#", "#nounToPluralise#",
]

module.exports = { nounNotToPluralise, nounToPluralise, anyNoun };