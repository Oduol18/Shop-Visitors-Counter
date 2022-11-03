let Display = document.getElementById("people")
let saveEl = document.getElementById("save-el")

let Count = 0

function increment() {
 Count += + 1 
 Display.innerHTML = Count  
}

function save(){
 let lineNos = Count + " - "
 saveEl.innerHTML += lineNos
 Display.innerHTML = 0
 Count = 0
}
function refresh(){
    saveEl.innerHTML = "Start : "
}

