function func_like(element){
    if(element.src === "file:///D:/CodeSaves/Projects/LOGOIPSUM/Source/Icons/like_off.svg"){
        element.src="../../Source/Icons/like_on.svg"
    }
    else{
        element.src="../../Source/Icons/like_off.svg"
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