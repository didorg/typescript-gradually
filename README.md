# TypeScript gradually  

## Install TypeScript
https://www.npmjs.com/package/typescript 
```
npm install -g typescript
or  
sudo npm install -g typescript (Mac| Linux)
``` 

## Check TypeScript Version
```
tsc -v
```  
## Compile TypeScript (tsc)  
- Create a file index.ts in the project folder  
- Open a terminal in the project folder  
- run: 
```
tsc index.ts
tsc --watch index.ts (watch mode)
```
## Setup a configuration file  
```
tsc --init
```
- It create a tsconfig.json 
- Change the "compilerOptions" -> "target":"es5", to:
  ```
  "target":"es6"
  ```
- Now you just need to run `tsc` to compile the project. (compile the index.ts by default)  