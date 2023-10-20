window.onload = init;


function init(){
    nameField = document.getElementById("nameField");
    greetBtn.onclick = onGreetUserBtnClicked;
}
function onGreetUserBtnClicked(){
    alert("Hi " + nameField.value);
}