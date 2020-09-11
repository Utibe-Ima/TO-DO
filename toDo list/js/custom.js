function toDoList() {
  var item = document.getElementById("inputField").value;
  var text = document.createTextNode(item);
  var newItem = document.createElement("li");
  newItem.appendChild(text);
  document.getElementById("toDoList").appendChild(newItem);
  inputField.value = "";
}

function removeItem(e) {
 e.target.remove()
}
