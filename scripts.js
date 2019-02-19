console.log("😎");

// 'submit'

const potatoForm = document.querySelector('#potatoForm');

potatoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log(event);

  // Create the new list element
  const newPotatoText = document.querySelector("#potatoText").value;
  const listItem = document.createElement('li');
  listItem.innerText = newPotatoText;

  // Find the list to add it to
  const potatoList = document.querySelector('#potatoList');

  // add it to the list
  // appendChild
  potatoList.append(listItem);
  potatoList.prepend(listItem);

});