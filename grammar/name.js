module.exports = {
  name: [
    "#namePart.capitalize#",
    "#namePart.capitalize##namePart#",
    "#namePart.capitalize##namePart#",
    "#namePart.capitalize##namePart#",
    "#syllable.capitalize#'#namePart#",
    "#namePart.capitalize#",
    "#namePart.capitalize##namePart#",
    "#namePart.capitalize##namePart#",
    "#namePart.capitalize##namePart#",
    "#syllable.capitalize#'#namePart#"
  ],
  namePart: [
    "#longSyllable#",
    "#longSyllable#",
    "#syllable#",
    "#syllable#",
    "#syllable#",
    "#syllable#",
    "#syllable#-#syllable#",
    "#syllable#'#syllable#",
    "#syllable#'#syllable#",
    "#syllable##syllable#",
    "[repeatingPart:#namePart#]#repeatingPart##repeatingPart#"
  ],
  syllable: [
    "#consonant##vowel#",
    "#vowel##consonant#",
    "#consonant##vowel##consonant#"
  ],
  longSyllable: [
    "rhe",
    "thor",
    "zool",
    "ða",
    "alu",
    "zara",
    "sala",
    "maka",
    "paka",
    "bubu",
    "ququ",
    "ktzar",
    "skor",
    "gru",
    "bur",
    "man",
    "oloch",
    "din",
    "athor",
    "aton",
    "tron",
    "xes",
    "xax",
    "yah",
    "weh",
    "god"
  ],
  consonant: [
    "#rareConsonant#",
    "b",
    "c",
    "ch",
    "cl",
    "cr",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "kl",
    "kr",
    "l",
    "m",
    "m",
    "p",
    "ph",
    "qu",
    "r",
    "s",
    "st",
    "t",
    "th",
    "v",
    "w",
    "x",
    "y",
    "z",
    "zh"
  ],
  rareConsonant: [
    "bb",
    "bh",
    "cc",
    "ck",
    "cs",
    "ct",
    "cw",
    "cz",
    "db",
    "dd",
    "jh",
    "ll",
    "mn",
    "ð",
    "þ",
    "pt",
    "q",
    "xx"
  ],
  vowel: [
    "#rareVowel#",
    "a",
    "ae",
    "æ",
    "au",
    "e",
    "ea",
    "ee",
    "ei",
    "eo",
    "eu",
    "i",
    "ie",
    "io",
    "o",
    "oi",
    "oo",
    "ou",
    "u",
    "uo"
  ],
  rareVowel: [
    "ä",
    "aï",
    "ao",
    "ay",
    "ï",
    "ia",
    "iu",
    "ö",
    "oa",
    "oe",
    "ü",
    "ua",
    "ue",
    "uu",
    "üü"
  ]
};