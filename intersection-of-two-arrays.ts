// Write TypeScript code!
const intersection: HTMLElement = document.getElementById("intersection");

intersection.innerHTML += `Single number is: ${intersect([2, 2, 1])} <br/>`;
intersection.innerHTML += `Single number is: ${intersect([4, 1, 2, 1, 2])} <br/>`;
intersection.innerHTML += `Single number is: ${intersect([1, 3, 1])} <br/>`;

function intersect(nums: number[]): number {
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