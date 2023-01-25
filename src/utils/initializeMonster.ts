const initializeMonster = (num: number, array: number[]): number => {
  const random = Math.floor(Math.random() * num);
  if (array.includes(random)) {
    return random;
  }
  return initializeMonster(num, array);
};
export { initializeMonster };
