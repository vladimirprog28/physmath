import level from './phys.json' with { type: "json" };

var size_level_1 = Object.keys(level.level_1).length;

var last_id = 1;

var block = level.level_22

var last_id = 1;

for(const varblock in block){
    let blockx = block[varblock]['pos_x']*100-50;
    let blocky = block[varblock]['pos_y']*100-50;
    if(block[varblock].type == 1){
        document.getElementById("pos_1-"+[last_id]).style.height = 100+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 100+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "gray";
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
                console.log('координаты объектов xy')
                console.log(x_pos)
                console.log(y_pos)
                if(block[waykey].type == 1){
                    document.getElementById("pos_1-"+[last_id]).style.height = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "black";
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
                console.log('координаты объектов yx')
                console.log(x_pos)
                console.log(y_pos)
                if(block[waykey].type == 1){
                    document.getElementById("pos_1-"+[last_id]).style.height = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 100+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "black";
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



const move = document.getElementById("move_right")
let interval
let count = 0;
let move_event = 0;

move.addEventListener('mouseup', event => {
    console.log("отпустили")
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
move.addEventListener('mousedown', event => {
    console.log('зажали')
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


move.addEventListener('touchend', event => {
    console.log("отпустили")
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
move.addEventListener('touchstart', event => {
    console.log('зажали')
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




console.log(block)
console.log(size_level_1)