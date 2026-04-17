let scores = [100, 200, 300, 400, 500, 600]
let catagories = ["Topic 1", "Topic 2", "Topic 3", "Topic 4", "Topic 5"]

function changeColor(element){
  if (element.className == "not-filled"){
    element.className = "filled"
  }
  else {
    element.className = 'not-filled'
  }
}

const boardDiv = document.getElementById("board")
boardDiv.innerHTML += `<tr class="topics"><th></th>${catagories.map(catagory => `<th>${catagory}</th>`).join('')}</tr>`
for (let score in scores) {
  let tableRow = document.createElement("tr")
  tableRow.innerHTML = `<th>${scores[score]}</th>`
  for (let i in catagories){
    tableRow.innerHTML += `<td class="not-filled" value="${Number(score * catagories.length) + Number(i)}"></td>`
  }
  boardDiv.appendChild(tableRow)
}

const boardGrid = document.getElementsByTagName("td")
for (let item of boardGrid){
  item.addEventListener("click", () => changeColor(item))
}
