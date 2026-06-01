
let colorNumber = 0;
function changeColor(){
    if(colorNumber == 0){
        //замена фото
        document.getElementById("bg_img-1").src = "back-physics_ground2.jpeg";
        //замена цвета причин
        document.getElementById("changeColor_page").style.background = "darkGreen";
        document.getElementById("changeColor_name_page").style.background = "springGreen";
        document.getElementById("changeColor_paragraff-1").style.background = "indigo";  
        document.getElementById("changeColor_paragraff-2").style.background = "indigo";
        document.getElementById("changeColor_paragraff-3").style.background = "indigo";
        document.getElementById("changeColor_paragraff-1").style.color = "white";  
        document.getElementById("changeColor_paragraff-2").style.color = "white";
        document.getElementById("changeColor_paragraff-3").style.color = "white";
        //замена заднего фона
        document.body.style.background = "midnightblue";
        //замена цвета навигатора
        document.getElementById("changeColor_page2").style.background = "darkGreen";
        document.getElementById("changeColor_open").style.background = "indigo";  
        document.getElementById("changeColor_open_help").style.background = "indigo";
        document.getElementById("changeColor_open_forum").style.background = "indigo";
        document.getElementById("changeColor_open").style.color = "white";
        document.getElementById("changeColor_open_help").style.color = "white";
        document.getElementById("changeColor_open_forum").style.color = "white";
        document.getElementById("changeColor_navigator").style.background = "springGreen";
        colorNumber = 1
    }
    else{
        //замена фото
        document.getElementById("bg_img-1").src = "back-physics_ground1.png";
        //замена заднего фона
        document.body.style.background = "tomato";
        //замена причин
        document.getElementById("changeColor_page").style.background = "rgb(255, 159, 43)";
        document.getElementById("changeColor_name_page").style.background = "bisque";
        document.getElementById("changeColor_paragraff-1").style.background = "rgb(255, 205, 140)";  
        document.getElementById("changeColor_paragraff-2").style.background = "rgb(255, 205, 140)";
        document.getElementById("changeColor_paragraff-3").style.background = "rgb(255, 205, 140)";
        document.getElementById("changeColor_paragraff-1").style.color = "black";  
        document.getElementById("changeColor_paragraff-2").style.color = "black";
        document.getElementById("changeColor_paragraff-3").style.color = "black";
        //замена цвета навигатора
        document.getElementById("changeColor_page2").style.background = "rgb(255, 159, 43)";
        document.getElementById("changeColor_open").style.background = "rgb(255, 205, 140)";  
        document.getElementById("changeColor_open_help").style.background = "rgb(255, 205, 140)";
        document.getElementById("changeColor_open_forum").style.background = "rgb(255, 205, 140)";
        document.getElementById("changeColor_open").style.color = "black";
        document.getElementById("changeColor_open_help").style.color = "black";
        document.getElementById("changeColor_open_forum").style.color = "black";
        document.getElementById("changeColor_navigator").style.background = "bisque";

        colorNumber = 0
    }
}

function fixLesson(){
    document.getElementById("chouse_lesson_1").style.position = "absolute";    
    document.getElementById("chouse_lesson_1").style.right = 99999 + "px";

    document.getElementById("chouse_lesson_2").style.opacity = "1";
    document.getElementById("chouse_lesson_3").style.opacity = "1";

}

function chouse_lesson1(){
    window.location.replace("physics.html")
}

function chouse_lesson2(){
    window.location.replace("math.html")
}

function singin(){
    window.location.replace("singin.html")
}

function open_the_helpfull(){
    window.location.replace("page_help.html")
}


