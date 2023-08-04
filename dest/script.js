"use strict";
const formInput = document.querySelector(".new-item-form");
formInput === null || formInput === void 0 ? void 0 : formInput.addEventListener('submit', (e) => {
    e.preventDefault();
    let type = document.querySelector('#type').value;
    let formName = document.querySelector('#tofrom').value;
    let formDetail = document.querySelector('#details').value;
    let formAmount = document.querySelector('#amount').value;
    console.log(type, formName, formDetail, formAmount);
    const listData = document.querySelector('.item-list');
    listData.innerHTML +=
        `
    <li>
    <h4>${type}<h4>
    <p>${formAmount} From ${formName} For ${formDetail}<p>
    <li>
    `;
});
