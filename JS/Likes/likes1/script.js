var user1 = 0
var p = document.querySelector("p")

function clickOne(element){
    user1++;
    p.innerText=(user1 + " like(s)");
}
