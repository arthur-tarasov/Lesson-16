const btnCreateEl = document.getElementById('create');
const containerEl = document.getElementsByClassName('container')[0];
const todoTemplate = document.getElementById('todo-template').innerHTML;


let counter = 1;

function onCheckboxChange(event) {
    console.log(event)
    if (event.target.checked) {
        event.target.previousElementSibling.innerText = 'Checkbox is applied';
    } else {
        event.target.previousElementSibling.innerText = 'Checkbox is off';
    }
}

function onDeleteButtonClick() {
    console.log('delete button is applied');
}

btnCreateEl.addEventListener('click', () => {
    // const item = `<div>
    //     <h2>Heading ${counter++}</h2>
    //     <p>Decrtiption ${counter++}</p>
    //     <input type="checkbox">
    //     <button class="delete-btn">Delete</button>
    //     <button class="delete-edit">Edit</button>
    // </div>`;

    // containerEl.innerHTML += item;

    // const  divEl = document.createElement('div');
    // const  headingEl = document.createElement('h2');
    // headingEl.innerText = `Heading ${counter++}`

    // const pEl = document.createElement('p');
    // pEl.innerText = `Paragraph ${counter++}`;

    // const inputEl = document.createElement('input');
    // inputEl.setAttribute('type', 'checkbox');

    // inputEl.addEventListener('change', onCheckboxChange);

    // const deleteButtonEl = document.createElement('button');
    // deleteButtonEl.innerText = 'Delete';

    // deleteButtonEl.addEventListener('click', onDeleteButtonClick)

    // divEl.append(headingEl, pEl, inputEl, deleteButtonEl);

    // containerEl.append(divEl);

    const divEl = document.createElement('div');
   
    const result = todoTemplate
        .replace('{{heading}}', 'Heading ' + counter)
        .replace('{{paragraph}}', 'Paragraph ' + counter);

    divEl.innerHTML += result;

    divEl.querySelector('[type="checkbox"]').addEventListener('change', onCheckboxChange);

    divEl.querySelector('.delete-btn').addEventListener('click', onDeleteButtonClick)

    containerEl.append(divEl);
    counter++;
});