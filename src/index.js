/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  preferences.unshift(0);
  //console.log(preferences);
  let count = 0;
  for (let i = 0; i < preferences.length; i++) {
    if ((i == 0 && preferences[i] == 0) || (preferences[i] === undefined)) continue;
    let baseIndex = i;
    let baseValue = preferences[i];
    let step = 0, result = [];
    //console.log(`i -> ${i} + baseIndex -> ${baseIndex}`);
    while (step < 3) {
      if (preferences[i] == i) { break; }
      if ( (preferences[i] === undefined) ) break;
      step++;
      i = preferences[i];
      result.push(i);
      //console.log(`i : ${i} => preferences[i]: ${preferences[i]}; baseIndex ${baseIndex}; baseValue ${baseValue}`);
      if (preferences[i] == baseValue) {
        if (step == 3) { count++; }
        //console.log(`delete ${preferences[i]} == ${baseValue}`);
        delete preferences[result[0]];
        delete preferences[result[1]];
        delete preferences[result[2]];
      }
    }
    i = baseIndex;
  }
  return count;
};


// function getLoveTrianglesCount(preferences = []) {
//   preferences.unshift(0);
//   console.log(preferences);
//   let count = 0;
//   for (let i = 0; i < preferences.length; i++) {
//     if ((i == 0 && preferences[i] == 0) || (preferences[i] === undefined)) continue;
//     let baseIndex = i;
//     let baseValue = preferences[i];
//     let step = 0, result = [];
//     console.log(`i -> ${i} + baseIndex -> ${baseIndex}`);
//     while (step < 3) {
//       if (preferences[i] == i) { break; }
//       if ( (preferences[i] === undefined) ) break;
//       step++;
//       i = preferences[i];
//       result.push(i);
//       console.log(`i : ${i} => preferences[i]: ${preferences[i]}; baseIndex ${baseIndex}; baseValue ${baseValue}`);
//       if (preferences[i] == baseValue) {
//         if (step == 3) { count++; }
//         console.log(`delete ${preferences[i]} == ${baseValue}`);
//         delete preferences[result[0]];
//         delete preferences[result[1]];
//         delete preferences[result[2]];
//       }
//     }
//     i = baseIndex;
//   }
//   console.log(count);
// };

// getLoveTrianglesCount([42, 30, 134, 65, 162, 127, 62, 136, 61, 185, 235, 196, 181, 155, 204, 55, 244, 14, 46, 225, 104, 146, 157, 284, 76, 216, 248, 17, 266, 114, 140, 26, 124, 113, 177, 309, 41, 115, 254, 163, 312, 195, 68, 151, 152, 129, 194, 67, 171, 102, 83, 203, 212, 13, 91, 313, 51, 184, 250, 174, 75, 182, 115, 273, 111, 147, 220, 319, 92, 222, 175, 189, 22, 121, 9, 264, 29, 98, 201, 36, 79, 238, 57, 58, 11, 241, 320, 170, 24, 103, 16, 255, 310, 74, 64, 70, 221, 274, 107, 47, 97, 137, 145, 106, 125, 21, 128, 239, 249, 71, 4, 200, 160, 2, 308, 305, 259, 52, 6, 298, 94, 199, 227, 232, 297, 256, 119, 99, 19, 289, 161, 31, 108, 208, 40, 209, 50, 252, 229, 132, 279, 296, 165, 304, 90, 73, 218, 272, 179, 116, 198, 294, 302, 141, 18, 231, 288, 115, 270, 34, 267, 245, 135, 269, 240, 300, 299, 156, 142, 295, 315, 318, 247, 206, 110, 187, 223, 93, 242, 246, 54, 7, 12, 84, 285, 207, 280, 164, 228, 211, 180, 126, 39, 100, 1, 183, 82, 44, 213, 272, 81, 139, 118, 251, 109, 60, 287, 3, 8, 159, 306, 292, 122, 86, 166, 32, 87, 66, 123, 48, 101, 96, 35, 173, 277, 275, 219, 72, 202, 258, 168, 33, 59, 117, 85, 47, 138, 197, 133, 143, 214, 149, 144, 28, 5, 191, 224, 282, 205, 233, 15, 237, 276, 193, 69, 192, 130, 307, 234, 56, 153, 120, 290, 25, 194, 77, 131, 6, 188, 210, 226, 112, 95, 78, 271, 317, 20, 316, 154, 176, 130, 27, 278, 89, 10, 172, 186, 23, 257, 291, 263, 53, 311, 45, 88, 169, 105, 262, 301, 215, 167, 261, 80, 243, 150, 190, 230, 38, 80, 178, 314, 37, 260, 293, 49, 283, 253, 286, 43, 217]);

