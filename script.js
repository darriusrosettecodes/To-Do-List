const userInput = document.querySelector('.userInputBox')
const addListItem = document.querySelector('.addListItem')
let list = document.querySelector('.list')

//ADD LIST ITEMS TO THE PAGE
addListItem.addEventListener('click', function(){
    if(!userInput.value){
        alert('Put something')
    }

    if(userInput.value){
        const listItemBox = document.createElement('div')
        listItemBox.setAttribute('class', 'listItemBox')
        //creates a div and adds the list item class

        const listItemText = document.createElement('p')
        listItemBox.appendChild(listItemText)
        //Puts the listItemText inside the ListItemBox

        listItemText.innerHTML = userInput.value
        //Make the text inside the p elemet the user input

        const removeBtn = document.createElement('button')
        removeBtn.setAttribute('class', 'removeBtn')
        removeBtn.innerHTML = 'Remove'
        listItemBox.appendChild(removeBtn)
        //Creates the remove button that will be appeneded inside the list item div

        removeBtn.addEventListener('click', function(){
            listItemBox.style.display = 'none'
        })
        //Adds an event listener to the removeBtn button that remvoves the listItem from the page

        list.appendChild(listItemBox)
        //Adds the new div into the list div

        userInput.value = ''
        //Clears the input
    }
})


