let addTaskBtn = document.querySelector('.form__button');
let removeTasksBtn = document.querySelector('.remove-btn');
let newTask = document.querySelector('.form__input');
let alert = document.querySelector('.alert');
let tasksList = document.querySelector('.task-manager__tasks');
let checkboxes = document.querySelectorAll('.task-manager__checkbox');
let taskItems;

import {createTaskField} from './utils.js';
import {showError} from './utils.js';
import {hideError} from './utils.js';
import {hideNoTaskField} from './utils.js';
import {showNoTaskField} from './utils.js';
import {makeActiveBtn} from './utils.js';
import {makeDisabledBtn} from './utils.js';
import {cleanTasksList} from './utils.js';
import {addStyle} from './utils.js';
import {removeStyle} from './utils.js';
import {changeTagStyle} from './utils.js';


addTaskBtn.addEventListener('click', () => {
    if(newTask.value) {
        hideError(alert);
        hideNoTaskField();
        createTaskField(newTask.value, tasksList);
        makeActiveBtn(removeTasksBtn);
    } else {
        showError(alert);
    }
        
    newTask.value = '';
    taskItems = document.querySelectorAll('.task-manager__task-item');
    taskItems.forEach(el => {
        el.addEventListener('click', changeTagStyle);
    })
})

removeTasksBtn.addEventListener('click', () => {
    cleanTasksList(tasksList);
    makeDisabledBtn(removeTasksBtn);
    showNoTaskField();
})










// checkboxes.forEach(el => {
//     el.addEventListener('change', () => {
//         let parent = this.parentNode;
//         console.log(parent);
//         // let addClassName = 'task-manager__task-item_done';
        
//         // if ( !el.classList.contains('selected') ) {
//         //     removeStyle(parent, addClassName);
//         // } else {
//         //     addStyle(parent, addClassName);
//         // }
//     });
// });



