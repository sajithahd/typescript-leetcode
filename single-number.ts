// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");

appDiv.innerHTML += `Single number is: ${singleNumber([4, 1, 2, 1, 2])} `;

function singleNumber(nums: number[]): number {
  nums = [1, 0, 1];
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    console.log(nums.splice(i, 1));
    if (nums.splice(i, 1).indexOf(n) < 0) {
      return n;
    }
  }
}
