export const getMovements = (index: number, grid: number): number[] => {
  const array = new Array(4);
  //   top
  index + 1 <= grid ? (array[0] = undefined) : (array[0] = index - grid);
  //   right
  (index + 1) % grid === 0 ? (array[1] = undefined) : (array[1] = index + 1);
  // bottom
  index + 1 > grid * (grid - 1)
    ? (array[2] = undefined)
    : (array[2] = +index + +grid);
  // left
  index % grid === 0 && index > 0
    ? (array[3] = undefined)
    : (array[3] = +index - 1);

  return array;
};
