// Write TypeScript code!
const singleNumberDiv: HTMLElement = document.getElementById("singleNumber");

singleNumberDiv.innerHTML += `Single number is: ${singleNumber([2, 2, 1])} <br/>`;
singleNumberDiv.innerHTML += `Single number is: ${singleNumber([4, 1, 2, 1, 2])} <br/>`;
singleNumberDiv.innerHTML += `Single number is: ${singleNumber([1, 3, 1])} <br/>`;

function singleNumber(nums: number[]): number {
  let i = 0;
  nums.sort();
  while (i < nums.length) {
    let n = nums.splice(i, 1)[0];
    console.log(n);
    console.log(nums);

    if (nums.indexOf(n) < 0) {
      return n;
    } 
    i++;
  }
}
