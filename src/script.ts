function createListItem(type:string, formName:string, formDetail:string, formAmount:number):string {
    return `
    <li>
        <h4>${type}</h4>
        <p>Rp.${formAmount} From ${formName} For ${formDetail}</p>
    <li>
    `;
}
function handleFormSubmission(formElement:HTMLFormElement, listElement:HTMLElement):void {
    formElement.addEventListener('submit', (e) => {
        e.preventDefault();
        let type = (formElement.querySelector('#type') as HTMLInputElement).value;
        let formName = (formElement.querySelector('#tofrom') as HTMLInputElement).value;
        let formDetail = (formElement.querySelector('#details') as HTMLInputElement).value;
        let formAmount = (formElement.querySelector('#amount') as HTMLInputElement).valueAsNumber;

        console.log(type, formName, formDetail, formAmount);

        const listItem = createListItem(type, formName, formDetail, formAmount);
        listElement.innerHTML += listItem;
        formElement.reset();
    });
}

const formInput = document.querySelector(".new-item-form") as HTMLFormElement;
const listData = document.querySelector(".item-list") as HTMLElement;
handleFormSubmission(formInput, listData);