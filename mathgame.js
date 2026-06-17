import level from './math.json' with { type: "json" };

function buildLevelRects(block) {
  const rects = [];

  // точечные блоки
  for (const key in block) {
    if (!block.hasOwnProperty(key)) continue;
    const item = block[key];
    // если это точечный блок (есть pos_x, pos_y)
    if (item.pos_x !== undefined && item.pos_y !== undefined) {
      const x = item.pos_x * 10 + 5;
      const y = item.pos_y * 10 + 5;
      rects.push({ x, y, w: 10, h: 10, type: item.type });
    }
  }

  // range-блоки
  for (const key in block) {
    if (!block.hasOwnProperty(key)) continue;
    const item = block[key];
    if (item['pos-x-start'] !== undefined) {
      if (item['pos-y-start'] === undefined) {
        // горизонтальный ряд
        const y = item['pos-y'] * 10 + 5;
        for (let i = item['pos-x-end']; i >= item['pos-x-start']; i--) {
          const x = i * 10 + 5;
          rects.push({ x, y, w: 10, h: 10, type: item.type });
        }
      } else {
        // вертикальный ряд
        const x = item['pos-x'] * 10 + 5;
        for (let i = item['pos-y-start']; i >= item['pos-y-end']; i--) {
          const y = i * 10 + 5;
          rects.push({ x, y, w: 10, h: 10, type: item.type });
        }
      }
    }
  }

  return rects;
}

const savedLevelStr = localStorage.getItem('currentLevel');
const level_number = savedLevelStr ? Number(savedLevelStr) : 0;

if (level_number >= 1 && level_number <= 22) {
  const currentLevelData = level[`level_${level_number}`];
  // дальше инициализируешь игру с currentLevelData
} else {
  console.warn('Неверный номер уровня, старт с дефолтного');
}
let currentLevelRects = []
const savedDataString = localStorage.getItem('physData');

const elelel = document.getElementById("el_1")
let block = "";
let url_image = 'url("/1780225422470.jpg")';

