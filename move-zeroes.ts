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
  //[0,0,1] -> [1,0,0]
  for(let i=0; i<nums.length; i++){
    if (nums[i] == 0) {
      console.log("if "+nums[i]);
      nums.splice(i, 1);
      nums.push(0);  
      i--;     
    } else{
      console.log("else"+ nums[i]);
      i++;
    }
  }
  

  return nums;
}
