// Create Empty Map
let myEmtyMap: Map<string, number> = new Map();

// Creating map with initial key-value pairs
let myInitMap: Map<string, string> = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);

/* Add, Retrieve, Delete Entries from Map. The common operations available in a Map are:
- map.set(key, value) – adds a new entry in the Map.
- map.get(key) – retrieves the value for a given key from the Map.
- map.has(key) – checks if a key is present in the Map.
- map.delete(key) – deletes a key-value pair using its key.
- map.clear() – deletes all entries from the Map.
- map.size – returns the count of entries in the Map. 
*/

let nameAgeMapping: Map<string, number> = new Map();

//1. Add entries
nameAgeMapping.set("Lokesh", 37);
nameAgeMapping.set("Raj", 35);
nameAgeMapping.set("John", 40);

//2. Get entries
nameAgeMapping.get("John"); //40

//Check entry is present or not
nameAgeMapping.has("Lokesh"); //true
nameAgeMapping.has("Brian"); //false

//Size of the Map
nameAgeMapping.size; //3

//Delete an entry
nameAgeMapping.delete("Lokesh"); // true

//Clear whole Map
nameAgeMapping.clear(); //Clear all entries

/* 
Iterating over Map
The Map entries iterate in the insertion order. A for-each loop returns an array of [key, value] pairs for each iteration.

Use 'for...of' loop to iterate over map keys, values, or entries.
    map.keys() – to iterate over map keys
    map.values() – to iterate over map values
    map.entries() – to iterate over map entries
    map – to iterate over map entries
*/

//1. Iterate over map keys
for (let key of nameAgeMapping.keys()) {
  console.log(key); //Lokesh Raj John
}

//2. Iterate over map values
for (let value of nameAgeMapping.values()) {
  console.log(value); //37 35 40
}

//3. Iterate over map entries
for (let entry of nameAgeMapping.entries()) {
  console.log(entry[0], entry[1]); //"Lokesh" 37 "Raj" 35 "John" 40
}

//4. Using object destructuring
for (let [key, value] of nameAgeMapping) {
  console.log(key, value); //"Lokesh" 37 "Raj" 35 "John" 40
}