if(level_number == 1){
    block = level.level_1
    url_image = 'url("./1780225422470.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = block.text;
    currentLevelRects = buildLevelRects(block);
}
if(level_number == 2){
    block = level.level_2
    url_image = 'url("./1780225422470.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = block.text;
    currentLevelRects = buildLevelRects(block);
}
if(level_number == 3){
    block = level.level_3
    url_image = 'url("./1780225422470.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = block.text;
    currentLevelRects = buildLevelRects(block);
}
if(level_number == 4){
    block = level.level_4
    url_image = 'url("./1780225422470.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = block.text;
    currentLevelRects = buildLevelRects(block);
}
if(level_number == 5){
    block = level.level_5
    url_image = 'url("./1780225422470.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = block.text;
    currentLevelRects = buildLevelRects(block);
}
if(level_number == 6){
    block = level.level_6
    url_image = 'url("./1780225422480.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = block.text;
    currentLevelRects = buildLevelRects(block);
}
if(level_number == 7){
    block = level.level_7
    url_image = 'url("./1780225422480.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = block.text;
    currentLevelRects = buildLevelRects(block);
}
if(level_number == 8){
    block = level.level_8
    url_image = 'url("./1780225422480.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = block.text;
    currentLevelRects = buildLevelRects(block);
}
if(level_number == 9){
    block = level.level_9
    url_image = 'url("./1780225422480.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = block.text;
    currentLevelRects = buildLevelRects(block);
}
if(level_number == 10){
    block = level.level_10
    url_image = 'url("./1780225422480.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = block.text;
    currentLevelRects = buildLevelRects(block);
}
if(level_number == 11){
    block = level.level_11
    url_image = 'url("./1780225422474.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = block.text;
    currentLevelRects = buildLevelRects(block);
}
if(level_number == 12){
    block = level.level_12
    url_image = 'url("./1780225422474.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = block.text;
    currentLevelRects = buildLevelRects(block);
}
if(level_number == 13){
    block = level.level_13
    url_image = 'url("./1780225422474.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = block.text;
    currentLevelRects = buildLevelRects(block);
}
if(level_number == 14){
    block = level.level_14
    url_image = 'url("./1780225422464.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = block.text;
    currentLevelRects = buildLevelRects(block);
}
if(level_number == 15){
    block = level.level_15
    url_image = 'url("./1780225422460.jpeg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = block.text;
    currentLevelRects = buildLevelRects(block);
}
if(level_number == 16){
    block = level.level_16
    url_image = 'url("./1780225422460.jpeg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = block.text;
    currentLevelRects = buildLevelRects(block);
}
if(level_number == 17){
    block = level.level_17
    url_image = 'url("./1780225422460.jpeg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = block.text;
    currentLevelRects = buildLevelRects(block);
}
if(level_number == 18){
    block = level.level_18
    url_image = 'url("./1780225422457.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = block.text;
    currentLevelRects = buildLevelRects(block);
}
if(level_number == 19){
    block = level.level_19
    url_image = 'url("./1780225422454.jpeg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = block.text;
    currentLevelRects = buildLevelRects(block);
}
if(level_number == 20){
    block = level.level_20
    url_image = 'url("./1780225422451.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = block.text;
    currentLevelRects = buildLevelRects(block);
}
if(level_number == 21){
    block = level.level_21
    url_image = 'url("./1780225422448.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = block.text;
    currentLevelRects = buildLevelRects(block);
}
if(level_number == 22){
    block = level.level_22
    url_image = 'url("./1780225422445.jpg")';
    console.log(url_image)
    console.log("успешно")
    console.log(block)
    elelel.textContent = block.text;
    currentLevelRects = buildLevelRects(block);
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

    const el = document.getElementById("pos_1-"+[last_id]);
    if (!el) continue; // защита, если такого элемента нет

    el.dataset.type = String(block[varblock].type); 
    if(block[varblock].type == 1){
        document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundImage = url_image;
        document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
        el.dataset.type = String(block[varblock].type);

    }
    if(block[varblock].type == 2){
        document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "yellow";
        document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
        el.dataset.type = String(block[varblock].type);

    }
    if(block[varblock].type == 3){
        document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "green";
        document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
        el.dataset.type = String(block[varblock].type);

    }
    if(block[varblock].type == 4){
        document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "orange";
        document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
        el.dataset.type = String(block[varblock].type);

    }
    if(block[varblock].type == 5){
        document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "red";
        document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
        el.dataset.type = String(block[varblock].type);

    }
    if(block[varblock].type == 6){
        document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "darggreen";
        document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
        el.dataset.type = String(block[varblock].type);

    }
    if(block[varblock].type == 7){
        document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "blue";
        document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
        el.dataset.type = String(block[varblock].type);

    }
    if(block[varblock].type == 8){
        document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "darkgray";
        document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
        el.dataset.type = String(block[varblock].type);

    }
    if(block[varblock].type == 9){
        document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
        document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
        document.getElementById("pos_1-"+[last_id]).style.left = blockx + "px";
        document.getElementById("pos_1-"+[last_id]).style.bottom = blocky + "px";
        document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "lightgray";
        document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
        el.dataset.type = String(block[varblock].type);

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

                const el = document.getElementById("pos_1-"+[last_id]);
                if (!el) continue;

                el.dataset.type = String(block[waykey].type);

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
                    el.dataset.type = String(block[waykey].type);
            
                }
                if(block[waykey].type == 2){
                    document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "yellow";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
                    el.dataset.type = String(block[waykey].type);
            
                }
                if(block[waykey].type == 3){
                    document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "green";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
                    el.dataset.type = String(block[waykey].type);
            
                }
                if(block[waykey].type == 4){
                    document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "orange";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
                    el.dataset.type = String(block[waykey].type);
            
                }
                if(block[waykey].type == 5){
                    document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "red";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
                    el.dataset.type = String(block[waykey].type);
            
                }
                if(block[waykey].type == 6){
                    document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "darggreen";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
                    el.dataset.type = String(block[waykey].type);
            
                }
                if(block[waykey].type == 7){
                    document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "blue";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
                    el.dataset.type = String(block[waykey].type);
            
                }
                if(block[waykey].type == 8){
                    document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "darkgray";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
                    el.dataset.type = String(block[waykey].type);
            
                }
                if(block[waykey].type == 9){
                    document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "lightgray";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
                    el.dataset.type = String(block[waykey].type);
            
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

                const el = document.getElementById("pos_1-"+[last_id]);
                if (!el) continue;

                el.dataset.type = String(block[waykey].type);

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
                    el.dataset.type = String(block[waykey].type);
            
                }
                if(block[waykey].type == 2){
                    document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "yellow";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
                    el.dataset.type = String(block[waykey].type);
            
                }
                if(block[waykey].type == 3){
                    document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "green";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
                    el.dataset.type = String(block[waykey].type);
            
                }
                if(block[waykey].type == 4){
                    document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "orange";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
                    el.dataset.type = String(block[waykey].type);
            
                }
                if(block[waykey].type == 5){
                    document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "red";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
                    el.dataset.type = String(block[waykey].type);
            
                }
                if(block[waykey].type == 6){
                    document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "darggreen";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
                    el.dataset.type = String(block[waykey].type);
            
                }
                if(block[waykey].type == 7){
                    document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "blue";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
                    el.dataset.type = String(block[waykey].type);
            
                }
                if(block[waykey].type == 8){
                    document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "darkgray";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
                    el.dataset.type = String(block[waykey].type);
            
                }
                if(block[waykey].type == 9){
                    document.getElementById("pos_1-"+[last_id]).style.height = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.width = 10+"px";
                    document.getElementById("pos_1-"+[last_id]).style.bottom = y_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.left = x_pos+"px";
                    document.getElementById("pos_1-"+[last_id]).style.backgroundColor = "lightgray";
                    document.getElementById("pos_1-"+[last_id]).style.position = "absolute";
                    el.dataset.type = String(block[waykey].type);
            
                }
                console.log("последний ID" + last_id)
                var last_id = last_id + 1;
            }
        }

        console.log(block_1)
    }
}



