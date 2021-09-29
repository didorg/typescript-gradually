const itemsMap:Map<number, {}> = new Map([
  [1, { name: "John" }],
  [2, { name: "Mary" }],
]);

itemsMap.set(4, { name: "Alan" });
itemsMap.set(2, { name: "Jeff" });

console.log(itemsMap.size);
itemsMap.delete(2);
console.log(itemsMap);
console.log(itemsMap.has(4));
console.log([...itemsMap.keys()]);

