// CODE ALONG

// 1. Create a secret username and password.
//  - The variables are declared already. Update the values.
let secretUsername = ("Gummybears4ever");
let secretPassword = ("1417");
let button = document.querySelector("button");
let success = document.querySelector(".success");
let failure = document.querySelector(".failure");

button.addEventListener("click", function() {
    let username = document.querySelector(".username").value;
    let password = document.querySelector(".password").value;
    let message = document.querySelector(".message");

    // 2. Create a compound conditional statement to check for the following:
    //  - If the username AND password is correct, update the text of the message div to say "Success!"
    if (username === secretUsername && password === secretPassword) {
        message.innerHTML = "Success!";
        success.style.display = "block";
    } else if (username === secretUsername && password !== secretPassword) {
        message.innerHTML = "Wrong Password, be careful, don't mess this up too many times."
        failure.style.display = "block";
    } else if (username !== secretUsername && password === secretPassword) {
        message.innerHTML = "Wrong Username, is there a typo?"
        failure.style.display = "block";
    } else if (username !== secretUsername && password !== secretPassword) {
        message.innerHTML = "Incorrect Username and Password. Hmm. Suspicious."
        failure.style.display = "block";
    } 
    // CODE SOLO
    // 3. Create additional compound conditionals that check for the following:
    //  - If the username is correct AND the password is incorrect, update the text of the message div to say "Wrong password - be careful, don't mess this up too many times."
    //  - If the password is correct AND the username is incorrect, update the text of the message div to say "Wrong username - is there a typo?"
    //  - Finally, if the password is incorrect AND the username is incorrect, update the text of the message div to say "Incorrect username and password. Hmm. Suspicious."
    
    
    // Bonus: If the username OR password fields are empty, update the text of the message div to say "You need to enter SOMETHING."
    //  - Hint: What string represents an "empty" message.
    
});