const pers = document.getElementById('pers');
const moveLeftBtn = document.getElementById('move_left');
const moveRightBtn = document.getElementById('move_right');
const jumpBtn = document.getElementById('move_jump');
const healthBar = document.getElementById('health-bar');
const healthText = document.getElementById('health-text');
const persHealthContainer = document.getElementById('pers-health-container');
const persHealthBar = document.getElementById('pers-health-bar');

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

const collisionObjects = document.querySelectorAll('.object_1');

const physics = {
  gravity: 0.1,
  jumpForce: -3.5,
  boostJumpForce: -1.5, 
  moveSpeed: 2,
  friction: 0.5,
  acceleration: 0.1,
  maxSpeed: 2,
  fallDamageThreshold: 4,
  fallDamageAmount: 25
};

const characterSize = {
  width: 10,
  height: 10
};

const state = {
  x: 10,
  y: 70,
  velX: 0,
  velY: 0,
  isOnGround: false,
  isJumping: false,
  health: 100,
  invincibleUntil: 0
};

const keyStates = {
  left: false,
  right: false,
  jump: false
};

function updateHealthUI() {
  if (healthText) healthText.textContent = `Здоровье: ${state.health}`;
  if (healthBar) {
    const percent = Math.max(0, Math.min(100, state.health));
    healthBar.style.width = percent + '%';
    if (percent > 50) healthBar.style.background = '#0f0';
    else if (percent > 20) healthBar.style.background = '#ff0';
    else healthBar.style.background = '#f00';
  }
  if (persHealthContainer) {
    persHealthContainer.style.display = 'block';
    persHealthContainer.style.left = Math.round(state.x - 15) + 'px';
    persHealthContainer.style.top = Math.round(state.y - 20) + 'px';
  }
  if (persHealthBar) {
    const percent = Math.max(0, Math.min(100, state.health));
    persHealthBar.style.width = percent + '%';
    persHealthBar.style.background = percent > 50 ? '#0f0' : (percent > 20 ? '#ff0' : '#f00');
  }
}

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

