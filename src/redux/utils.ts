const updateFruits = (array: (number | undefined)[], index: number) => {
  if (!isNaN(index)) {
    array[index] = undefined;
  }
  return array;
};

export { setMovements, updateFruits };
