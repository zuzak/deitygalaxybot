const abstractObject = ["word", "allegation", "allegory"];

const concreteObject = ["advert", "advertisement"];

const clothing = ["waistcoat", "sweater", "moccasin", "clown shoe"];

const weapon = ["bow & arrow", "assault rifle"];

const householdObject = [
  "banjo",
  "barrier",
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
  "widget"
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
  "jam"
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
  "pie"
];

const liquid = [
  "honey",
  "gin",
  "eau de vie",
  "asses milk",
  "#animal.s# milk",
  "ale",
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
  "babys' tears"
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
  "breast"
];

const vehicle = [
  "aircraft",
  "ambulance",
  "bicycle",
  "tractor",
  "schooner",
  "scooter",
  "Supertram",
  "frigate"
];

const computerObject = [
  "zip file",
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
  "browser window"
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
