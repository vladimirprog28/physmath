import level from './phys.json' with { type: "json" };

let level_number = 0;

const savedDataString = localStorage.getItem('physData');

if(savedDataString){
    const data = JSON.parse(savedDataString);
    level_number = data.level_number.n;
    console.log("успешно", data);
} else {
    console.log("no")
}

const elelel = document.getElementById("el_1")
let block = "";
let url_image = 'url("./1780225422470.jpg")';

if(level_number == 1){
    block = level.level_1
    url_image = 'url("./1780225422470.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = level.level_1.text
}
if(level_number == 2){
    block = level.level_2
  url_image = 'url("./1780225422470.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = level.level_1.text
}
if(level_number == 3){
    block = level.level_3
    url_image = 'url("./1780225422470.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = level.level_1.text
}
if(level_number == 4){
    block = level.level_4
    url_image = 'url("./1780225422470.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = level.level_1.text
}
if(level_number == 5){
    block = level.level_5
    url_image = 'url("./1780225422470.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = level.level_1.text
}
if(level_number == 6){
    block = level.level_6
    url_image = 'url("./1780225422480.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = level.level_2.text
}
if(level_number == 7){
    block = level.level_7
    url_image = 'url("./1780225422480.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = level.level_2.text
}
if(level_number == 8){
    block = level.level_8
    url_image = 'url("./1780225422480.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = level.level_2.text
}
if(level_number == 9){
    block = level.level_9
    url_image = 'url("./1780225422480.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = level.level_2.text
}
if(level_number == 10){
    block = level.level_10
    url_image = 'url("./1780225422480.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = level.level_2.text
}
if(level_number == 11){
    block = level.level_11
    url_image = 'url("./1780225422474.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = level.level_3.text
}
if(level_number == 12){
    block = level.level_12
    url_image = 'url("./1780225422474.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = level.level_3.text
}
if(level_number == 13){
    block = level.level_13
    url_image = 'url("./1780225422474.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = level.level_4.text
}
if(level_number == 14){
    block = level.level_14
    url_image = 'url("./1780225422464.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = level.level_5.text
}
if(level_number == 15){
    block = level.level_15
    url_image = 'url("./1780225422460.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = level.level_6.text
}
if(level_number == 16){
    block = level.level_16
    url_image = 'url("./1780225422460.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = level.level_7.text
}
if(level_number == 17){
    block = level.level_17
    url_image = 'url("./1780225422460.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = level.level_7.text
}
if(level_number == 18){
    block = level.level_18
    url_image = 'url("./1780225422457.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = level.level_7.text
}
if(level_number == 19){
    block = level.level_19
    url_image = 'url("./1780225422454.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = level.level_8.text
}
if(level_number == 20){
    block = level.level_20
    url_image = 'url("./1780225422451.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = level.level_9.text
}
if(level_number == 21){
    block = level.level_21
    url_image = 'url("./1780225422448.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = level.level_10.text
}
if(level_number == 22){
    block = level.level_22
    url_image = 'url("./1780225422445.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = level.level_11.text
}

console.log(level_number)
console.log(url_image)
console.log(block)
var last_id = 1;
var poskey = 1;
var coordination = [];


for(const varblock in block){
    let blockx = block[varblock]['pos_x']*10+5;
    let blocky = block[varblock]['pos_y']*10+5;
    let pos_pers_x = blockx +25;
    let pos_pers_y = blocky +25;
    if(block[varblock].type == 1){
        document.getElementById("pos_1-"+[last_id]).style.height = 50+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 50+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundImage = url_image;
        document.getElementById("pos_1-"+[last_id]).style.position = "absolute";

    }
    if(block[varblock].type == 2){
        document.getElementById("pos_1-"+[last_id]).style.height = 50+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 50+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "yellow";
        document.getElementById("pos_1-"+[last_id]).style.position = "absolute";

    }
    if(block[varblock].type == 3){
        document.getElementById("pos_1-"+[last_id]).style.height = 50+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 50+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "green";
        document.getElementById("pos_1-"+[last_id]).style.position = "absolute";

    }
    if(block[varblock].type == 4){
        document.getElementById("pos_1-"+[last_id]).style.height = 50+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 50+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "orange";
        document.getElementById("pos_1-"+[last_id]).style.position = "absolute";

    }
    if(block[varblock].type == 5){
        document.getElementById("pos_1-"+[last_id]).style.height = 50+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 50+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "red";
        document.getElementById("pos_1-"+[last_id]).style.position = "absolute";

    }
    if(block[varblock].type == 6){
        document.getElementById("pos_1-"+[last_id]).style.height = 50+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 50+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "darggreen";
        document.getElementById("pos_1-"+[last_id]).style.position = "absolute";

    }
    if(block[varblock].type == 7){
        document.getElementById("pos_1-"+[last_id]).style.height = 50+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 50+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "blue";
        document.getElementById("pos_1-"+[last_id]).style.position = "absolute";

    }
    if(block[varblock].type == 8){
        document.getElementById("pos_1-"+[last_id]).style.height = 50+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 50+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "darkgray";
        document.getElementById("pos_1-"+[last_id]).style.position = "absolute";

    }
    if(block[varblock].type == 9){
        document.getElementById("pos_1-"+[last_id]).style.height = 50+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 50+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "lightgray";
        document.getElementById("pos_1-"+[last_id]).style.position = "absolute";

    }
    var last_id = last_id + 1;
}

