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


let block = "";
let url_image = 'url("/блоки/1780225422470.jpg")';

if(level_number == 1){
    block = level.level_1
    let url_image = 'url("/блоки/1780225422470.jpg")';
    console.log("успешно")
    console.log(block)
}
if(level_number == 2){
    block = level.level_2
    let url_image = 'url("/блоки/1780225422470.jpg")';
    console.log("успешно")
    console.log(block)
}
if(level_number == 3){
    block = level.level_3
    let url_image = 'url("/блоки/1780225422470.jpg")';
    console.log("успешно")
    console.log(block)
}
if(level_number == 4){
    block = level.level_4
    let url_image = 'url("/блоки/1780225422470.jpg")';
    console.log("успешно")
    console.log(block)
}
if(level_number == 5){
    block = level.level_5
    let url_image = 'url("/блоки/1780225422470.jpg")';
    console.log("успешно")
    console.log(block)
}
if(level_number == 6){
    block = level.level_6
    let url_image = 'url("/блоки/1780225422480.jpg")';
    console.log("успешно")
    console.log(block)
}
if(level_number == 7){
    block = level.level_7
    let url_image = 'url("/блоки/1780225422480.jpg")';
    console.log("успешно")
    console.log(block)
}
if(level_number == 8){
     block = level.level_8
    let url_image = 'url("/блоки/1780225422480.jpg")';
    console.log("успешно")
    console.log(block)
}
if(level_number == 9){
    block = level.level_9
    let url_image = 'url("/блоки/1780225422480.jpg")';
    console.log("успешно")
    console.log(block)
}
if(level_number == 10){
    block = level.level_10
    let url_image = 'url("/блоки/1780225422480.jpg")';
    console.log("успешно")
    console.log(block)
}
if(level_number == 11){
    block = level.level_11
    let url_image = 'url("/блоки/1780225422474.jpg")';
    console.log("успешно")
    console.log(block)
}
if(level_number == 12){
    block = level.level_12
    let url_image = 'url("/блоки/1780225422474.jpg")';
    console.log("успешно")
    console.log(block)
}
if(level_number == 13){
    block = level.level_13
    let url_image = 'url("/блоки/1780225422474.jpg")';
    console.log("успешно")
    console.log(block)
}
if(level_number == 14){
    block = level.level_14
    let url_image = 'url("/блоки/1780225422464.jpg")';
    console.log("успешно")
    console.log(block)
}
if(level_number == 15){
    block = level.level_15
    let url_image = 'url("/блоки/1780225422460.jpg")';
    console.log("успешно")
    console.log(block)
}
if(level_number == 16){
    block = level.level_16
    let url_image = 'url("/блоки/1780225422460.jpg")';
    console.log("успешно")
    console.log(block)
}
if(level_number == 17){
    block = level.level_17
    let url_image = 'url("/блоки/1780225422460.jpg")';
    console.log("успешно")
    console.log(block)
}
if(level_number == 18){
    block = level.level_18
    let url_image = 'url("/блоки/1780225422457.jpg")';
    console.log("успешно")
    console.log(block)
}
if(level_number == 19){
    block = level.level_19
    let url_image = 'url("/блоки/1780225422454.jpg")';
    console.log("успешно")
    console.log(block)
}
if(level_number == 20){
    block = level.level_20
    let url_image = 'url("/блоки/1780225422451.jpg")';
    console.log("успешно")
    console.log(block)
}
if(level_number == 21){
    block = level.level_21
    let url_image = 'url("/блоки/1780225422448.jpg")';
    console.log("успешно")
    console.log(block)
}
if(level_number == 22){
    block = level.level_22
    let url_image = 'url("/блоки/1780225422445.jpg")';
    console.log("успешно")
    console.log(block)
}

console.log(level_number)
console.log(block)
var last_id = 1;
var poskey = 1;
var coordination = [];

