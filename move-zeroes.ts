// Write TypeScript code!
const moveZerosDiv: HTMLElement = document.getElementById("move-zeros");

moveZerosDiv.innerHTML += ` <br/> Single number is: ${moveZeroes(
  [0,1,0,3,12]
)} <br/>`;

moveZerosDiv.innerHTML += `Single number is: ${moveZeroes(
  [0,0,1]
)} <br/>`;

function moveZeroes(nums: number[]): void {
   //[0,0,1] -> [1,0,0]
    nums = [0,0,1]
    for(let i=0 ;i<nums.length; i++){
        if(nums[i]==0){
            console.log(nums[i]);
            nums.splice(i,1);
            nums.push(0)
        }
    }
};