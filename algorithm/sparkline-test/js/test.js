var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function findArrDividerByIndex(arr, index) {
    var divider = 1;
    while (arr.length / divider > index) {
        divider++;
    }
    return divider;
}
function getAvg(arr) {
    var sum = 0;
    arr.forEach(function (num) { return (sum += num); });
    return (sum / arr.length).toFixed(2);
}
var ArrayModel = (function () {
    function ArrayModel(NumberArray) {
        this.NumberArray = NumberArray;
    }
    ArrayModel.prototype.formatArray = function (expectedQuantity) {
        var arr = __spreadArray([], this.NumberArray, true);
        var newArr = [];
        for (var i = expectedQuantity; i > 0; i--) {
            var point = arr.splice(0, findArrDividerByIndex(arr, i));
            newArr.push(getAvg(point));
        }
        return newArr;
    };
    return ArrayModel;
}());
function test(arr) {
    var NewArray = new ArrayModel(arr);
    return NewArray.formatArray(100);
}
