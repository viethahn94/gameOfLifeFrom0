const LIVE_CELL = `<div style="width: 10px ; height: 10px ; background: black ; border: 1px solid gray ; float: left"></div>`;
const DEAD_CELL = `<div style="width: 10px ; height: 10px ; background: white ; border: 1px solid gray ; float: left"></div>`;
const LIVE = 1;
const DEAD = 0;
const OK_RATE = 2;
const LIVE_RATE = 3;
const SIZE = 10;

function setupLifeData() {
    let life = [];

    life.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    life.push([0, 0, 0, 0, 0, 1, 0, 0, 0, 0]);
    life.push([0, 0, 0, 1, 0, 1, 0, 0, 0, 0]);
    life.push([0, 0, 0, 0, 1, 1, 0, 0, 0, 0]);
    life.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    life.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    life.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    life.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    life.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    life.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    return life;
}

console.log(setupLifeData());

function setupLife(life) {
    let html = '';

    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++) {
            if (life[i][j] === DEAD) {
                html += DEAD_CELL;
            } else {
                html += LIVE_CELL;
            }
        }
    }
    return html;
}

function countNeighbor(oldLife, i, j) {
    let numberOfNeighbor = 0;
    let topAxis = i === 0 ? SIZE - 1 : i - 1;
    let downAxis = i === SIZE - 1 ? 0 : i + 1;
    let leftAxis = j === 0 ? SIZE - 1 : j - 1;
    let rightAxis = j === SIZE - 1 ? 0 : j + 1;

    numberOfNeighbor
        = oldLife[topAxis][leftAxis] + oldLife[topAxis][j] + oldLife[topAxis][rightAxis]
        + oldLife[i][leftAxis] + oldLife[i][rightAxis]
        + oldLife[downAxis][leftAxis] + oldLife[downAxis][j] + oldLife[downAxis][rightAxis];

    return numberOfNeighbor;

}

function liveThrough(oldLife) {
    let nextLive = setupLifeData();

    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++) {
            let numberOfNeighbor = countNeighbor(oldLife, i, j);
            let me = oldLife[i][j];
            if (isLive(me) && (numberOfNeighbor === OK_RATE || numberOfNeighbor === LIVE_RATE)) {
                nextLive[i][j] = LIVE;
            } else if (isDead(me) && numberOfNeighbor === LIVE_RATE) {
                nextLive[i][j] = LIVE;
            } else {
                nextLive[i][j] = DEAD;
            }
        }
    }
    return nextLive;
}

function isLive(me) {
    return me === LIVE;
}

function isDead(me) {
    return me === DEAD;
}

$(document).ready(function () {
    let lifeData = setupLifeData();
    document.getElementById("displayMatrix").innerHTML = setupLife(lifeData);

    setInterval(function () {
        lifeData = liveThrough(lifeData);
        document.getElementById("displayMatrix").innerHTML = setupLife(lifeData);
    },500);

});