document.addEventListener('DOMContentLoaded', () => {
  if (moveLeftBtn) addUniversalHandlers(moveLeftBtn, 'left');
  if (moveRightBtn) addUniversalHandlers(moveRightBtn, 'right');
  if (jumpBtn) addUniversalHandlers(jumpBtn, 'jump');
  const mobileLeftBtn = document.getElementById('mobile-left');
  const mobileRightBtn = document.getElementById('mobile-right');
  const mobileJumpBtn = document.getElementById('mobile-jump');
  addUniversalHandlers(mobileLeftBtn, 'left');
  addUniversalHandlers(mobileRightBtn, 'right');
  addUniversalHandlers(mobileJumpBtn, 'jump');
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if (isMobile) {
    document.getElementById('mobile-controls').style.display = 'flex';
  }
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
      height: rect.height,
      element: obj
    });
  });
  return rects;
}

function checkCollision(rect1, rect2) {
  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}

let isFlashing = false;
let flashTimer = 0;

function takeDamage(amount) {
  const now = performance.now();
  if (now < state.invincibleUntil) return;
  state.health -= amount;
  state.health = Math.max(0, state.health);
  updateHealthUI();
  isFlashing = true;
  flashTimer = 6;
  state.invincibleUntil = now + 1000;
  console.log(`Получен урон: ${amount}, осталось здоровья: ${state.health}`);
  if (state.health <= 0) {
    state.x = 10; state.y = 100; state.velX = 0; state.velY = 0;
    state.health = 100; state.invincibleUntil = 0;
    updateHealthUI(); isFlashing = false; document.body.style.backgroundColor = '';
    console.log('Персонаж погиб! Респаун.');
  }
}

function applyFallDamage(fallSpeed) {
  const damage = Math.floor(physics.fallDamageAmount * (fallSpeed / physics.fallDamageThreshold));
  takeDamage(damage);
}

