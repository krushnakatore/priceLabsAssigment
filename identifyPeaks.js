let arr = [1, 4, 2, -2, -9, 10, 2, 12, 2, -4, -4, -4, -4, 2, 6, 7];

function peak(array) {
  let peak = array[0]; // taking start as peak element
  let index = 0; // taking starting indice as index
  let output = []; //# array of tuples
  for (let x = 1; x < arr.length; x++) {
    if (array[x] * array[x - 1] > 0) {
      // it will check for the negative peak element
      if (peak < 0 && array[x] < peak) {
        peak = array[x];
        index = x;
      }
      if (peak >= 0 && array[x] > peak) {
        // it will check for the positive peak element
        peak = array[x];
        index = x;
      }
    } else {
      // in this we simly push the peak element
      output.push([index, peak]);
      peak = array[x];
      index = x;
    }
  }
  return output;
}

console.log(peak(arr));

//
