let taskLi;
let checkbox;
let taskItem;


let noTaskField = document.querySelector('.task-manager__no-task-field');


export function createTaskField(task, tag1) {

    taskLi = document.createElement('li');
    taskLi.className = 'task-manager__task';
    taskItem = document.createElement('div');
    taskItem.className = 'task-manager__task-item';
    let taskName = document.createElement('p');
    taskName.className = 'task-manager__task-name';
    taskName.innerHTML = task;
    checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-manager__checkbox';

    tag1.append(taskLi);
    taskLi.append(taskItem);
    taskItem.append(taskName);
    taskItem.append(checkbox);
}

export function showError(message) {
    message.classList.add('alert_active');
}

export function hideError(message) {
    message.classList.remove('alert_active');
}

export function hideNoTaskField() {
    noTaskField.classList.remove('task-manager__no-task-field_active');
}

export function showNoTaskField() {
    noTaskField.classList.add('task-manager__no-task-field_active');
}

export function makeActiveBtn(btn) {
    btn.disabled = false;
}

export function makeDisabledBtn(btn) {
    btn.disabled = true;
}

export function cleanTasksList(tag) {
    tag.replaceChildren();
}

export function addStyle(tag, clName) {
    tag.classList.add(clName);
}

export function removeStyle(tag, clName) {
    tag.classList.remove(clName);
}

let addClassName = 'task-manager__task-item_done';

export function changeTagStyle(event) {

    if (event.target.type === 'checkbox') {
        if (!event.target.selected) {
            addStyle(event.currentTarget, addClassName);
            event.target.selected = true;
        } else {
            removeStyle(event.currentTarget, addClassName);
            event.target.selected = false;
        }
    }
}








