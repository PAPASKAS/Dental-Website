function func_like(){
    var value = document.getElementById('like').src;
    if(value == "http://127.0.0.1:5500/Source/Icons/like_off.svg"){
        document.getElementById("like").src="../../Source/Icons/like_on.svg"
    }
    else{
        document.getElementById("like").src="../../Source/Icons/like_off.svg"
    }
}
function func_like2(){
    var value2 = document.getElementById('like2').src;
    if(value2 == "http://127.0.0.1:5500/Source/Icons/like_off.svg"){
        document.getElementById("like2").src="../../Source/Icons/like_on.svg"
    }
    else{
        document.getElementById("like2").src="../../Source/Icons/like_off.svg"
    }
}
function func_like3(){
    var value3 = document.getElementById('like3').src;
    if(value3 == "http://127.0.0.1:5500/Source/Icons/like_off.svg"){
        document.getElementById("like3").src="../../Source/Icons/like_on.svg"
    }
    else{
        document.getElementById("like3").src="../../Source/Icons/like_off.svg"
    }
}
function hamburger(){//hamburger
    let var_display = document.getElementById('menu').style.display //get attr display
    if(var_display === ""){ //проверяю есть ли что то в нем
        document.getElementById('menu').style.display = "flex"
    } else{
        document.getElementById('menu').style.display = ""
    }
}