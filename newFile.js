window.level_21 =
    function level_21() {
        try {
            const data = fs.readFileSync('phys.json', 'utf8');

            let jsonData = JSON.parse(data);

            jsonData.level_number.n = 21;

            const updatedJson = JSON.stringify(jsonData, null, 2);

            fs.writeFileSync('phys.json', updatedJson);
            console.log("update");
        } catch (err) {
            console.error('ошибка', err);
        }
        window.location.replace("physgame.html");
    };
