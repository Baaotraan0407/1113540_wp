
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let addToDoButton1 = document.getElementById('addToDo1');
let toDoContainer1 = document.getElementById('toDoContainer1');
let inputField1 = document.getElementById('inputField1');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
   
})


addToDoButton1.addEventListener('click', function(){
    var paragraph1 = document.createElement('p1');
    paragraph1.classList.add('paragraph-styling');
    paragraph1.innerText = inputField1.value;
    toDoContainer1.appendChild(paragraph1);
    inputField1.value = " ";
    paragraph1.addEventListener('click', function(){
        paragraph1.style.textDecoration = "underline";
    })
    paragraph1.addEventListener('dblclick', function(){
        this.style.backgroundColor = "yellow";
    })
    
})