let typeUnder = 0;
let boostJump = false;

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
    const now = performance.now();
    const type = Number(objectRect.element.dataset.type || 0);

    // Сначала проверяем коллизию
    if (!checkCollision(characterRect, objectRect)) {
      return; // если нет столкновения, дальше не идём
    }

    // Если тип 2 — это безопасный блок: никакого урона, просто обычная твёрдая коллизия
    if (type === 2) {
      // вычисляем коллизию как обычно (персонаж не проваливается)
      const fromTop = Math.abs(characterRect.bottom - objectRect.top);
      const fromBottom = Math.abs(characterRect.top - objectRect.bottom);
      const fromLeft = Math.abs(characterRect.right - objectRect.left);
      const fromRight = Math.abs(characterRect.left - objectRect.right);
      const minDistance = Math.min(fromTop, fromBottom, fromLeft, fromRight);

      if (minDistance === fromTop && state.velY > 0) {
        // приземление на безопасный блок
        state.y = objectRect.top - characterSize.height;
        state.velY = 0;
        state.isOnGround = true;
        state.isJumping = false;
        collided = true;
      } else if (minDistance === fromBottom && state.velY < 0) {
        state.y = objectRect.bottom;
        state.velY = 0;
      } else if (minDistance === fromLeft && state.velX > 0) {
        state.x = objectRect.left - characterSize.width;
        state.velX = 0;
      } else if (minDistance === fromRight && state.velX < 0) {
        state.x = objectRect.right;
        state.velX = 0;
      }
      // дальше не проверяем урон — для type 2 он точно 0
      return;
    }


    const fromTop = Math.abs(characterRect.bottom - objectRect.top);
    const fromBottom = Math.abs(characterRect.top - objectRect.bottom);
    const fromLeft = Math.abs(characterRect.right - objectRect.left);
    const fromRight = Math.abs(characterRect.left - objectRect.right);
    const minDistance = Math.min(fromTop, fromBottom, fromLeft, fromRight);

    // Для остальных типов сначала проверяем неуязвимость
    if (now < state.invincibleUntil) {
      // всё равно обрабатываем коллизию (чтобы персонаж не проваливался),
      // но урон не даём
      const fromTop = Math.abs(characterRect.bottom - objectRect.top);
      const fromBottom = Math.abs(characterRect.top - objectRect.bottom);
      const fromLeft = Math.abs(characterRect.right - objectRect.left);
      const fromRight = Math.abs(characterRect.left - objectRect.right);
      const minDistance = Math.min(fromTop, fromBottom, fromLeft, fromRight);

      if (minDistance === fromTop && state.velY > 0) {
        state.y = objectRect.top - characterSize.height;
        state.velY = 0;
        state.isOnGround = true;
        state.isJumping = false;
        collided = true;
      } else if (minDistance === fromBottom && state.velY < 0) {
        state.y = objectRect.bottom;
        state.velY = 0;
      } else if (minDistance === fromLeft && state.velX > 0) {
        state.x = objectRect.left - characterSize.width;
        state.velX = 0;
      } else if (minDistance === fromRight && state.velX < 0) {
        state.x = objectRect.right;
        state.velX = 0;
      }
      return;
    }

    if (type === 4 && now >= state.invincibleUntil) {
      takeDamage(10)
    }

    if (type === 5 && now >= state.invincibleUntil) {
      takeDamage(100)
    }

    // Дальше — только для небезопасных блоков, когда нет неуязвимости
    if (objectRect.element.classList.contains('danger')) {
      takeDamage(25);
    }

    if (type === 6) {
      // Разрешаем проход снизу и с боков: проверяем только приземление сверху
      const fromTop = Math.abs(characterRect.bottom - objectRect.top);
      // Остальные направления игнорируем: персонаж может «проходить» через блок снизу/сбоку
    }

    if (minDistance === fromTop && state.velY > 0) {
      if (state.velY >= physics.fallDamageThreshold) {
        applyFallDamage(state.velY);
      }
      state.y = objectRect.top - characterSize.height;
      state.velY = 0;
      state.isOnGround = true;
      state.isJumping = false;
      collided = true;
    } else if (minDistance === fromBottom && state.velY < 0) {
      state.y = objectRect.bottom;
      state.velY = 0;
    } else if (minDistance === fromLeft && state.velX > 0) {
      state.x = objectRect.left - characterSize.width;
      state.velX = 0;
    } else if (minDistance === fromRight && state.velX < 0) {
      state.x = objectRect.right;
      state.velX = 0;
    }
  });

  if (!collided) {
    state.isOnGround = false;
  }
}



function checkTeleport() {
  if (state.y >= 200) {
    state.x = 10;
    state.y = 100;
    state.velX = 0;
    state.velY = 0;
    pers.style.left = Math.round(state.x) + 'px';
    pers.style.top = Math.round(state.y) + 'px';
  }
}

function updatePosition() {
  const typeUnder = getTypeUnderPlayerFast();

  if (typeUnder === 7) {
    physics.maxSpeed = 3;
    physics.friction = 0.85; // лёд: скользит, медленнее останавливается
  } else {
    physics.maxSpeed = 2;
    physics.friction = 0.5;  // обычное трение
  }

  if (keyStates.left) {
    state.velX -= physics.acceleration;
    if (state.velX < -physics.maxSpeed) state.velX = -physics.maxSpeed;
  } else if (keyStates.right) {
    state.velX += physics.acceleration;
    if (state.velX > physics.maxSpeed) state.velX = physics.maxSpeed;
  } else {
    if (state.velX !== 0) {
      const newVelX = state.velX * physics.friction;
      if (Math.abs(newVelX) < 0.1) state.velX = 0;
      else state.velX = newVelX;
    }
  }
  if (keyStates.jump && state.isOnGround && !state.isJumping) {
    jumpb();
    state.isOnGround = false;
    state.isJumping = true;
  }
  if (!state.isOnGround) {
    state.velY += physics.gravity;
  }
  state.x += state.velX;
  state.y += state.velY;
  checkCollisionsWithObjects();
  checkTeleport();
  if (state.x < 0) state.x = 0;
  if (state.y < 0) state.y = 0;
  pers.style.left = Math.round(state.x) + 'px';
  pers.style.top = Math.round(state.y) + 'px';
  if (state.x >= 1000) {
    const levelEl = document.getElementById("levelel");
    if (levelEl) levelEl.style.opacity = 1;
    state.velX = 0;
    state.velY = 0;
    setTimeout(() => {
      window.location.replace("physics.html");
    }, 2500);
  }
}

