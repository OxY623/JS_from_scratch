$(document).ready(function () {
  let swap = function (arr, firstItem, secondItem) {
    let temp = arr[firstItem];
    arr[firstItem] = arr[secondItem];
    arr[secondItem] = temp;
  };
  function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)],
      i = left,
      j = right;
    while (i <= j) {
      while (items[i] < pivot) {
        i++;
      }
      while (items[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swap(items, i, j);
        i++;
        j--;
      }
    }
    return i;
  }

  function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
      left = typeof left != "number" ? 0 : left;
      right = typeof right != "number" ? items.length - 1 : right;
      index = partition(items, left, right);
      if (left < index - 1) {
        quickSort(items, left, index - 1);
      }
      if (index < right) {
        quickSort(items, index, right);
      }
    }
    return items;
  }
  let x = [23, 2, 56, 76, 1, 0, 2, 564];

  window.alert(quickSort(x, 0, x.length - 1));
});
