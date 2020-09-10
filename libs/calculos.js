function somatorio(array, grades) {
  const sum = array.reduce((accumulator, current) => {
    return current.student === grades.student &&
      current.subject === grades.subject
      ? accumulator + current.value
      : accumulator;
  }, 0);
  return JSON.stringify(sum);
}

function media(array, grades) {
  const sum = array.reduce((accumulator, current) => {
    return current.subject === grades.subject && current.type === grades.type
      ? accumulator + current.value
      : accumulator;
  }, 0);

  const conta = array.reduce((accumulator, current) => {
    return current.subject === grades.subject && current.type === grades.type
      ? accumulator + 1
      : accumulator;
  }, 0);
  return JSON.stringify(sum / conta);
}
export { media, somatorio };
