let scores = [100, 200, 300, 400, 500, 600]
let catagories = ["Topic 1", "Topic 2", "Topic 3", "Topic 4", "Topic 5"]
let spacesFilled = JSON.parse(localStorage.getItem("Spaces Filled")) || []
let test = []
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

const boardDiv = document.getElementById("board")
boardDiv.innerHTML += `<tr class="topics"><th></th>${catagories.map(catagory => `<th>${catagory}</th>`).join('')}</tr>`
for (let score in scores) {
  let tableRow = document.createElement("tr")
  tableRow.innerHTML = `<th>${scores[score]}</th>`
  for (let i in catagories){
    tableRow.innerHTML += `<td class="not-filled" id="${score * catagories.length + i}"></td>`
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
