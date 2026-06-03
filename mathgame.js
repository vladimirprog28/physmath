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
let url_image = 'url("/1780225422470.jpg")';

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
    let pos_pers_x = blockx +5;
    let pos_pers_y = blocky +5;
    if(block[varblock].type == 1){
        document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundImage = url_image;
        document.getElementById("pos_1-"+[last_id]).style.position = "absolute";

    }
    if(block[varblock].type == 2){
        document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "yellow";
        document.getElementById("pos_1-"+[last_id]).style.position = "absolute";

    }
    if(block[varblock].type == 3){
        document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "green";
        document.getElementById("pos_1-"+[last_id]).style.position = "absolute";

    }
    if(block[varblock].type == 4){
        document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "orange";
        document.getElementById("pos_1-"+[last_id]).style.position = "absolute";

    }
    if(block[varblock].type == 5){
        document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "red";
        document.getElementById("pos_1-"+[last_id]).style.position = "absolute";

    }
    if(block[varblock].type == 6){
        document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "darggreen";
        document.getElementById("pos_1-"+[last_id]).style.position = "absolute";

    }
    if(block[varblock].type == 7){
        document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "blue";
        document.getElementById("pos_1-"+[last_id]).style.position = "absolute";

    }
    if(block[varblock].type == 8){
        document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "darkgray";
        document.getElementById("pos_1-"+[last_id]).style.position = "absolute";

    }
    if(block[varblock].type == 9){
        document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
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
                let pos_pers_x = x_pos +5;
                let pos_pers_y = y_pos +5;
                console.log('координаты объектов xy')
                console.log(x_pos)
                console.log(y_pos)
                if(block[waykey].type == 1){
                    document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundImage = url_image;
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "dark";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundSize = "cover";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundPosition = "center";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
            
                }
                if(block[waykey].type == 2){
                    document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "yellow";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
            
                }
                if(block[waykey].type == 3){
                    document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "green";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
            
                }
                if(block[waykey].type == 4){
                    document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "orange";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
            
                }
                if(block[waykey].type == 5){
                    document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "red";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
            
                }
                if(block[waykey].type == 6){
                    document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "darggreen";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
            
                }
                if(block[waykey].type == 7){
                    document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "blue";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
            
                }
                if(block[waykey].type == 8){
                    document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "darkgray";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
            
                }
                if(block[waykey].type == 9){
                    document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
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
                let y_pos = i*10+5
                let x_pos = block[waykey]['pos-x']*10+5
                let pos_pers_x = x_pos +5;
                let pos_pers_y = y_pos +5;
                console.log('координаты объектов yx')
                console.log(x_pos)
                console.log(y_pos)
                if(block[waykey].type == 1){
                    document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundImage = url_image;
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "dark";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundSize = "cover";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundPosition = "center";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
            
                }
                if(block[waykey].type == 2){
                    document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "yellow";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
            
                }
                if(block[waykey].type == 3){
                    document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "green";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
            
                }
                if(block[waykey].type == 4){
                    document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "orange";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
            
                }
                if(block[waykey].type == 5){
                    document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "red";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
            
                }
                if(block[waykey].type == 6){
                    document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "darggreen";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
            
                }
                if(block[waykey].type == 7){
                    document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "blue";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
            
                }
                if(block[waykey].type == 8){
                    document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "darkgray";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
            
                }
                if(block[waykey].type == 9){
                    document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
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

// Добавляем HTML‑элементы для мобильных кнопок (если их ещё нет)
// ИЗМЕНЕНИЕ: добавляем мобильные кнопки в DOM
const mobileControls = document.createElement('div');
mobileControls.id = 'mobile-controls';
mobileControls.style.cssText = 'display: none; position: fixed; bottom: 20px; left: 0; width: 100%; z-index: 1000; justify-content: space-around;';

const mobileLeft = document.createElement('button');
mobileLeft.id = 'mobile-left';
mobileLeft.className = 'mobile-btn';
mobileLeft.textContent = '←';
mobileLeft.style.cssText = 'width: 60px; height: 60px; font-size: 24px; opacity: 0.7; background: rgba(0, 0, 0, 0.5); color: white; border: none; border-radius: 50%; margin: 10px;';

const mobileRight = document.createElement('button');
mobileRight.id = 'mobile-right';
mobileRight.className = 'mobile-btn';
mobileRight.textContent = '→';
mobileRight.style.cssText = mobileLeft.style.cssText;

const mobileJump = document.createElement('button');
mobileJump.id = 'mobile-jump';
mobileJump.className = 'mobile-btn jump-btn';
mobileJump.textContent = '↑';
mobileJump.style.cssText = mobileLeft.style.cssText + 'position: absolute; right: 20px; bottom: 20px;';

mobileControls.appendChild(mobileLeft);
mobileControls.appendChild(mobileRight);
mobileControls.appendChild(mobileJump);
document.body.appendChild(mobileControls);

// Получаем все объекты для коллизии
const collisionObjects = document.querySelectorAll('.object_1');

// Настройки физики
const physics = {
  gravity: 0.1,
  jumpForce: -3.5,
  moveSpeed: 2,
  friction: 0.5,
  acceleration: 0.1,    // ускорение при старте
  maxSpeed: 1.5           // максимальная горизонтальная скорость
};

// Размеры персонажа
const characterSize = {
  width: 10,
  height: 10
};

// Состояние персонажа
const state = {
  x: 10, // Начальная позиция по X
  y: 70, // Начальная позиция по Y
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

// ИЗМЕНЕНИЕ: универсальная функция для добавления обработчиков событий
function addUniversalHandlers(element, direction) {
  const handleStart = (e) => {
    e.preventDefault();
    keyStates[direction] = true;
  };

  const handleEnd = (e) => {
    e.preventDefault();
    keyStates[direction] = false;
  };

  element.addEventListener('mousedown', handleStart);
  element.addEventListener('mouseup', handleEnd);
  element.addEventListener('touchstart', handleStart);
  element.addEventListener('touchend', handleEnd);
  element.addEventListener('mouseleave', handleEnd);
}

// ИЗМЕНЕНИЕ: настраиваем универсальные обработчики для всех кнопок
document.addEventListener('DOMContentLoaded', () => {
  // Компьютерные кнопки
  addUniversalHandlers(moveLeftBtn, 'left');
  addUniversalHandlers(moveRightBtn, 'right');
  addUniversalHandlers(jumpBtn, 'jump');

  // Мобильные кнопки
  const mobileLeftBtn = document.getElementById('mobile-left');
  const mobileRightBtn = document.getElementById('mobile-right');
  const mobileJumpBtn = document.getElementById('mobile-jump');

  addUniversalHandlers(mobileLeftBtn, 'left');
  addUniversalHandlers(mobileRightBtn, 'right');
  addUniversalHandlers(mobileJumpBtn, 'jump');

  // ИЗМЕНЕНИЕ: показываем мобильные кнопки на мобильных устройствах
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if (isMobile) {
    document.getElementById('mobile-controls').style.display = 'flex';
  }

  // ИЗМЕНЕНИЕ: обработчики клавиатуры
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'a') {
      keyStates.left = true;
      e.preventDefault();
    } else if (e.key === 'ArrowRight' || e.key === 'd') {
      keyStates.right = true;
      e.preventDefault();
    } else if (e.key === ' ' || e.key === 'w' || e.key === 'ArrowUp') {
      keyStates.jump = true;
      e.preventDefault();
    }
  });

  document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'a') keyStates.left = false;
    else if (e.key === 'ArrowRight' || e.key === 'd') keyStates.right = false;
    else if (e.key === ' ' || e.key === 'w' || e.key === 'ArrowUp') keyStates.jump = false;
  });
});

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
  if (state.y >= 200) {
    // Телепортируем в начало (X = 10)
    state.x = 10;
    state.y = 70;

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
  // Обработка нажатий с плавным ускорением
  if (keyStates.left) {
    state.velX -= physics.acceleration;
    if (state.velX < -physics.maxSpeed) state.velX = -physics.maxSpeed;
  } else if (keyStates.right) {
    state.velX += physics.acceleration;
    if (state.velX > physics.maxSpeed) state.velX = physics.maxSpeed;
  } else {
    // Плавное замедление
    if (state.velX !== 0) {
      const newVelX = state.velX * physics.friction;
      if (Math.abs(newVelX) < 0.1) state.velX = 0;
      else state.velX = newVelX;
    }
  }

  // Прыжок
  if (keyStates.jump && state.isOnGround && !state.isJumping) {
    state.velY = physics.jumpForce;
    state.isOnGround = false;
    state.isJumping = true;
  }

  // Гравитация
  if (!state.isOnGround) {
    state.velY += physics.gravity;
  }

  // Обновление позиции
  state.x += state.velX;
  state.y += state.velY;

  // Проверка коллизий и телепортации
  checkCollisionsWithObjects();
  checkTeleport();

  // Ограничения по краям экрана
  if (state.x < 0) state.x = 0;
  if (state.y < 0) state.y = 0;

  // Визуальное обновление
  pers.style.left = Math.round(state.x) + 'px';
  pers.style.top = Math.round(state.y) + 'px';
}

// Игровой цикл
function gameLoop() {
  updatePosition();
  requestAnimationFrame(gameLoop);
}

// Запускаем игровой цикл после полной загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
  gameLoop();
});