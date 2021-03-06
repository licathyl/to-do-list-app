function newItem() {

  // Adds a new item to the list of items
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);
  input.value = '';

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }

  // Crosses out an item from the list of items
  function crossOut() {
    li.toggleClass('strike');
  }

  li.on('dblclick', function crossOut() {
    li.toggleClass('strike');
  })

  // Adds the delete button "X"
  let crossOutButton = $('<crossOutButton></crossOutButton');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on('click', deleteListItem);

  // Adds CLASS DELETE (DISPLAY: NONE) from the css  {
  function deleteListItem() {
    li.addClass('delete');
  }

  // Reorders the items
  $('#list').sortable();

}
