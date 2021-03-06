var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit Event
form.addEventListener('submit',addItem);
// Delete event
itemList.addEventListener('click', removeItem);

// Add Item
function addItem(e){
    e.preventDefault();

    // Get Input Value
    var newItem = document.getElementById('item').value;
    
    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create delete button element
    var deleteBtn  = document.createElement('button');

    // Add Classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn)
    
    // Append li to list
    itemList.appendChild(li)
}

// Remove Item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}

