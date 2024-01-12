
let count=0

function increment(){
    let counterEl=document.getElementById("count-el")
    count++
    counterEl.textContent=count
}

let counter=[]

function save(){
    let countStr=count+" - "
    saveEL=document.getElementById('counter')
    saveEL.textContent+=countStr
}




