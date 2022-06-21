// const test = 143
// const bis = 219

// console.log(bis <= test);






// const limit = 50
// let score = 64

// if(score >= limit){
//     console.log("Ok Good");
// } else{
//     console.log("Oh noooo...");
// }

// const password = "azerty"

// if (password.length >= 5 ) {
//     console.log("The password is secure");
// }else{
//     console.log("Change your password... NOW!")
// }

// if (score >= limit && password.length >= 5) {
//     console.log("Everything is good");
// }else if (score >= limit || password.length >= 5) {
//     console.log("Something is good");
// }else{
//     console.log("Nothing is good");
// }





// const random = 6 

// if (random = 6) {
//     console.log("Yes i win");
// }else{
//     console.log("So close");
// }





// let month = "july"


// switch (month) {
//     case "january": case "february": case "december":   
//         console.log("winter");     
//         break;
//     case "march": case "avril": case "may":   
//         console.log("spring");     
//         break;
//     case "june": case "july": case "august":   
//         console.log("summer");     
//         break;
//     case "september": case "october": case "november":   
//         console.log("fall");     
//         break;

//     default:
//         break;
// }

// switch (month) {
//     case "january":
//     console.log("Winter");
//         break;
//     case "february":
//     console.log("Winter");
//         break;
//     case "march":
//     console.log("spring");
//         break;
//     case "avril":
//     console.log("spring");
//         break;
//     case "may":
//     console.log("spring");
//         break;
//     case "June":
//     console.log("summer");
//         break;
//     case "July":
//     console.log("summer");
//         break;
//     case "august":
//     console.log("summer");
//         break;
//     case "september":
//     console.log("fall");
//         break;
//     case "october":
//     console.log("fall");
//         break;
//     case "november":
//     console.log("fall");
//         break;
//     case "december":
//     console.log("Winter");
//         break;

//     default:
//         break;
// }


// let roundedNumber = 12.4

// if (roundedNumber-Math.floor(roundedNumber) >= 0.5) {
//     roundedNumber = Math.ceil(roundedNumber)
//     console.log(roundedNumber)
// }else{
//     roundedNumber = Math.floor(roundedNumber)
//     console.log(roundedNumber)
// }


let roundedNumber = "32.222223432242428"
let indexOfRounded =  roundedNumber.indexOf(".")
let splitNumber = roundedNumber.split(".")[1]
let newSplit = splitNumber.split("")[0]

if(newSplit >= 5){
    roundedNumber = Math.ceil(roundedNumber)
    console.log(roundedNumber)
}else{
    roundedNumber = Math.floor(roundedNumber)
    console.log(roundedNumber)
}




