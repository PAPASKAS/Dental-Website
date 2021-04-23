function hamburger(){//hamburger
    let var_display = document.getElementById('menu').style.display //get attr display
    if(var_display === ""){ //проверяю есть ли что то в нем
        document.getElementById('menu').style.display = "flex"
    } else{
        document.getElementById('menu').style.display = ""
    }
}
function func_like(element){
    if(element.src === "file:///D:/CodeSaves/Projects/LOGOIPSUM/Source/Icons/like_off.svg"){
        element.src="../../Source/Icons/like_on.svg"
    }
    else{
        element.src="../../Source/Icons/like_off.svg"
    }
}


//slider
let current_slide = 0
let slide = document.querySelector(".move_slider")//not "slider" its a "sliders"
let viewSliders = document.querySelectorAll(".current_slide")//for color button
let counter_mob_slide = 2

slide.style.left = "0px"//фикс бага - первое перелистывание без анимации

let width_slide = document.querySelector(".slider").offsetWidth//Ширина слайдера

if(width_slide > 350){//Определяет что закрашивать(мобильная и десктопная версия)
    viewSliders[current_slide].style.backgroundColor = "#0096FF"
    viewSliders[current_slide].style.color = "white"
}else{
    let a = document.querySelectorAll(".current_slide")
    a[1].style.backgroundColor = "#0096FF"
    a[1].style.color = "white"
    a[1].textContent = "1"
    a[2].textContent = "2"
    a[0].style.display = "none"
}

function slider(){
    let width_slide = document.querySelector(".slider").offsetWidth//Ширина слайдера

    if(width_slide === 1170){
        if(current_slide < 3){
            viewSliders[current_slide].style.backgroundColor = "#F6F6F6";
            viewSliders[current_slide].style.color = "#BBBBBB"
                current_slide++
                slide.style.left = (-current_slide) * 1170 - 50 * current_slide + "px"
            viewSliders[current_slide].style.backgroundColor = "#0096FF"
            viewSliders[current_slide].style.color = "white"
        }else{
            viewSliders[current_slide].style.backgroundColor = "#F6F6F6";
            viewSliders[current_slide].style.color = "#BBBBBB"
                current_slide = 0
                slide.style.left = 0 + "px"
            viewSliders[current_slide].style.backgroundColor = "#0096FF"
            viewSliders[current_slide].style.color = "white"
        }
    }else if(width_slide === 761){
        if(current_slide < 5){
            viewSliders[current_slide].style.backgroundColor = "#F6F6F6";
            viewSliders[current_slide].style.color = "#BBBBBB"
                current_slide++
                slide.style.left = (-current_slide) * 761 - 50 * current_slide + "px"
            viewSliders[current_slide].style.backgroundColor = "#0096FF"
            viewSliders[current_slide].style.color = "white"
        }else{
            viewSliders[current_slide].style.backgroundColor = "#F6F6F6";
            viewSliders[current_slide].style.color = "#BBBBBB"
                current_slide = 0
                slide.style.left = 0 + "px"
            viewSliders[current_slide].style.backgroundColor = "#0096FF"
            viewSliders[current_slide].style.color = "white"
        }
    }else if(width_slide === 350 || width_slide === 320){
        if(current_slide < 11){
            let n = document.querySelectorAll(".current_slide")
            if(counter_mob_slide === 1){
                counter_mob_slide++
                n[0].style.display = "none"
            }else if(counter_mob_slide === 2){
                counter_mob_slide++
                n[0].style.display = "inline"
            }else if(counter_mob_slide === 11){
                counter_mob_slide++
                n[2].style.display = "none"
                current_slide++
            }else{
                counter_mob_slide++
                n[0].style.display = "inline"
                
            }
                n[0].textContent = counter_mob_slide - 1
                n[1].textContent = counter_mob_slide
                n[2].textContent = counter_mob_slide + 1
                current_slide++
                slide.style.left = (-current_slide) * 356 - 50 * current_slide + "px"
        }else{

            let n = document.querySelectorAll(".current_slide")
            n[2].style.display = "inline"
            n[2].textContent = "2"
            n[0].style.display = "none"
            n[1].textContent = "1"
            counter_mob_slide = 2

            current_slide = 0
            slide.style.left = 0 + "px"
        }
        
    }
}

//auto-swiper
setInterval(slider, 7000)