for(const varblock in block){
    let blockx = block[varblock]['pos_x']*100-50;
    let blocky = block[varblock]['pos_y']*100-50;
    let pos_pers_x = blockx + 50;
    let pos_pers_y = blocky + 50;
    if(block[varblock].type == 1){
        document.getElementById("pos_1-"+[last_id]).style.height = 100+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 100+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundImage = url_image;
        document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
    }
    if(block[varblock].type == 2){
        document.getElementById("pos_1-"+[last_id]).style.height = 100+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 100+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "yellow";
        document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
    }
    if(block[varblock].type == 3){
        document.getElementById("pos_1-"+[last_id]).style.height = 100+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 100+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "green";
        document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
    }
    if(block[varblock].type == 4){
        document.getElementById("pos_1-"+[last_id]).style.height = 100+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 100+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "orange";
        document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
    }
    if(block[varblock].type == 5){
        document.getElementById("pos_1-"+[last_id]).style.height = 100+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 100+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "red";
        document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
    }
    if(block[varblock].type == 6){
        document.getElementById("pos_1-"+[last_id]).style.height = 100+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 100+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "darggreen";
        document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
    }
    if(block[varblock].type == 7){
        document.getElementById("pos_1-"+[last_id]).style.height = 100+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 100+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "blue";
        document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
    }
    if(block[varblock].type == 8){
        document.getElementById("pos_1-"+[last_id]).style.height = 100+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 100+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "darkgray";
        document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
    }
    if(block[varblock].type == 9){
        document.getElementById("pos_1-"+[last_id]).style.height = 100+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 100+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "lightgray";
        document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
    }
    console.log(coordination)
    console.log("x")
    console.log(blockx)
    console.log("y")
    console.log(blocky)
    var last_id = last_id + 1;
}

