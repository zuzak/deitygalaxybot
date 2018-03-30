const abstractObject = ["word", "allegation", "allegory"];

const concreteObject = ["advert", "advertisement"];

const clothing = ["waistcoat", "sweater", "moccasin", "clown shoe"];

const weapon = ["bow & arrow", "assault rifle"];

const householdObject = [
  "friend request",
  "malapropism",
  "pinball machine",
  "arcade machine",
  "iPhone",
  "banjo",
  "barrier",
  "electronica album",
  "Harry Potter fanfic",
  "chocolate egg",
  "basin",
  "battery",
  "belisha beacon",
  "cassette",
  "coaster",
  "computer monitor",
  "dank meme",
  "detox",
  "dollar",
  "dolls' house",
  "doorstep",
  "doorway",
  "drinking fountain",
  "e-cigarette",
  "elbow patch",
  "embroidery",
  "thermos flask",
  "fruitbowl",
  "fry-up",
  "fuck-up",
  "gubbins",
  "hallway",
  "hammock",
  "headset",
  "hearth",
  "laser",
  "lampshade",
  "mainframe",
  "microwave",
  "monolith",
  "novella",
  "porno",
  "projector",
  "prospectus",
  "recipe",
  "refrigerator",
  "roadblock",
  "rock",
  "rood screen",
  "safety barrier",
  "saucer",
  "semiconductor",
  "shitstorm",
  "snapshot",
  "souvenir",
  "staircase",
  "stairway",
  "stylus",
  "tablespoon",
  "telephone",
  "thriller",
  "treadmill",
  "tricycle",
  "ventilation shaft",
  "wardrobe",
  "wedding list",
  "white goods",
  "widget",
  "incense stick",
  "prayer mat",
  "tarot deck",
  "temple bell",
  "religious symbol",
  "family heirloom"
];

const foodStuff = [
  "fruit",
  "carbohydrates",
  "protein",
  "rice",
  "pasta",
  "lasagne",
  "gin",
  "whisky",
  "absinthe",
  "kümmel",
  "beer",
  "cider",
  "bread",
  "toast",
  "curry",
  "salt",
  "butter",
  "nectar",
  "jam",
  "broccoli",
  "broth",
  "bouillon"
];

const foodItem = [
  "blackberry",
  "pretzel",
  "potato",
  "noodle",
  "burrito",
  "cabbage",
  "mango",
  "magic bean",
  "latte",
  "jelly roll",
  "hamburger",
  "cheesecake",
  "chilli",
  "coconut",
  "cream cracker",
  "croissant",
  "biscuit",
  "cake",
  "sandwich",
  "pie",
  "brunch"
];

const liquid = [
  "ammonia",
  "honey",
  "gin",
  "eau de vie",
  "asses milk",
  "#animal.s# milk",
  "barley wine",
  "stagnant water",
  "vinegar",
  "grape nut oil",
  "engine oil",
  "#animal# blood",
  "human blood",
  "whisky",
  "aqua vita",
  "absinthe",
  "acid",
  "#animal# tears",
  "babys' tears",
  "bile",
  "#animal# urine",
  "ectoplasm",
  "astral goo",
  "Yorkshire tea",
  "#wineDescriptions# wine"
];

const bodyPart = [
  "Achilles heel",
  "ankle",
  "appendix",
  "asshole",
  "tendon",
  "left testicle",
  "right testicle",
  "forefinger",
  "subcutaneous layer",
  "ticker",
  "bone",
  "neuroreceptor",
  "metatarsal",
  "carpal tunnel",
  "sphincter",
  "love handle",
  "ligament",
  "heart",
  "head",
  "hand",
  "genital",
  "erogenous zone",
  "tongue",
  "hair",
  "left buttock",
  "right buttock",
  "arm",
  "thigh",
  "vein",
  "nerve",
  "fingernail",
  "toenail",
  "left nostril",
  "right nostril",
  "eye",
  "lip",
  "ear canal",
  "tooth",
  "epidermis",
  "elbow",
  "arse",
  "breast",
  "liver",
  "kidney",
  "pancreas",
  "neck",
  "Adam's apple",
  "wrist",
  "jugular"
];

const vehicle = [
  "aircraft",
  "ambulance",
  "bicycle",
  "tractor",
  "schooner",
  "scooter",
  "Supertram",
  "frigate",
  "minicab",
  "microlight",
  "jumbo jet",
  "Lamborghini",
  "SUV"
];

const computerObject = [
  "zip file",
  "data visualisation",
  "GIF",
  "lambda function",
  "cursor",
  "#adjective# error",
  "stack overflow",
  "python script",
  "database",
  "virus",
  "Trojan horse",
  "pixel",
  "cure for cancer",
  "game",
  "algorithm",
  "folder",
  "alert",
  "pop-up",
  "browser window",
  "keyboard shortcut",
  "neat hack",
  "terminal window",
  "chatbot",
  "help file"
];

const game = [
  "chess",
  "Chinese checkers",
  "draughts",
  "Settlers of Catan",
  "Populous",
  "Carcasonne",
  "backgammon",
  "Secret Hitler",
  "Sims",
  "Civilization",
  "Call of Duty",
  "GTA",
  "hide & seek",
  "tic tac toe",
  "football",
  "Monopoly",
  "Cluedo",
  "tig"
];

module.exports = {
  nounToPluralise: abstractObject.concat(
    abstractObject,
    concreteObject,
    bodyPart,
    clothing,
    computerObject,
    householdObject,
    vehicle,
    weapon,
    foodItem,
    game.map(game => `game of ${game}`)
  ),
  abstractObject,
  concreteObject,
  bodyPart,
  clothing,
  computerObject,
  householdObject,
  vehicle,
  weapon,
  foodItem,
  foodStuff,
  game,
  liquid
};
