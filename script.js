// uppercase & lowercase alphabets, numbers and symbols for password
let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
let symbols = ["!", "@", "#", "$", "%", "&"]

// Getting the form values
let submitBtn = document.getElementById("submitBtn")
let password_length, password_type;

// Submit button onclick function
submitBtn.onclick = ()=>{
    password_length = document.getElementById('p-length').value  
    password_type = document.querySelector('input[name="difficulty"]:checked').id
    generatePassword()
}

// Generating password characters for each difficulty levels
let easy_password_characters = uppercase.concat(lowercase)
let medium_password_characters = easy_password_characters.concat(numbers)
let hard_password_characters = medium_password_characters.concat(symbols)
let password = ""

const generatePassword=()=>{
    // For easy difficulty
    if(password_type=="easy"){
        for(let i=0; i<password_length; i++){
        password += easy_password_characters[Math.round(Math.random()*51)]
    }
    }
    
    // For medium difficulty
    if(password_type=="medium"){
        for(let i=0; i<password_length; i++){
        password += medium_password_characters[Math.round(Math.random()*61)]
    }
    }
    
    // For hard difficulty
    if(password_type=="hard"){
        for(let i=0; i<password_length; i++){
        password += hard_password_characters[Math.round(Math.random()*67)]
    }
    }

    document.getElementById("password-container").innerHTML = password

    setTimeout(() => {
        password =""
    }, 20);
};
