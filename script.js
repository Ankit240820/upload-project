var rupa = document.querySelector("h5")
var btn = document.querySelector("#add")
var check = 0

btn.addEventListener("click",function(){
    if(check == 0){
        rupa.innerHTML = "friend"
        rupa.style.color = "blue"
        btn.innerHTML = "remove friends"

        check = 1
    }else{
        rupa.innerHTML = "stranger"
        rupa.style.color = "red"
        btn.innerHTML = "add friends"
        check = 0
    }
    
})


