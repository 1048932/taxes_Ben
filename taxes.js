
var tot = document.querySelector("#tot");
var total = 0;
var avrate = document.querySelector("#rate");
var rate = 0;
var ai = document.querySelector("#ai");
var anin = 0;
var mi = document.querySelector("#mi");

var input = document.querySelector("input");
var gross = input.value;
input.value = 0;

var NUM = [[0, 11000, 44725, 95375, 182100, 231250, 578125], [0.1, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37]];

let cbutton = document.querySelector("button");
cbutton.addEventListener("click", calculate);

function calculate() {
    total = 0;
    rate = 0;
    anin = 0;
    gross = input.value;

    if (!isNaN(input.value) && input.value > 0) {
        for (let i = 1; i < 7; i++) {
            compute(i);
            if (gross === 0) {
                break;
            }
        }
        if (input.value > 578125) {
            update(gross, 0.37);
        }

        rate = 100*(total/input.value);
        anin = input.value - total;

        tot.textContent = total;
        avrate.textContent = rate + "%";
        ai.textContent = anin;
        mi.textContent = anin/12;
    }

}

function compute(n) {
    if (input.value > NUM[0][n]) {
        update((NUM[0][n] - NUM[0][n-1]), NUM[1][n-1]);
    } else {
        update(gross, NUM[1][n-1]);
    }
}

function update(d, r) {
    total += d*r;
    gross -= d;
}
