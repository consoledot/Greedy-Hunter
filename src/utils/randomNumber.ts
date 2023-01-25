export const generateRandomNumber = (
  num: number,
  array: number[],
  prev: number
): number => {
  const random = Math.floor(Math.random() * num);
  if (random !== prev) {
    prev = random;
    return (array[random] = 1);
  }
  return generateRandomNumber(num, array, prev);
};
