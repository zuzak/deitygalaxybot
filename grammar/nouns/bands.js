const bandSize = [
  "solo act",
  "duo",
  "trio",
  "quartet",
  "quintet",
  "sextet",
  "sextett",
  "septet",
  "octet",
  "nontet",
  "noncetet",
  "dectet",
  "tentet",
  "dodecatet",
  "heptodecatet",
  "orchestra",
  "outfit",
  "band",
  "group",
  "collective"
];

const bandGenre = [
  "modern",
  "thrash",
  "ambient",
  "avant-garde",
  "dub",
  "illwave",
  "vaporwave",
  "psychedelic",
  "skronk",
  "queercore",
  "old-time",
  "nostalgic",
  "electro",
  "spoke-word",
  "moptop",
  "parent-friendly",
  "accoustic",
  "new-wave",
  "no-wave",
  "indie",
  "ill-advised",
  "silent",
  "minimalist",
  "maximalist"
];

const bandType = [
  "jazz",
  "synth",
  "pop",
  "classical",
  "K-pop",
  "metal",
  "rock",
  "acapella",
  "folk",
  "country music",
  "linedancing",
  "punk",
  "blues",
  "bluegrass",
  "breakbeat",
  "dubstep",
  "house"
];

const naffArtist = [
  "Chas & Dave",
  "Justin Bieber",
  "Babymetal",
  "Steps",
  "Val Doonican",
  "Mumford & Sons",
  "Pulp",
  "Adam & the Ants",
  "Oasis",
  "Bob Dylan",
  "Slipknot",
  "Kanye",
  "Dolly Parton",
  "Carly Rae Jepson",
  "Nine Inch Nails",
  "Judas Priest",
  "Iron Maiden",
  "Elton John",
  "Liam Gallagher",
  "Monkees",
  "Mike Naismith",
  "Bay City Rollers",
  "S-Club Juniors",
  "Take That",
  "Backstreet Boys",
  "Captain Beefheart",
  "Philip Glass",
  "Terry Riley",
  "Jimi Hendrix",
  "Kids from Fame",
  "Ludwig van Beethoven",
  "Amon Düül II",
  "Plus-Tech Squeezebox",
  "Soft Machine"
];

const band = [
  "#bandGenre# #bandType# #bandSize#",
  "#bandGenre# #naffArtist# covers-band"
];

module.exports = {
  band,
  bandGenre,
  bandSize,
  bandType,
  naffArtist
};
