function findArrDividerByIndex(arr: number[], index: number) {
  let divider = 1;

  while (arr.length / divider > index) {
    divider++;
  }
  return divider;
}
function getAvg(arr: number[]) {
  let sum = 0;
  arr.forEach((num) => (sum += num));
  return (sum / arr.length).toFixed(2);
}
