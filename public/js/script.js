//cibler les léments du DOM
let DOM = {
    input: document.querySelector('#form input'),
    btnAdd: document.querySelector('#form button'),
    tasklist: document.querySelector('#tasklist'),
    classer: document.getElementById('classer'),
    todo: document.getElementById('task-todo'),
    done: document.getElementById('task-done'),
    all: document.getElementById('task-all'),
    lastelem: document.getElementById('lastelem')
}
​
//Je cree les variables d'éléments draggable et lieu de drop 
let dragElem, dragContainer;
​
//J'affiche les boutons de tri 
let DisplayTri = () => {
    if(DOM.tasklist.children.length > 2){
        DOM.classer.classList.remove('none');
    } else {
        DOM.classer.classList.add('none');
    }
}
​
// Create a new list item when clicking on the "Add" button
DOM.btnAdd.addEventListener('click', () => {
    event.preventDefault();
    if(DOM.input.value != ''){
        // Création de l'HTML interne à chaque tâche
        let html = `
                <div class="w-50 mr-auto align-self-center">
                    <p class="mb-0 ml-2">${DOM.input.value}</p>
                </div>
                <ul class="navbar ml-auto align-self-center list-unstyled">
                    <li class="mx-4"><i class="fas fa-check-circle text-success"></i></li>
                    <li class="mx-4"><i class="fas fa-edit text-warning"></i></li>
                    <li class="mx-4"><i class="fas fa-trash-alt text-danger"></i></li>
                </ul>
                <button class="confirm-delete-bef">Cliquez ici pour confirmer la suppression.</button>
        `
//Je ecree le li qui englobe la tache et les li intermediaires 
​
        let liTask = document.createElement('li');
        let liBetween = document.createElement('li');
        liTask.setAttribute('draggable', 'true');
        liTask.className = "bg-secondary py-2 my-2 d-flex rounded notdone"
        liTask.innerHTML = html;
        liTask.style.position = "relative";
        liTask.style.overflow = "hidden";
        DOM.tasklist.insertBefore(liBetween, DOM.lastelem); 
        DOM.tasklist.insertBefore(liTask, DOM.lastelem); 
        DOM.input.value = "";
​
        DisplayTri();
​
​
// Click on a close button to hide the current list item
        let tasksDrop = document.getElementsByClassName("bg-secondary");
            // ElemListener
        let currentTask = tasksDrop[tasksDrop.length - 1];
        currentTask.addEventListener('dragend', dragEnd);
        currentTask.addEventListener('dragstart', dragStart);
        
                // Fonctions de l'élément Dragger
        function dragStart() {
            this.classList.add("hold");
            dragElem = event.currentTarget;
            setTimeout(() => this.classList.add("invisible"), 0);
        }
​
        function dragEnd() {
            this.classList.remove("hold");
            this.classList.remove("invisible");
        }
            // ContainerLister
        currentTask.addEventListener('dragover', dragOver);        
        currentTask.addEventListener('dragenter', dragEnter);
        currentTask.addEventListener('dragleave', dragLeave);
        currentTask.addEventListener('drop', dragDrop);
​
        
        
              //  Fonctions de l'élément survolé pour le DROP
        function dragOver() {
            
            event.preventDefault();
            dragContainer = event.currentTarget;  
            dragContainer.nextElementSibling.classList.add('hovered');
        }
        function dragEnter() {
            
        }
        function dragLeave() {
            dragContainer.nextElementSibling.classList.remove('hovered');
        }
        function dragDrop() {
            dragContainer.nextElementSibling.classList.remove('hovered');
            let afterNode2 = dragContainer.nextElementSibling;
            let dragparent = dragContainer.parentNode;
            let beforeLi = dragElem.previousElementSibling;
            dragparent.insertBefore(dragElem, afterNode2);
            dragparent.insertBefore(beforeLi, dragElem);
            
        }
​
        // // Bouton valider
        let valid = document.querySelectorAll(".fas.fa-check-circle.text-success")[document.querySelectorAll(".fas.fa-check-circle.text-success").length - 1];
        valid.addEventListener('click', () => {
            event.currentTarget.parentNode.parentNode.parentNode.classList.toggle('done');
            event.currentTarget.parentNode.parentNode.parentNode.classList.toggle('notdone');
        });
​
        // // Bouton Delete
        let delet = document.querySelectorAll(".fas.fa-trash-alt.text-danger")[document.querySelectorAll(".fas.fa-trash-alt.text-danger").length - 1];
        delet.addEventListener('click', () => {
            let isDelete = false;
            let parent = event.currentTarget.parentNode.parentNode.parentNode;
            let confirmDelete = liTask.querySelector('BUTTON');
            confirmDelete.classList.add('confirm-delete-aft');
​
            // Bouton de confirmation pour delete
            confirmDelete.addEventListener('click', () => {
                parent.parentNode.removeChild(parent.previousElementSibling);
                parent.parentNode.removeChild(parent);
                confirmDelete.parentNode.removeChild(confirmDelete);
                isDelete = true;
                DisplayTri();
            });
            setTimeout(() => {
                if(isDelete == false){
                confirmDelete.classList.remove('confirm-delete-aft');
                }
            }, 3000);
        })
​
        // Bouton Edit
        let edit = document.querySelectorAll(".fas.fa-edit.text-warning")[document.querySelectorAll(".fas.fa-edit.text-warning").length - 1];
        let inputHtml;
        edit.addEventListener('click', () => {
            let parent = event.currentTarget.parentNode.parentNode.parentNode.firstElementChild;
​
        // Mode Lecture
        if(parent.firstElementChild.tagName == "P"){
            let text = parent.firstElementChild.innerText;
            inputHtml = `<input class="mb-0 ml-2" value="">`;
            valid.style.display = "none";
            delet.style.display = "none";
            edit.className = " fas fa-save text-warning mr-3";
            parent.innerHTML = inputHtml;
            parent.firstElementChild.value = text;
            parent.firstElementChild.focus();
​
        // Mode Edition
        } else if(parent.firstElementChild.tagName == "INPUT"){
            let text = parent.firstElementChild.value;
            inputHtml = `<p class="mb-0 ml-2">${text}</p>`;
            valid.style.display = "inline";
            delet.style.display = "inline";
            edit.className = " fas fa-edit text-warning";
            parent.innerHTML = inputHtml;
        }
        })
​
        // Enter Edit
        let inputEdit = edit.parentNode.parentNode.parentNode.firstElementChild;
        inputEdit.addEventListener('keypress', () => {
            if(event.which == 13){
                let text = inputEdit.firstElementChild.value;
                inputHtml = `<p class="mb-0 ml-2">${text}</p>`;
                valid.style.display = "inline";
                delet.style.display = "inline";
                edit.className = " fas fa-edit text-warning";
                inputEdit.innerHTML = inputHtml;
            }
            
        })
        
    } 
})
​
// Trier
classer.addEventListener('click', () => {
    let tasksTodo = document.getElementsByClassName('notdone');
    let tasksDone = document.getElementsByClassName('done');
    if(event.target == DOM.todo) {
​
        // Tâches à faire
        for (let i = 0; i < tasksDone.length; i++){
            tasksDone[i].classList.add('none');
        }
        for (let i = 0; i < tasksTodo.length; i++){
            tasksTodo[i].classList.remove('none');
        }
    } else if(event.target == DOM.done) {
​
        // Tâches finies
        for (let i = 0; i < tasksTodo.length; i++){
            tasksTodo[i].classList.add('none');
            
        }
        for (let i = 0; i < tasksDone.length; i++){
            tasksDone[i].classList.remove('none');
        }
        
    } else if(event.target == DOM.all) {
​
        // Toutes les tâches
            for (let i = 0; i < tasksDone.length; i++){
                tasksDone[i].classList.remove('none');
            }
            for (let i = 0; i < tasksTodo.length; i++){
                tasksTodo[i].classList.remove('none');
            }
    }
})