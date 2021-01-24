// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");

appDiv.innerHTML += `Single number is: ${singleNumber([2,2,1])} <br/>`;
appDiv.innerHTML += `Single number is: ${singleNumber([4, 1, 2, 1, 2])} <br/>`;


function singleNumber(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    nums.splice(i, 1);
    if (nums.indexOf(n) < 0) {
      console.log(nums);
      return n;
    }
  }
}
