const LIVE_CELL = `<div style="width: 10px ; height: 10px ; background: black ; border: 1px solid gray ; float: left"></div>`
const DEAD_CELL = `<div style="width: 10px ; height: 10px ; background: white ; border: 1px solid gray ; float: left"></div>`
const LIVE = 1;
const DEAD = 0;

function setupLifeData() {
    let life = [];

    life.push([0, 1, 1, 0, 1, 1, 0, 1, 0, 0]);
    life.push([0, 1, 1, 0, 1, 1, 0, 1, 0, 0]);
    life.push([0, 1, 1, 0, 1, 1, 0, 1, 0, 0]);
    life.push([0, 1, 1, 0, 1, 1, 0, 1, 0, 0]);
    life.push([0, 1, 1, 0, 1, 1, 0, 1, 0, 0]);
    life.push([1, 0, 1, 1, 1, 1, 1, 1, 1, 1]);
    life.push([1, 0, 1, 1, 1, 1, 1, 1, 1, 1]);
    life.push([1, 0, 1, 1, 1, 1, 1, 1, 1, 1]);
    life.push([1, 0, 1, 1, 1, 1, 1, 1, 1, 1]);
    life.push([1, 0, 1, 1, 1, 1, 1, 1, 1, 1]);

    return life;
}

console.log(setupLifeData());

function setupLife(life) {
    let html = '';

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (life[i][j] === DEAD) {
                html += DEAD_CELL;
            } else {
                html += LIVE_CELL;
            }
        }
    }
    return html;
}


let lifeData = setupLifeData();

