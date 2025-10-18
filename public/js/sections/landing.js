const landingData = { gameList: [], index: 0, gamesFolder: "no game folder yet" };

function showCurrentGame() {
    document.getElementById('game-icon').src = landingData.gameList[landingData.index].gameIcon;
    document.getElementById('game-name').innerText = landingData.gameList[landingData.index].gameName.toUpperCase();
}
function playCurrentGame() {
    window.location.replace(`./${landingData.gamesFolder}/${landingData.gameList[landingData.index].gamePath}`);
}

fetch('./public/data/gameList.json')
    .then(data => data.json())
    .then(json => {
        landingData.gamesFolder = json.gamesFolder;
        landingData.gameList = json.data;
        showCurrentGame();

        let hasShifted = false;  //variabile che indica se devo mostrare l'hint 
        document.getElementById('button-right').addEventListener('click', (evt) => {
            landingData.index = (landingData.index + 1) % landingData.gameList.length;
            showCurrentGame();

            if (!hasShifted) document.getElementById('hint-shift-arrow').style.display = 'none';
            hasShifted = true;
        });
        document.getElementById('button-left').addEventListener('click', (evt) => {
            landingData.index = (landingData.index + landingData.gameList.length - 1) % landingData.gameList.length;
            showCurrentGame();

            if (!hasShifted) document.getElementById('hint-shift-arrow').style.display = 'none';
            hasShifted = true;
        });

        document.getElementById('button-center').addEventListener('click', (evt) => {
            playCurrentGame();
        });


        // faccio partire i timers dopo i quali vengono mostrati gli hints
        setTimeout(() => {
            if (!hasShifted) document.getElementById('hint-shift-arrow').style.display = 'block';
        }, 20 * 1000);
        setTimeout(() => {
            document.getElementById('hint-select-arrow').style.display = 'block';
        }, 60 * 1000);

    })
    .catch(error => console.error(error));