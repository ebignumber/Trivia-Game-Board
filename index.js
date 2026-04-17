let scores = [100, 200, 300, 400, 500, 600]
let catagories = ["Five Nights at Freddy's", "The Simpsions did it again", "Spanish", "History", "Physics"]

function changeColor(element){
  if (!element.className){
    element.className = "filled"
  }
  else {
    element.className = ''
  }
}

const boardDiv = document.getElementById("board")
boardDiv.innerHTML += `<tr><th></th>${catagories.map(catagory => `<th>${catagory}</th>`).join('')}</tr>`
for (let score of scores) {
  boardDiv.innerHTML += `<tr><th>${score}</th><td></td><td></td><td></td><td></td><td></td><tr>`
}

const boardGrid = document.getElementsByTagName("td")
for (let item of boardGrid){
  item.addEventListener("click", () => changeColor(item))
}
