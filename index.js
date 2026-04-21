const roundOneScores = [100, 200, 300, 400, 500, 600]
let scores = JSON.parse(localStorage.getItem("Scores")) || roundOneScores
let catagories = JSON.parse(localStorage.getItem("Catagories")) || ["Topic 1", "Topic 2", "Topic 3", "Topic 4", "Topic 5"]
let spacesFilled = JSON.parse(localStorage.getItem("Spaces Filled")) || []

const editTopicMenu = document.getElementById("edit-topic-menu")
const topicsDiv = document.getElementById("topics-div")
const importMenu = document.getElementById("import-menu")
let jsonToParse = ''

function addTopic(){
  let topicHTML = document.createElement("div")
  topicHTML.innerHTML = `<div class="topic"><input><button onclick="document.activeElement.parentElement.remove()">X</button></div>`
  topicsDiv.appendChild(topicHTML)
}

function openTopicEditMenu(){
  editTopicMenu.setAttribute("open", true)
}

function exitMenu(){
  if (editTopicMenu.querySelector("input")){ 
    catagories = []
    editTopicMenu.querySelectorAll("input").forEach(element => catagories.push(element.value))
    localStorage.setItem("Catagories", JSON.stringify(catagories))
    spacesFilled = []
    localStorage.removeItem("Spaces Filled")
    renderBoard()
  }
  editTopicMenu.removeAttribute("open")
  topicsDiv.innerHTML = ''
}

function openImportMenu(){
  document.getElementById("json-to-import").value = ''
  importMenu.setAttribute("open", true)
}

function cancelImport(){
  importMenu.removeAttribute("open")
}

function changeRound(){
  if(confirm("Is it time to change the round?")){
    scores = scores.map(score => score + roundOneScores[scores.indexOf(score)])
    localStorage.setItem("Scores", JSON.stringify(scores))
    spacesFilled = []
    localStorage.removeItem("Spaces Filled")
    renderBoard()
  }
}

//Original code for this function came from www.javaspring.net/blog/how-can-javascript-save-to-a-local-file/
function exportJSONFile(){
  let json = {catagories: catagories, scores: scores, spacesFilled, spacesFilled}
  let jsonStr = JSON.stringify(json, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = "Trivia Save Data.json";
  a.click();
  URL.revokeObjectURL(url);
}

function importJSONFile(){
  parsedJson = JSON.parse(jsonToParse)
  catagories = parsedJson.catagories
  scores = parsedJson.scores
  spacesFilled = parsedJson.spacesFilled
  localStorage.setItem("Catagories", JSON.stringify(catagories))
  localStorage.setItem("Scores", JSON.stringify(scores))
  localStorage.setItem("Spaces Filled", JSON.stringify(spacesFilled))
  renderBoard()
  importMenu.removeAttribute("open")
}

function resetBoard(){
  if(confirm("Are you sure you want to reset the board?\nTHIS WILL REMOVE ALL DATA STORED FOR THIS BOARD!")){
    scores = roundOneScores
    catagories = ["Topic 1", "Topic 2", "Topic 3", "Topic 4", "Topic 5"]
    spacesFilled = []
    localStorage.clear()
    renderBoard()
  }
}

function clearSpace(element){
  if (element.className == "not-filled"){
    element.className = "filled"
    spacesFilled.push(element.id)
  }
  else {
    element.className = 'not-filled'
    spacesFilled.splice(spacesFilled.indexOf(element.id), 1)
  }
  localStorage.setItem("Spaces Filled", JSON.stringify(spacesFilled))
}

//Board initialization logic
function renderBoard(){
  const boardDiv = document.getElementById("board")
  boardDiv.innerHTML = `<tr class="topics"><th></th>${catagories.map(catagory => `<th>${catagory}</th>`).join('')}</tr>`
  for (let score in scores) {
    let tableRow = document.createElement("tr")
    tableRow.innerHTML = `<th>${scores[score]}</th>`
    for (let i in catagories){
      tableRow.innerHTML += `<td class="not-filled" id="${score * catagories.length + Number(i)}"></td>`
    }
    boardDiv.appendChild(tableRow)
  }

  const boardGrid = document.getElementsByTagName("td")
  for (let item of boardGrid){
    if (spacesFilled.indexOf(item.id) != -1){
      item.className = "filled"
    }
    item.addEventListener("click", () => clearSpace(item))
  }
}
renderBoard()
