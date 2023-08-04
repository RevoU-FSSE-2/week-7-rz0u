const formInput = document.querySelector(".new-item-form") as HTMLFormElement;
formInput?.addEventListener('submit', (e) => {
    e.preventDefault();
    let type = (document.querySelector('#type') as HTMLInputElement).value;
    let formName = (document.querySelector('#tofrom') as HTMLInputElement).value;
    let formDetail = (document.querySelector('#details') as HTMLInputElement).value;
    let formAmount = (document.querySelector('#amount') as HTMLInputElement).value;

    console.log(type, formName, formDetail, formAmount);

    const listData = document.querySelector('.item-list') as HTMLElement
    listData.innerHTML += 
    `
    <li>
    <h4>${type}<h4>
    <p>${formAmount} From ${formName} For ${formDetail}<p>
    <li>
    `
})