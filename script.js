// Remember, we're gonna use strict mode in all scripts now!
'use strict';
let arr = [17, 21, 23];
let arr2 = [12, 5, -5, 0, 4];

// const printForecast = (arr) => {
//     let forecast= '... ';
//     for(let i = 0; i<arr.length; i++){
//         forecast += `${arr[i]}C in ${i + 1)} days ... `
//     }
//     return forecast;
// }

const printForecast = (arr) => {
    let forecast = arr.map((i, index) => `${i}C in ${index + 1} days `).join('... ');
    return `... ${forecast} ...`;
}
console.log(printForecast(arr2));


