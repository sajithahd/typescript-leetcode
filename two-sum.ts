
// Write TypeScript code!
const twoSumDiv: HTMLElement = document.getElementById("twoSum");

intersection.innerHTML += ` <br/> Two Sum: ${twoSum(
  [1, 2, 2, 1],
  8
)} <br/>`;


function twoSum(nums: number[], target: number): number[] {
    
  let arr = new Array<number>();
  for (let i = 0; i < nums.length; i++) {
      for (let j = i+1; j < nums.length; j++) {
        if (i+j === target) {
          arr.push(i,j);          
        }
      }
  }

  return arr;
};