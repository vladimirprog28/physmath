let level_number = 0;

window.exit=
function exit(){
    window.location.replace('index.html')
}

window.level_1 = 
function level_1(){
    level_number = 1;

    fetch('./phys.json')
        .then(Response => Response.json())
        .then( data => {
            data.level_number.n = level_number;

            localStorage.setItem('physData', JSON.stringify(data));
            console.log("успешно");
            console.log(data.level_number.n);
        })
    window.location.replace("physgame.html")
}
window.level_2 = 
function level_2(){
    level_number = 2;

    fetch('./phys.json')
        .then(Response => Response.json())
        .then( data => {
            data.level_number.n = level_number;

            localStorage.setItem('physData', JSON.stringify(data));
            console.log("успешно");
            console.log(data.level_number.n);
        })
    window.location.replace("physgame.html")
}