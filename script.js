// You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

// A row i is weaker than a row j if one of the following is true:

// The number of soldiers in row i is less than the number of soldiers in row j.
// Both rows have the same number of soldiers and i < j.
// Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

//mySolution🎉

var kWeakestRows = function (mat, k) {
    let sold = [];
    let newObj = {};

    mat.forEach(row => sold.push(row.reduce((a, b) => a + b)));



    sold.forEach((el, i) => (newObj[i] = el));
    let weakest = Object.keys(newObj).sort((a, b) => newObj[a] - newObj[b]).slice(0, k);
  

    return weakest;
};
