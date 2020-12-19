

// --------------------    10 Days Arrays 4  -------------------------


// let myFavNumber = 7
// let myFavNumbers = [9, 2, 4, 5, 6, 7]
// let myColors = ["red", "blue", "green"]
// let myPets = [{name: "Mewos", species: "cat"}, {name: "barks", species: "dog"}]

// myColors.push("green")
// console.log(myColors)

// let myName = "Sathi"
// console.log(myName.toUpperCase())

// let myNumber = 7.89
// console.log(myNumber.toFixed())

// myColors.splice(0, 1)
// console.log (myColors)

// // 0 means which nmbr of array u wnt to get rid of. 
// // 1 smeans how many arry you want replace,

// console.log(myPets[1].name);



// --------------------    10 Days Making Decissions  -------------------------


//  let mangoCount = 7

// if(mangoCount > 9) {
//     document.write("congrates!") 
// } else {
//     document.write("Sorry! small amount!")
// }
 
// Loop--------------------------->

// let mangoCount = 2

// while (mangoCount <= 200){
//     document.write("There are " + mangoCount + " mangoes.")
//     mangoCount++
// }


// --------------------    Higher Order Functions  -------------------------

// 1. accepts a function as an argument.
// 2. returns a function.


// document.addEventListener("click", ourAmazingFunction)

// // ourAmazingFunction itself a function------ 

// function ourAmazingFunction(){
//     alert("thank you for clicking.")
// }


// function doubleMe(x) { 
//     return x * 2 
// }

// function tripleMe(x) {
//     return x * 3 
// }

// function quadrupleMe(x) {
//     return x * 4 
// }

// function createMultiplier(multiplier){
//     return function(x){
//         return x*multiplier
//     }
// }
//  let doubleMe = createMultiplier(2)
//  let tripleMe = createMultiplier(3)
//  let quadrupleMe = createMultiplier(4)


// document.write(quadrupleMe(10))


// forEach---------------->

// let myColors = ["Red", "Green", "Blue"]

// myColors.forEach(saySomethingNice)

// function saySomethingNice(clr) {
//     document.write("The color " + clr + " is a great color.<br>" )
// }


// Returning vs mutating----------->


// let pets = [
//     {name: "meow", species: "cat", age: 2},
//     {name: "bark", species: "dog", age: 3},
//     {name: "purr", species: "cat", age: 5}
// ]

// console.log (pets.push({name: "pupp", species: "dog", age: 1}))

// let ourTest = pets.map(nameOnly)

// function nameOnly(x) {
//     return x.name 
// }

// console.log(ourTest)

// let dogs = pets.filter(onlyDogs)

// function onlyDogs(x) {
//     return x.species == "dog"
// }

// // console.log(dogs)

// function onlyBabies(x) {
//     return x.age < 3
// }

// let babyDogNames = pets.filter(onlyDogs).filter(onlyBabies).map(nameOnly)

// console.log(babyDogNames)

 
// Scope & Context---------------->



// let myName = "Brad"

// function amazingFunction() {
//     console.log(myName)
// }
 
// amazingFunction()
 
// let myName = "Brad"

// function amazingFunction() {
//     let myName = "Brad JUnior"
//     if(2 + 2 == 4){
//         // let myName = "Brad the 3rd"
//         console.log(myName)
//     }
// }
 
// amazingFunction()

//       

let ourForm = document.getElementById("ourForm")
let ourField = document.getElementById("ourField")

 
ourForm.addEventListener("submit", (e) => {
     e.preventDefault()
       createItem(ourField.value)
 })

 function createItem(x) {
     let ourHTML = `<li>${x} <button onclick= "deleteItem(this)"><i class="fas fa-trash-alt"></i></button></li>`
     taskList.insertAdjacentHTML("beforeend", ourHTML)
     ourField.value = ""
     ourField.focus()
 } 

 function deleteItem(elementToDelete) {
    elementToDelete.parentElement.remove()
 } 

  