function sumItems(array) {
  var result = 0;

  for (item of array) {
    if (Array.isArray(item)) {
      result += sumItems(item);
    } else {
      result += item;
    }
  }
  return result;
}

module.exports = sumItems;