//hamburger
function hamburger(){
    let var_display = document.getElementById('menu').style.display //get attr display
    if(var_display === ""){ //проверяю есть ли что то в нем
        document.getElementById('menu').style.display = "flex"
    } else{
        document.getElementById('menu').style.display = ""
    }
}

//slider
let current_slide = 0
let slide = document.querySelector(".sliders")//not "slider" its a "sliders"
let viewSliders = document.querySelectorAll(".current_slide")//for color button
viewSliders[current_slide].style.backgroundColor = "#0096FF"
viewSliders[current_slide].style.color = "white"

slide.style.left = "0px"//фикс бага - первое перелистывание без анимации

function f_slider(){
    let width_slide = document.querySelector(".container").offsetWidth

    viewSliders[current_slide].style.backgroundColor = "#F6F6F6";
    viewSliders[current_slide].style.color = "#BBBBBB"
    
    if(current_slide < 3){
        current_slide++
    }else{
        current_slide = 0
    }

    viewSliders[current_slide].style.backgroundColor = "#0096FF"
    viewSliders[current_slide].style.color = "white"

    slide.style.left = (-current_slide) * width_slide - 23.3 * current_slide + "px" 
}

//laptop slider
let current_laptop_slide = 1

function right_laptop_arrow(){
    let width_slide = document.querySelector(".slider").offsetWidth
    
    if(width_slide === 872){
        if(current_laptop_slide < 14){
            slide.style.left = (-275 - 23.3) * current_laptop_slide + "px"
            current_laptop_slide++
        }else{
            slide.style.left = "0px"
            current_laptop_slide = 1
        }
    }else if(width_slide === 573){
        if(current_laptop_slide < 15){
            slide.style.left = (-275 - 23.3) * current_laptop_slide + "px"
            current_laptop_slide++
        }else{
            slide.style.left = "0px"
            current_laptop_slide = 1
        }
    }else if(width_slide === 320){
        if(current_laptop_slide < 16){
            slide.style.left = (-275 - 23.3) * current_laptop_slide + "px"
            current_laptop_slide++
        }else{
            slide.style.left = "0px"
            current_laptop_slide = 1
        }
    }
}

//auto-swiper
setInterval(screen_size_detection, 5000)

function screen_size_detection(){
    let width_slide = document.querySelector(".slider").offsetWidth//Определение ширины слайдера
    
    if(width_slide > 872){
        f_slider()
    }
    else{
        right_laptop_arrow()
    }
}