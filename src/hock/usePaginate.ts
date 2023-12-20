export const usePaginate = (
  totalPages: number,
  range: number,
  currentPage: number,
): number[] => {
  const arr = Array.from(Array(totalPages).keys(), (num) => num + 1);
  const filterArray = arr.filter(
    (num) => num <= currentPage + range && num >= currentPage - range,
  );

  if (filterArray.includes(1)) {
    filterArray.push(0, totalPages);
    return filterArray;
  } else if (filterArray.includes(totalPages)) {
    filterArray.unshift(1, 0);
    return filterArray;
  } else {
    filterArray.unshift(1, 0);
    filterArray.push(0, totalPages);
    return filterArray;
  }
};
