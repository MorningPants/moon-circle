// import schedule from './schedule.json' assert {type: 'json'};
const schedule = require('./schedule.json');

let root = document.getElementById('root')
root.innerHTML = "Safari Test"
for(let i = 0; i < schedule.length; i++){
    let section = document.createElement('section')
    let header = document.createElement('h2')
    header.innerText = schedule[i].name
    section.appendChild(header)
    let time = document.createElement('p')
    time.innerText = schedule[i].time
    section.appendChild(time)
    let description = document.createElement('p')
    description.innerText = schedule[i].description
    section.appendChild(description)
    root.appendChild(section)
}