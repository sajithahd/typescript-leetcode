// Write TypeScript code!
const moveZerosDiv: HTMLElement = document.getElementById("move-zeros");

moveZerosDiv.innerHTML += ` <br/> Single number is: ${moveZeroes([
  0,
  1,
  0,
  3,
  12
])} <br/>`;

moveZerosDiv.innerHTML += `<br/> Single number is: ${moveZeroes([
  0,
  0,
  1,
  2
])} <br/>`;

function moveZeroes(nums: number[]): number[] {
  //[0,0,1] -> [1,0,0]
  let i = 0;
  while (i < nums.length) {
    if (nums[i] == 0) {
      console.log(nums[i]);
      nums.splice(i, 1);
      nums.push(0);
    } 
    i++;
  }

  return nums;
}