for(const waykey in block){
    console.log(waykey)
    if(block[waykey] != ""){
        let block_1 = block[waykey]['pos-y-start']
        if(block_1 == undefined){
            for(let i = block[waykey]['pos-x-end']; i >= block[waykey]["pos-x-start"]; i--){
                let x_pos = i*10+5
                let y_pos = block[waykey]['pos-y']*10+5
                let pos_pers_x = x_pos +25;
                let pos_pers_y = y_pos +25;
                console.log('координаты объектов xy')
                console.log(x_pos)
                console.log(y_pos)
                if(block[waykey].type == 1){
                    document.getElementById("pos_1-"+[last_id]).style.height = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundImage = url_image;
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "dark";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundSize = "cover";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundPosition = "center";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
            
                }
                if(block[waykey].type == 2){
                    document.getElementById("pos_1-"+[last_id]).style.height = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "yellow";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
            
                }
                if(block[waykey].type == 3){
                    document.getElementById("pos_1-"+[last_id]).style.height = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "green";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
            
                }
                if(block[waykey].type == 4){
                    document.getElementById("pos_1-"+[last_id]).style.height = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "orange";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
            
                }
                if(block[waykey].type == 5){
                    document.getElementById("pos_1-"+[last_id]).style.height = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "red";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
            
                }
                if(block[waykey].type == 6){
                    document.getElementById("pos_1-"+[last_id]).style.height = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "darggreen";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
            
                }
                if(block[waykey].type == 7){
                    document.getElementById("pos_1-"+[last_id]).style.height = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "blue";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
            
                }
                if(block[waykey].type == 8){
                    document.getElementById("pos_1-"+[last_id]).style.height = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "darkgray";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
            
                }
                if(block[waykey].type == 9){
                    document.getElementById("pos_1-"+[last_id]).style.height = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "lightgray";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
            
                }
                console.log("последний ID" + last_id)
                var last_id = last_id + 1;
            }
        } else {
            for(let i = block[waykey]['pos-y-start']; i >= block[waykey]['pos-y-end']; i--){
                let y_pos = i*50+25
                let x_pos = block[waykey]['pos-x']*50+25
                let pos_pers_x = x_pos +25;
                let pos_pers_y = y_pos +25;
                console.log('координаты объектов yx')
                console.log(x_pos)
                console.log(y_pos)
                if(block[waykey].type == 1){
                    document.getElementById("pos_1-"+[last_id]).style.height = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundImage = url_image;
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "dark";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundSize = "cover";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundPosition = "center";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
            
                }
                if(block[waykey].type == 2){
                    document.getElementById("pos_1-"+[last_id]).style.height = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "yellow";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
            
                }
                if(block[waykey].type == 3){
                    document.getElementById("pos_1-"+[last_id]).style.height = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "green";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
            
                }
                if(block[waykey].type == 4){
                    document.getElementById("pos_1-"+[last_id]).style.height = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "orange";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
            
                }
                if(block[waykey].type == 5){
                    document.getElementById("pos_1-"+[last_id]).style.height = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "red";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
            
                }
                if(block[waykey].type == 6){
                    document.getElementById("pos_1-"+[last_id]).style.height = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "darggreen";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
            
                }
                if(block[waykey].type == 7){
                    document.getElementById("pos_1-"+[last_id]).style.height = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "blue";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
            
                }
                if(block[waykey].type == 8){
                    document.getElementById("pos_1-"+[last_id]).style.height = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "darkgray";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
            
                }
                if(block[waykey].type == 9){
                    document.getElementById("pos_1-"+[last_id]).style.height = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 50+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "lightgray";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
            
                }
                console.log("последний ID" + last_id)
                var last_id = last_id + 1;
            }
        }

        console.log(block_1)
    }
}


// Получаем элементы
const pers = document.getElementById('pers');
const moveLeftBtn = document.getElementById('move_left');
const moveRightBtn = document.getElementById('move_right');
const jumpBtn = document.getElementById('move_jump');

// Получаем все объекты для коллизии
const collisionObjects = document.querySelectorAll('.object_1');

// Настройки физики
const physics = {
  gravity: 2,
  jumpForce: -15,
  moveSpeed: 1.4,
  friction: 0.8
};

// Размеры персонажа
const characterSize = {
  width:50,
  height: 50
};

// Состояние персонажа
const state = {
  x: 10, // Начальная позиция по X
  y: 120, // Начальная позиция по Y
  velX: 0, // Скорость по X
  velY: 0, // Скорость по Y
  isOnGround: false, // На земле ли персонаж
  isJumping: false // В прыжке ли персонаж
};

// Флаги зажатия кнопок
const keyStates = {
  left: false,
  right: false,
  jump: false
};

