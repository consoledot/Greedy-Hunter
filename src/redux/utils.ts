const setMovements = (index, grid) => {
  const array = new Array(4);
  //   top
  index + 1 <= grid
    ? (array[0] = undefined)
    : (array[0] = parseInt(index) - parseInt(grid));
  //   right
  (index + 1) % grid === 0
    ? (array[1] = undefined)
    : (array[1] = parseInt(index) + 1);
  // bottom
  index + 1 > grid * (grid - 1)
    ? (array[2] = undefined)
    : (array[2] = parseInt(index) + parseInt(grid));
  // left
  index % grid === 0 && index > 0
    ? (array[3] = undefined)
    : (array[3] = parseInt(index) - 1);

  return array;
};

const updateFruits = (array, index) => {
  if (!isNaN(index)) {
    array[index] = undefined;
  }
  return array;
};

export { setMovements, updateFruits };
