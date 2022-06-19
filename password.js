const inputEl = document.getElementById("input");
const btnEl =  document.querySelector(".btn");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", () =>{
    createPassword()
})

copyIconEl.addEventListener("click", () =>{
    copyPassword()
    if(input.value){
        alertContainerEl.classList.remove("active")
        setTimeout(() =>{
             alertContainerEl.classList.add("active")
        }, 2000)
    }
 
})

function createPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%&*_ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLenght = 14;

    let password = ""

    for (let index = 0; index < passwordLenght; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);
        console.log(randomNum, password);
        
    }

    input.value = password;
    alertContainerEl.innerText = password;
}

function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value)
    alertContainerEl.innerText = "copied!"
  
}