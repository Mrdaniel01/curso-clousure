var varWithVar = 'Variable var'; 
var varWithVar = 'Variable var reescrita'; 
let varWithLet = 'variable let';
let varWithLet = 'variable let reescrita'; //error
const varWithConst = 'variable const';



const anotherfunction  = () => {
  console.log(varWithVar);
  console.log(varWithLet);
  console.log(varWithConst);
}

anotherfunction();

const helloWorld = () => {
  globalVar = 'im global'
}

helloWorld();
console.log(globalVar + 'console ') 

const anotherfunction2 = () => {
  var localVar = globalVar = 'i am a local var'
}

anotherfunction2()
console.log(globalVar)