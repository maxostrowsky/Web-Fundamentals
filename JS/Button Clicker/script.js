function logout(element){
    element.innerText="Logout"
}

function hide(element){
    element.remove("definition")
}


var countOne=0
var countTwo=0

function clickOne(element){
    countOne++
    console.log(countOne + " Likes")
    element.innerText = (countOne + " Likes")
    alert("ninja was Liked")
}

function clickTwo(element){
    countTwo++
    console.log(countTwo + " Likes")
    element.innerText = (countTwo + " Likes")
    alert("ninja was Liked")
}