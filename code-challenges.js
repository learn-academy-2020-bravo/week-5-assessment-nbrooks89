// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.


var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

//first i want to declare a function that takes in a string as an argument
// const secretCode =(word) => {
//     let array = word.split("")
//     let changedArray = array.map(value => {
//         if (value === "a" ){
//             return "4"
//          } else if(value === "i"){
//             return "1"
//          } else if(value === "o"){
//             return "0"
//          }else if(value === "e"){
//              return "3"
//          }
//         return value 
//     } )
//     return changedArray.join("")
// }


// // //next i want to use split() to make the string into an array
//  console.log(secretCode(secretCodeWord1))




// --------------------2) Create a function that takes in an array and returns all the words that have the letter a in them.

// var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// // Expected output: "Apple" "Banana" "Peach"
// const letterA = (array) => {
//   return array.filter(value => value.toUpperCase().indexOf("A") !== -1)
    
// }
    
    
// console.log(letterA(arrayOfWords))



   
  
  



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

const fullHouse = (array) =>{
    let uniqueValues = [... new Set(array)]
    if( uniqueValues.length !== 2){
        return false
    }
    let counts = uniqueValues.map(value => {
        let count = 0 
        for(let i = 0; i < array.length; i++){
            let arrayVal = array[i]
            if(arrayVal === value){
                count++
            }
        }

        return count
    })
    counts.sort()
    return counts[0]== 2 && counts[1]== 3
}
  console.log(fullHouse(hand1))  
  console.log(fullHouse(hand2)) 
  console.log(fullHouse(hand3)) 
    

