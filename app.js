let inpForem = document.querySelector(`#inpForem`);
let textArea = document.querySelector(`#textArea`);

let arr = [];


function addToDo() {
  textArea.innerHTML = ``;
  arr.push(inpForem.value);

  for (let i = 0; i < arr.length; i++) {
    textArea.innerHTML += `<h1>${arr[i]}
    <button onclick="DeleteTodo(${i})">Delete</button>
    <button onclick="editTodo(${i})">Edit</button>
    </h1>`
  };
};

function DeleteTodo(index) {
  textArea.innerHTML = ``;
  arr.splice(index, 1);

  for (let i = 0; i < arr.length; i++) {
    textArea.innerHTML += `<h1>${arr[i]}
    <button onclick="DeleteTodo(${i})">Delete</button>
    <button>edit</button>
    </h1>`
  };
};

function editTodo(index) {
  textArea.innerHTML = ``;
  let UpdatedValue = prompt(`Enter Your Updated Value`);
  arr.splice(index, 1, UpdatedValue);

  for (let i = 0; i < arr.length; i++) {
    textArea.innerHTML += `<h1>${arr[i]}
    <button onclick="DeleteTodo(${i})">Delete</button>
    <button onclick="editTodo(${i})">Edit</button>
    </h1>`
  };
};
