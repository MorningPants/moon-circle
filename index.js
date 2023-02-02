// import schedule from './schedule.json' assert {type: 'json'};
// const schedule = require('./schedule.json');
// fetch("./schema/schedule.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => render(data));

fetch(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRsIJjobZIo0NA-l_J4-tEaT1ZYBj6B4iu3psjqeUgygXY67SjI26pj18-jj8zD1sDbc_ZJOk-NMNtr/pubhtml"
)
  .then((response) => response.text())
  .then((data) => process(data));

function process(data) {
  
  let events = [];
  let event = {}
  let tempString = "";
  let passedLine1 = false
  let passedLine2 = false
  let hasName = false
  let hasTime = false
  let hasDescription = false
  for (let i = 0; i < data.length; i++) {
    if (data[i - 3] == "/" && data[i - 2] == "t" && data[i - 1] == "r") {
      if(passedLine2){
        events.push(event)
      }
      if(passedLine1){
        passedLine2 = true
      }
      passedLine1 = true
      
      event = {}
      hasName = false
      hasTime = false
      hasDescription = false
    }
    if (data[i - 3] == "<" && data[i - 2] == "t" && data[i - 1] == "d") {
      while (data[i] !== ">") {
        i++;
      }
      i++;
      let j = i;
      while (data[j] + data[j + 1] + data[j + 2] + data[j + 3] !== "</td") {
        tempString += data[j];
        j++;
      }
      if(!hasName){
        event.name = tempString;
        hasName = true
      } else if(!hasTime){
        event.time = tempString;
        hasTime = true
      } else if(!hasDescription){
        event.description = tempString
        hasDescription = true
      }
      tempString = "";
    }
  }
  render(events);
}

function render(schedule) {
  let root = document.getElementById("root");
  for (let i = 0; i < schedule.length; i++) {
    let section = document.createElement("section");
    let header = document.createElement("h2");
    header.innerText = schedule[i].name;
    section.appendChild(header);
    let time = document.createElement("p");
    time.innerText = schedule[i].time;
    section.appendChild(time);
    let description = document.createElement("p");
    description.innerText = schedule[i].description;
    section.appendChild(description);
    root.appendChild(section);
  }
}
