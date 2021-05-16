function utils() {
  function generateRandomNumber(num, array, prev) {
    const random = Math.floor(Math.random() * num);
    if (random !== prev) {
      prev = random;
      return (array[random] = 1);
    }
    return generateRandomNumber(num, array, prev);
  }

  const setMonster = (num, array) => {
    const random = Math.floor(Math.random() * num);
    if (array.includes(random)) {
      return random;
    }
    return setMonster(num, array);
  };
  return { generateRandomNumber, setMonster };
}
