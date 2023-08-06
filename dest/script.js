"use strict";
function createListItem(type, formName, formDetail, formAmount) {
    return `
    <li>
        <h4>${type}</h4>
        <p>Rp.${formAmount} From ${formName} For ${formDetail}</p>
    <li>
    `;
}
function handleFormSubmission(formElement, listElement) {
    formElement.addEventListener('submit', (e) => {
        e.preventDefault();
        let type = formElement.querySelector('#type').value;
        let formName = formElement.querySelector('#tofrom').value;
        let formDetail = formElement.querySelector('#details').value;
        let formAmount = formElement.querySelector('#amount').valueAsNumber;
        console.log(type, formName, formDetail, formAmount);
        const listItem = createListItem(type, formName, formDetail, formAmount);
        listElement.innerHTML += listItem;
        formElement.reset();
    });
}
const formInput = document.querySelector(".new-item-form");
const listData = document.querySelector(".item-list");
handleFormSubmission(formInput, listData);
