document.querySelector('#add-time')
.addEventListener('click', cloneField);

function cloneField() {
    const fieldContainerIndex = document.querySelectorAll('.schedule-item').length
    const lastFieldContainer = document.querySelectorAll('.schedule-item').item(fieldContainerIndex - 1)
    const lastSelectField = lastFieldContainer.querySelector('select')
    const lastInputFields = lastFieldContainer.querySelectorAll('input')

    if(lastSelectField.value === '' || lastInputFields[0].value === '' || lastInputFields[1].value === '') {
        showAlert()
    } else {
        const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);
        
        const newFields = newFieldContainer.querySelectorAll('input');
        
        newFields.forEach(i => i.value = "");
    
        document.querySelector('#schedule-items').appendChild(newFieldContainer);
    }
   
    function showAlert() {
        const alertMsg = document.createElement('p')
        const alertTxt = document.createTextNode('Preencha todos os campos do último horário antes de criar um novo!')
        const field = document.querySelector('#schedule-items')
        
        alertMsg.classList.add('alert-msg')
        alertMsg.appendChild(alertTxt)
        field.appendChild(alertMsg)

        setTimeout(() => {
            alertMsg.classList.add('alert-msg-show')
        }, 500)

        setTimeout(() => {
            alertMsg.classList.remove('alert-msg-show')
        }, 6500)

        setTimeout(() => {
            field.removeChild(alertMsg)
        }, 7000)
    }
}