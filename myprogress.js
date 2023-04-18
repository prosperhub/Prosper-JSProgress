let card2 = document.getElementsByClassName("card2")[0]
let button = document.getElementById("button")

button.addEventListener("click", ()=>{
    let width = 10
    let inter = setInterval(progress, 20);
    function progress(){
    if(width==100)
    {
        clearInterval(inter)
    }else{
        width++
        card2.style.width= width + "%"
        card2.innerHTML= width + "%"
    }}
});