// Обработчики зажатия и отпускания кнопок
moveLeftBtn.addEventListener('mousedown', () => { keyStates.left = true; });
moveLeftBtn.addEventListener('mouseup', () => { keyStates.left = false; });
moveLeftBtn.addEventListener('mouseleave', () => { keyStates.left = false; });

moveRightBtn.addEventListener('mousedown', () => { keyStates.right = true; });
moveRightBtn.addEventListener('mouseup', () => { keyStates.right = false; });
moveRightBtn.addEventListener('mouseleave', () => { keyStates.right = false; });

jumpBtn.addEventListener('mousedown', () => { keyStates.jump = true; });
jumpBtn.addEventListener('mouseup', () => { keyStates.jump = false; });

// Функция получения размеров объектов
function getObjectRects() {
  const rects = [];
  collisionObjects.forEach(obj => {
    const rect = obj.getBoundingClientRect();
    const bodyRect = document.body.getBoundingClientRect();

    rects.push({
      left: rect.left - bodyRect.left,
      top: rect.top - bodyRect.top,
      right: rect.right - bodyRect.left,
      bottom: rect.bottom - bodyRect.top,
      width: rect.width,
      height: rect.height
    });
  });
  return rects;
}

// Функция проверки коллизии между двумя прямоугольниками
function checkCollision(rect1, rect2) {
  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}

// Функция проверки коллизии персонажа с объектами
function checkCollisionsWithObjects() {
  const characterRect = {
    left: state.x,
    top: state.y,
    right: state.x + characterSize.width,
    bottom: state.y + characterSize.height
  };

  const objectRects = getObjectRects();
  let collided = false;

  objectRects.forEach(objectRect => {
    if (checkCollision(characterRect, objectRect)) {
      // Определяем сторону столкновения
      const fromTop = Math.abs(characterRect.bottom - objectRect.top);
      const fromBottom = Math.abs(characterRect.top - objectRect.bottom);
      const fromLeft = Math.abs(characterRect.right - objectRect.left);
      const fromRight = Math.abs(characterRect.left - objectRect.right);

      const minDistance = Math.min(fromTop, fromBottom, fromLeft, fromRight);

      if (minDistance === fromTop && state.velY > 0) {
        // Столкновение снизу (персонаж падает на объект)
        state.y = objectRect.top - characterSize.height;
        state.velY = 0;
        state.isOnGround = true;
        state.isJumping = false;
        collided = true;
      } else if (minDistance === fromBottom && state.velY < 0) {
        // Столкновение сверху (персонаж ударяется головой)
        state.y = objectRect.bottom;
        state.velY = 0;
      } else if (minDistance === fromLeft && state.velX > 0) {
        // Столкновение слева
        state.x = objectRect.left - characterSize.width;
        state.velX = 0;
      } else if (minDistance === fromRight && state.velX < 0) {
        // Столкновение справа
        state.x = objectRect.right;
        state.velX = 0;
      }
    }
  });

  // Если ни с чем не столкнулись, персонаж не на земле
  if (!collided) {
    state.isOnGround = false;
  }
}

// Функция телепортации при достижении координаты Y = 2000
function checkTeleport() {
  if (state.y >= 2000) {
    // Телепортируем в начало (X = 50)
    state.x = 50;
    state.y = 600
    // Сохраняем текущую высоту (Y)
    // Можно также сбросить Y: state.y = 600; если нужно

    // Обнуляем скорости для плавности
    state.velX = 0;
    state.velY = 0;

    // Обновляем визуальную позицию
    pers.style.left = Math.round(state.x) + 'px';
    pers.style.top = Math.round(state.y) + 'px';

    console.log('Телепортация: персонаж переместился в начало!');
  }
}

// Функция обновления позиции персонажа
function updatePosition() {
  // Сброс горизонтальной скорости, если нет зажатых кнопок движения
  if (!keyStates.left && !keyStates.right) {
    state.velX *= physics.friction;
    // Округление до 0, если скорость очень мала
    if (Math.abs(state.velX) < 0.1) state.velX = 0;
  }

  // Обработка зажатых кнопок
  if (keyStates.left) state.velX = -physics.moveSpeed;
  if (keyStates.right) state.velX = physics.moveSpeed;

  // Прыжок при зажатой кнопке и на земле
  if (keyStates.jump && state.isOnGround && !state.isJumping) {
    state.velY = physics.jumpForce;
    state.isOnGround = false;
    state.isJumping = true;
  }

  // Применяем гравитацию, только если не на земле
  if (!state.isOnGround) {
    state.velY += physics.gravity;
  }

  // Обновляем позицию
  state.x += state.velX;
  state.y += state.velY;

  // Проверяем коллизию с объектами
  checkCollisionsWithObjects();

  // Проверяем условие телепортации
  checkTeleport();

  // Ограничиваем движение по горизонтали (опционально)
  if (state.x < 0) state.x = 0;
  if (state.y < 0) state.y = 0;

  // Обновляем визуальную позицию элемента
  pers.style.left = Math.round(state.x) + 'px';
  pers.style.top = Math.round(state.y) + 'px';
}

// Игровой цикл
function gameLoop() {
  updatePosition();
  requestAnimationFrame(gameLoop);
}

// Запускаем игровой цикл
gameLoop();
