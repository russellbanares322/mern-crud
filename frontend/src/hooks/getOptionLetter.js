const getOptionLetter = (selectedNumber) => {
  if (selectedNumber === 1) {
    return { letter: "A" };
  } else if (selectedNumber === 2) {
    return { letter: "B" };
  } else if (selectedNumber === 3) return { letter: "C" };
  else {
    return { letter: "D" };
  }
};

export default getOptionLetter;
