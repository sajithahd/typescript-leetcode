// Write TypeScript code!
const moveZerosDiv: HTMLElement = document.getElementById("move-zeros");

// moveZerosDiv.innerHTML += ` <br/> Single number is: ${moveZeroes([
//   0,
//   1,
//   0,
//   3,
//   12
// ])} <br/>`;

moveZerosDiv.innerHTML += `<br/> Single number is: ${moveZeroes([
  0,
  0,
  1,
  2
])} <br/>`;

function moveZeroes(nums: number[]): number[] {
  let zeroIndex = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      zeroIndex.push(i);
    }
  }
  console.log("zeros " + zeroIndex);
  for (let i = 0; i < zeroIndex.length; i++) {
    nums.splice(zeroIndex[i],1);
    nums.push(4)
  }
  console.log("nums " + nums);
  return nums;
}
