window.onload = init;

function init()

{
    const registerButton = document.getElementById("btn");
    registerButton.onclick = register;
}



function register()

{
    nameInput = document.getElementById("nameInput");
    ageInput = document.getElementById("ageInput");
    if (ageInput >= 18)
{
h1Element.innerText = "Welcome" + nameInput;
}
    else {
h1Element.innerText = "You must be at least 18 years old to register";
}
}