for(const waykey in block){
    console.log(waykey)
    if(block[waykey] != ""){
        let block_1 = block[waykey]['pos-y-start']
        if(block_1 == undefined){
            for(let i = block[waykey]['pos-x-end']; i >= block[waykey]["pos-x-start"]; i--){
                let x_pos = i*100-50
                let y_pos = block[waykey]['pos-y']*100-50
                let pos_pers_x = x_pos + 50;
                let pos_pers_y = y_pos + 50;
                console.log('координаты объектов xy')
                console.log(x_pos)
                console.log(y_pos)
                if(block[waykey].type == 1){
                    document.getElementById("pos_1-"+[last_id]).style.height = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundImage = url_image;
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "dark";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundSize = "cover";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundPosition = "center";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
                }
                if(block[waykey].type == 2){
                    document.getElementById("pos_1-"+[last_id]).style.height = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "yellow";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
                }
                if(block[waykey].type == 3){
                    document.getElementById("pos_1-"+[last_id]).style.height = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "green";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
                }
                if(block[waykey].type == 4){
                    document.getElementById("pos_1-"+[last_id]).style.height = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "orange";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
                }
                if(block[waykey].type == 5){
                    document.getElementById("pos_1-"+[last_id]).style.height = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "red";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
                }
                if(block[waykey].type == 6){
                    document.getElementById("pos_1-"+[last_id]).style.height = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "darggreen";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
                }
                if(block[waykey].type == 7){
                    document.getElementById("pos_1-"+[last_id]).style.height = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "blue";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
                }
                if(block[waykey].type == 8){
                    document.getElementById("pos_1-"+[last_id]).style.height = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "darkgray";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
                }
                if(block[waykey].type == 9){
                    document.getElementById("pos_1-"+[last_id]).style.height = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 100+"px";
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
                let y_pos = i*100-50
                let x_pos = block[waykey]['pos-x']*100-50
                let pos_pers_x = x_pos + 50;
                let pos_pers_y = y_pos + 50;
                console.log('координаты объектов yx')
                console.log(x_pos)
                console.log(y_pos)
                if(block[waykey].type == 1){
                    document.getElementById("pos_1-"+[last_id]).style.height = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundImage = url_image;
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "dark";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundSize = "cover";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundPosition = "center";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
                }
                if(block[waykey].type == 2){
                    document.getElementById("pos_1-"+[last_id]).style.height = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "yellow";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
                }
                if(block[waykey].type == 3){
                    document.getElementById("pos_1-"+[last_id]).style.height = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "green";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
                }
                if(block[waykey].type == 4){
                    document.getElementById("pos_1-"+[last_id]).style.height = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "orange";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
                }
                if(block[waykey].type == 5){
                    document.getElementById("pos_1-"+[last_id]).style.height = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "red";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
                }
                if(block[waykey].type == 6){
                    document.getElementById("pos_1-"+[last_id]).style.height = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "darggreen";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
                }
                if(block[waykey].type == 7){
                    document.getElementById("pos_1-"+[last_id]).style.height = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "blue";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
                }
                if(block[waykey].type == 8){
                    document.getElementById("pos_1-"+[last_id]).style.height = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "darkgray";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
                }
                if(block[waykey].type == 9){
                    document.getElementById("pos_1-"+[last_id]).style.height = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 100+"px";
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


console.log("корды")
console.log(coordination)

const mover = document.getElementById("move_right")
let interval
let count = 0;
let move_event = 0;

mover.addEventListener('mouseup', event => {
    console.log("отпустили правую")
    clearInterval(interval)
    interval = setInterval(() => { 
        count = count - 10;
        if(count < 0){
            count = 0
            clearInterval(interval)
        }
        console.log(count)
    }, 100)
})
mover.addEventListener('mousedown', event => {
    console.log('зажали правую')
    clearInterval(interval)
    interval = setInterval(() => {
        if(count > 150){
            count = 150
        }
        count ++
        count ++
        count ++
        console.log(count)
    }, 50)
})


mover.addEventListener('touchend', event => {
    console.log("отпустили правую")
    clearInterval(interval)
    interval = setInterval(() => { 
        count = count - 10;
        if(count < 0){
            count = 0
            clearInterval(interval)
        }
        console.log(count)
    }, 100)
})
mover.addEventListener('touchstart', event => {
    console.log('зажали правую')
    clearInterval(interval)
    interval = setInterval(() => {
        if(count > 150){
            count = 150
        }
        count ++
        count ++
        count ++
        console.log(count)
    }, 50)
})


const movel = document.getElementById("move_left")
let interval_l
let count_l = 0;

movel.addEventListener('mouseup', event => {
    console.log("отпустили левую")
    clearInterval(interval_l)
    interval_l = setInterval(() => { 
        count_l = count_l - 10;
        if(count_l < 0){
            count_l = 0
            clearInterval(interval_l)
        }
        console.log(count_l)
    }, 100)
})
movel.addEventListener('mousedown', event => {
    console.log('зажали левую')
    clearInterval(interval_l)
    interval_l = setInterval(() => {
        if(count_l > 150){
            count_l = 150
        }
        count_l ++
        count_l ++
        count_l ++
        console.log(count_l)
    }, 50)
})


movel.addEventListener('touchend', event => {
    console.log("отпустили левую")
    clearInterval(interval_l)
    interval_l = setInterval(() => { 
        count_l = count_l - 10;
        if(count_l < 0){
            count_l = 0
            clearInterval(interval_l)
        }
        console.log(count_l)
    }, 100)
})
movel.addEventListener('touchstart', event => {
    console.log('зажали левую')
    clearInterval(interval_l)
    interval_l = setInterval(() => {
        if(count_l > 150){
            count_l = 150
        }
        count_l ++
        count_l ++
        count_l ++
        console.log(count_l)
    }, 50)
})

const movej = document.getElementById("move_jump")
let count_j = 0;


window.jump=
function jump(){
    while(true){
        count_j = 100
        count_j - 12



        if(document.getElementById('pers').getBoundingClientRect().left == coordination.pos_pers_x){
            if(document.getElementById('pers').getBoundingClientRect().top == pos_pers_y){
                break
            }
        }
    }
}

console.log(block)