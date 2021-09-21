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

// nested Objects
const obj1 = {
  s1: "obj1",
  n1: 5,
  nObj1: {
    ss1: "string of nested obj1",
    nn1: 34,
  },
};

const obj2 = {
  ...obj1,
  s2: "obj2",
  n2: 10,
  nObj2: {
    ss2: "String of nested obj 2",
    nn2: 37,
  },
};

// for...in and for...of
const iterable: number[] = [3, 5, 7];

for(const elem in iterable){
  console.log(elem);
} // 0 1 2

for(const elem of iterable){
  console.log(elem); 
} // 3 5 7