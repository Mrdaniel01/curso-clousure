const fruits = () => {
  if (true) {
    var fruits1 = 'apple';
    let fruits2 = 'banana';
    const fruits3 = 'kiwi';
    console.log(fruits2)
    console.log(fruits3)
  }

  console.log(fruits1)
  //console.log(fruits2) // desde aca no se puede acceder a esta var
  //console.log(fruits3) // desde aca no se puede acceder a esta var
}
fruits();


let  x = 1;

{
  let x = 2;
  console.log(x)
}

console.log(x) // no se sobre escribe let


var  x = 1;

{
  var x = 2;
  console.log(x)
}

console.log(x) // se sobre escribe var


////////////////////////////////////////////

const anotherFunction = () => {
  for  (var i = 0; i < 5; i++){
    setTimeout( () => {
      console.log(i)
    }, 1000)
  }
}

anotherFunction()


const anotherFunctionLet = () => {
  for  (let i = 0; i < 5; i++){
    setTimeout( () => {
      console.log(i)
    }, 1000)
  }
}

anotherFunctionLet()


const contar = () => {
  for(var x = 0; x < 5 ; x++){
    console.log(x)
  }
}

contar()