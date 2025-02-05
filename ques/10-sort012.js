function sort012(arr) {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;
  
    while (mid <= high) {
      switch (arr[mid]) {
        case 0:
          [arr[low], arr[mid]] = [arr[mid], arr[low]];
          low++;
          mid++;
          break;
        case 1:
          mid++;
          break;
        case 2:
          [arr[mid], arr[high]] = [arr[high], arr[mid]];
          high--;
          break;
      }
    }
    return arr;
  }
  
