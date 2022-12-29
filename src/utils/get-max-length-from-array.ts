export function getMaxLengthFromArray(arr: string[]) {
  return arr.reduce((acc, item) => {
    return acc < item.length ? item.length : acc;
  }, -Infinity);
}
