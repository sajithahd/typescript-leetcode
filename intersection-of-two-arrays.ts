// Write TypeScript code!
const intersection: HTMLElement = document.getElementById("intersection");

intersection.innerHTML += ` <br/> Single number is: ${intersect(
  [1, 2, 2, 1],
  [2, 2]
)} <br/>`;

intersection.innerHTML += `Single number is: ${intersect(
  [1, 2, 2, 1],
  [2]
)} <br/>`;

intersection.innerHTML += `Single number is: ${intersect(
  [3, 1, 2],
  [1, 1]
)} <br/>`;

function intersect(nums1: number[], nums2: number[]): number[] {
  let arr = new Array<number>();
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      arr.push(nums2.splice(nums2.indexOf(nums1[i]),1)[0]);
      ;
    }
  }

  return arr;
}
