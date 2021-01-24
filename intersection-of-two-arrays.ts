// Write TypeScript code!
const intersection: HTMLElement = document.getElementById("intersection");

intersection.innerHTML += ` <br/> Single number is: ${intersect(
  [1, 2, 2, 1],
  [2, 2]
)} <br/>`;

intersection.innerHTML += `Single number is: ${intersect(
  [2],
  [1, 2, 2, 1]
)} <br/>`;

intersection.innerHTML += `Single number is: ${intersect(
  [3, 1, 2],
  [1, 1]
)} <br/>`;

function intersect(nums1: number[], nums2: number[]): number[] {
  let arr = new Array<number>();
  if (nums1.length > nums2.length) {
    for (let i = 0; i < nums2.length; i++) {
      if (nums1.includes(nums2[i])) {
        arr.push(nums2[i]);
      }
    }
  } else {
    for (let i = 0; i < nums1.length; i++) {
      if (nums2.includes(nums1[i])) {
        arr.push(nums1[i]);
      }
    }
  }

  return arr;
}
