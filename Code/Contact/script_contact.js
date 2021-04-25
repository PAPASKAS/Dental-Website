function hamburger(){//hamburger
    let var_display = document.getElementById('menu').style.display //get attr display
    if(var_display === ""){ //проверяю есть ли что то в нем
        document.getElementById('menu').style.display = "flex"
    } else{
        document.getElementById('menu').style.display = ""
    }
}