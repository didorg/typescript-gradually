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
or
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

# Folder Structure  
- On `tsconfig.json`
- Uncomment "rootDir" and change it to:
  ```
  "rootDir": "./src", 
  
- Uncomment "outDir" and change it to:
  ```
  "outDir": "./dist", 
  ``` 
- Refactor your project and move `index.ts` to `src` folder.  
- Delete `index.js` file and compile the project:  
run 
  ```
  tsc
  ```
- Add an `index.html` in the `dist` folder.  
- Add the script tag, with the `index.js` -> file compiled by TypeScript  
Ex.
    ```
    <body>
    <h1>Hello World</h1>
    <script src="index.js"></script>
    </body>
    ```
    run  
    ```
    tsc
    ```
- This is the **basic** Workflow.  
