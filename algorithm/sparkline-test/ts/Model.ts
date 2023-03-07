class ArrayModel {
  public NumberArray: number[];

  public constructor(NumberArray: number[]) {
    this.NumberArray = NumberArray;
  }

  public formatArray(expectedQuantity: number) {
    const arr = [...this.NumberArray];
    const newArr = [];
    for (let i = expectedQuantity; i > 0; i--) {
      const point = arr.splice(0, findArrDividerByIndex(arr, i));
      newArr.push(getAvg(point));
    }
    return newArr;
  }
}
