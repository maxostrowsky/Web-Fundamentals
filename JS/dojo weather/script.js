

function clickOne(element){ 
    alert("The Weather Report is loading...")
}


var removeCookies = document.querySelector(".cookies")

function hide(element){
    removeCookies.remove(".cookies")
}


var temp1 = document.querySelectorAll("#high")
var temp2 = document.querySelectorAll("#low")

function changeTempature(element){
    if(element.value==="°F"){
        for(var x=0; x<temp1.length; x++){
        temp1[x].innerText = "75°"
        temp2[x].innerText = "75°"
        }
    }
    else{
        for(var i=0; i<temp1.length; i++){
        temp1[i].innerText = "24°"
        temp2[i].innerText = "24°"
        }
    }
}

// var temp2 = document.querySelectorAll("#low")


// function changeTempature(element){
//     if(element.value==="°F"){
//         for(var x=0; x<temp2.length; x++){
//         temp2[x].innerText = "75°"
//         }
//     }
//     else{
//         for(var i=0; i<temp2.length; i++){
//         temp2[i].innerText = "24°"
//         }
//     }
// }