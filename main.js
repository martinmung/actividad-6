// Ejercicio 1

var animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion']

var comingSoonAnimals = ['panter', 'dragon', 'turtle']

var allAnimals = animals.concat(comingSoonAnimals)
console.log(allAnimals)


// Ejercicio 2

var arr = [4, 6, 1, 0, 8, 2]

console.log(arr.sort(function(a,b){return a - b}))


// Ejercicio 3

animals.push('cow')
console.log(animals)


// Ejercicio 4

animals.shift()
console.log(animals)