function jumpb() {
  const type = getTypeUnderPlayerFast(); // узнаём тип блока под ногами прямо сейчас
  console.log(type)
  if (type === 3) {
    // батут: усиленный прыжок
    state.velY = physics.jumpForce + physics.boostJumpForce;
    console.log("вы стоите на батуте");
  } else {
    // обычный прыжок
    state.velY = physics.jumpForce;
  }
}

function gameLoop() {
  updatePosition();
  updateHealthUI();
  if (isFlashing) {
    flashTimer--;
    document.body.style.backgroundColor = (flashTimer % 2 === 0) ? '#fff' : '';
    if (flashTimer <= 0) {
      isFlashing = false;
      document.body.style.backgroundColor = '';
    }
  }
  
  requestAnimationFrame(gameLoop);
}

document.addEventListener('DOMContentLoaded', () => {
  updateHealthUI();
  gameLoop();
});

window.pause = function() {
  document.getElementById("exex").style.opacity = 1;
};
window.next = function() {
  document.getElementById("exex").style.opacity = 0;
};
window.restart = function() {
  document.getElementById("exex").style.opacity = 0;
  state.x = 10;
  state.y = 100; 
  state.health = 100;
  state.invincibleUntil = 0;
  updateHealthUI();
};
window.exit_game = function() {
  document.getElementById("exex").style.opacity = 0;
  window.location.replace("physics.html");
};

let lastUnderblock = 0; 

function getTypeUnderPlayerFast() {
  const playerBottom = state.y + characterSize.height;
  const margin = 20;

  let best = null;
  let lowestBottom = Infinity;

  if (!Array.isArray(currentLevelRects) || currentLevelRects.length === 0) {
    return null;
  }

  for (const b of currentLevelRects) {
    // Проверяем, что у блока есть нужные поля
    if (typeof b.x !== 'number' || typeof b.y !== 'number' || typeof b.w !== 'number' || typeof b.h !== 'number') continue;

    // Горизонтальное пересечение
    const hOverlap = state.x < b.x + b.w && state.x + characterSize.width > b.x;
    if (!hOverlap) continue;

    // Нижняя граница блока — это b.y + b.h (потому что b.y — это top)
    const blockBottomPx = b.y + b.h;
    const blockTopPx = b.y;

    // Вертикальная проверка
    const vOverlap = playerBottom > blockBottomPx - margin
                  && playerBottom < blockBottomPx + margin;
    if (!vOverlap) continue;

    // Берём самый нижний из подходящих блоков (чтобы не цепляться за «дырки» выше)
    if (blockBottomPx < lowestBottom) {
      lowestBottom = blockBottomPx;
      best = b;
    }
  }

  if (!best) return null;

  const type = Number(best.type);
  return (typeof type === 'number' && Number.isInteger(type) && type > 0) ? type : null;
}


console.log('LEVEL_NUMBER:', level_number);
console.log('BLOCK:', block);
console.log('CURRENT_LEVEL_RECTS_LENGTH:', currentLevelRects.length);
console.log('SAMPLE_RECTS:', currentLevelRects.slice(0, 5));
console.log('BLOCK_TYPE:', typeof block);
if (currentLevelRects.length === 0) console.warn('ВНИМАНИЕ: массив блоков пустой! Проверь JSON и buildLevelRects');
