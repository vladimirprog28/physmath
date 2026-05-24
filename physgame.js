import level from './phys.json' with { type: "json" };

var size_level_1 = Object.keys(level.level_1).length;

var block = level.level_1

for(const waykey in block){
    
    const wayObject = block[waykey];
    if(block != ""){
        let block_1 = block[waykey]['pos-y-start']
        if(block_1 == undefined){
            for(let i = block[waykey]['pos-x-end']; i >= block[waykey]["pos-x-start"]; i--){
                let x_pos = i*100-50
                let y_pos = block[waykey]['pos-y']*100-50
                console.log('координаты объектов xy')
                console.log(x_pos)
                console.log(y_pos)
            }
        } else if(block_1 == h) {
            for(let i = block[waykey]['pos-y-end']; i >= block[waykey]['pos-y-start']; i--){
                let y_pos = i*100-50
                let x_pos = block[waykey]['pos-y']*100-50
                console.log('координаты объектов yx')
                console.log(x_pos)
                console.log(y_pos)
            }
        }

        console.log(block_1)
    }  
}

console.log(block)
console.log(size_level_1)