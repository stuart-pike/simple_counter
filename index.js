let count = 0
let countEl = document.getElementById('count-el')
let priorEntries = document.getElementById('priorEntries')
const previousEntries = []

function increment() {
    count += 1
    countEl.innerText = count
};

function save() {
    previousEntries.push(count)
    console.log(previousEntries)
    count = 0
    countEl.innerText = count
    priorEntries.innerText = previousEntries
}