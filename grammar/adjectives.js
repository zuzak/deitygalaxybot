const corpora = require('corpora-project');

const wineDescriptions = corpora.getFile('foods', 'wine_descriptions').wine_descriptions;

const adjective = [
  "American", "artisanal", "awkward", "base metal",
  "black", "bloody", "blue", "brown", "Canadian",
  "desiccated", "empty", "faded", "filthy", "flimsy",
  "golden", "green", "grey", "hand-made", "hidden",
  "invisible", "irridium", "macerated", "nearest",
  "object-oriented", "orange", "other", "overrated",
  "oversized", "overt", "pathetic", "prosaic", "prosthetic",
  "pure", "radioactive", "red", "secret", "secular", "silver",
  "smelly", "sodden", "sodding", "white", "wild", "wooden", "yellow"
].concat(wineDescriptions);

module.exports = { adjective }; 