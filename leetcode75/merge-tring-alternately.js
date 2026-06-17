/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let result = "";
  const longer = word1.length > word2.length ? word1 : word2;

  for (let i = 0; i < longer.length; i++) {
    result += (word1[i] || "") + (word2[i] || "");
  }

  return result;
};
