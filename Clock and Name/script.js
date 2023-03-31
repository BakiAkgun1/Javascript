let userName = prompt("Lütfen Adinizi Giriniz")
let myName = document.querySelector("#myName")
myName.innerHTML = userName.toUpperCase();

function showTime() { 

    let time= document.querySelector("#time");
    let date = new Date();  

    
    let days = ["Pazar","Pazartesi","Sali","Çarşamba","Perşembe","Cuma","Cumartesi"]

    time.innerHTML = `
    ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}  ${days[date.getDay()]}
    `
}

setInterval(showTime,1000); 