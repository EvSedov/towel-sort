
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let result = [];
  if (matrix == undefined) {
    return result;
  }
  matrix.forEach((el, idx) => {
    const currentElement = (idx % 2 == 0) ? el : el.reverse();
    result = [...result, ...currentElement];
  })
  return result;
}
