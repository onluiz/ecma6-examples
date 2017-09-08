class Numbers {

  sayTheNumber(number = 'No number said =(') {
  	console.log(`Number ${number} said`)
  }
  
  sayTheNumbers(numbers = 'No array of number passed =(') {
    if(!Array.isArray(numbers)) {
    	return console.log('You need to pass an array bro')
    }
    numbers.map(n => console.log(`Number ${n} said`))
  }

}
