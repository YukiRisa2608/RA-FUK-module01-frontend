var colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff'];
var texts = ['Thử thách bản thân với javascript',
    'Luôn luôn nỗ lực',
    'Luôn luôn cố gắng',
    'Không sợ khó khăn',
    'Luôn luôn được support tận tình',
    "Luôn luôn đồng hành"];

const titleDom = document.getElementsByTagName("h1")[0]
const subTitleDom = document.getElementsByTagName("h2")[0]
const clockDom = document.getElementById("clock")
const nvgDom = document.getElementById("nvg")
const academyDom = document.getElementById("academy")
const chanceDom = document.getElementById("chance")
const fullstackDom = document.getElementById("fullstack")

setTimeout(() => {
    titleDom.textContent = `Chào mừng đến với rikkei academy ${new Date().getFullYear()}`
}, 1000);

setInterval(() => {
    // bai 1
    let c = `rgb(${getRandomInt(0,255)}, ${getRandomInt(0,255)}, ${getRandomInt(0,255)})`
    titleDom.style.color = c

    // bai 2
    let time = getCurrentTime();
    clockDom.textContent = time
    clockDom.style.fontSize = "40px"
    clockDom.style.textAlign = "center"

    // bai3
    let randomContent = getRandomInt(0,5)
    subTitleDom.textContent = texts[randomContent]
    subTitleDom.style.color = colors[randomContent]

    // 4
    nvgDom.style.color = "green"

    // 5
    academyDom.style.color = "yellow"

    // 6
    chanceDom.style.color = "red"
    fullstackDom.style.color = "red"
}, 1000)

function  getCurrentTime() {
    let d = new Date()
    return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}