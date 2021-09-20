const s: string = "Hello";
const nums1: number[] = [];
const nums2: number[] = [];

nums1.push(10);
nums1.push(8);
nums1.push(6);

nums2.push(5);
nums2.push(4);
nums2.push(3);

// .concat()
// Combines two or more arrays. This method returns a new array without modifying any existing arrays.
const arrConcat1: number[] = nums1.concat(...nums2);
const arrConcat2: number[] = nums2.concat(2, 1);
const arrConcat3: number[] = nums1.concat(...nums2, 2, 1);
const arrConcat4: number[] = nums1.concat(2, 1, ...nums2);

console.log(arrConcat1);
console.log(arrConcat2);
console.log(arrConcat3);
console.log(arrConcat4);
