function createPagesArray(totalPage: number) {
  const arrayPages = [];

  for (let i = 0; i < totalPage; i++) {
    arrayPages.push(i + 1);
  }

  return arrayPages;
}

export default createPagesArray;
