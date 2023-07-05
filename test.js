const util = require("util");

function isAmourism(word1, word2) {
  if (word1.length != word2.length) {
    return false;
  }

  let word1letters = {};
  let word2letters = {};

  for (let i = 0; i < word1.length; i++) {
    if (!word1letters.hasOwnProperty(word1[i])) {
      word1letters[word1[i]] = 1;
    } else {
      word1letters[word1[i]] += 1;
    }

    if (!word2letters.hasOwnProperty(word2[i])) {
      word2letters[word2[i]] = 1;
    } else {
      word2letters[word2[i]] += 1;
    }
  }

  return util.isDeepStrictEqual(word1letters, word2letters);
}

console.log(isAmourism("listen", "silent"));
