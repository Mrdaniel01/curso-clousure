const moneyBox = (coins) => {
  var saveCoins = 0; 
  saveCoins += coins;
  console.log(`MoneyBox: ${saveCoins}`)
}

moneyBox(5)
moneyBox(10)

//no guarda el valor
/////////////////////

const moneyBox = () => {
  let saveCoins = 0; 
  const countCoins = (coins) => {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`)

  }
  return countCoins; 
  
}

let myMoneyBox = moneyBox();
console.log('ingreso 5')
myMoneyBox(5)
console.log('ingreso 10')
myMoneyBox(10)
console.log('ingreso 6')
myMoneyBox(6)
console.log('ingreso 7')
myMoneyBox(7)