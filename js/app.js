
let createBtn = document.getElementById("create")
createBtn.addEventListener("click", (e) => {
  e.preventDefault()
  let titlec = document.getElementById("title").value
  let descriptionc = document.getElementById("description").value
  localStorage.setItem("todo", JSON.stringify([titlec, descriptionc]))
  todoID.innerHTML = `
  <div class="todo-item">
    <div class="todo-body">
      <div class="todo-title">${titlec}</div>
      <div class="todo-description">${descriptionc}</div>
    </div>
  </div>
  `
})


let delBtn = document.getElementById("delete")
delBtn.addEventListener("click", (e) => {
  e.preventDefault()
  localStorage.removeItem("todo")
  todoID.innerHTML = ""
})