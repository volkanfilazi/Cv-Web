let contactStateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
        clearInterval(contactStateCheck);
        const formContainer = document.querySelector('.form-container')
        const formCompleted = document.querySelector('.form-completed-container')
        const nameInput = document.querySelector('#nameInput')
        const nameLabel = document.querySelector('.nameLabel')
        const lastNameInput = document.querySelector('#lastNameInput')
        const lastNameLabel = document.querySelector('.lastNameLabel')
        const emailInput = document.querySelector('#emailInput')
        const emailLabel = document.querySelector('.emailLabel')
        const textAreaInput = document.querySelector('#textAreaInput')
        const textAreaLabel = document.querySelector('.textAreaLabel')
        const submitButton = document.querySelector('.submitButton')

        submitButton?.addEventListener("click", function () {
            if (nameInput.value === '') {
                nameInput.classList.add('border-2', 'border-red-500')
                nameLabel.classList.add('text-red-500')
            } else {
                nameInput.classList.remove('border-2', 'border-red-500')
                nameLabel.classList.remove('text-red-500')
            }

            if (lastNameInput.value === '') {
                lastNameInput.classList.add('border-2', 'border-red-500')
                lastNameLabel.classList.add('text-red-500')
            } else {
                lastNameInput.classList.remove('border-2', 'border-red-500')
                lastNameLabel.classList.remove('text-red-500')
            }

            if (emailInput.value === '') {
                emailInput.classList.add('border-2', 'border-red-500')
                emailLabel.classList.add('text-red-500')
            } else {
                emailInput.classList.remove('border-2', 'border-red-500')
                emailLabel.classList.remove('text-red-500')
            }

            if (textAreaInput.value === '') {
                textAreaInput.classList.add('border-2', 'border-red-500')
                textAreaLabel.classList.add('text-red-500')
            } else {
                textAreaInput.classList.remove('border-2', 'border-red-500')
                textAreaLabel.classList.remove('text-red-500')
            }
            if (nameInput.value != '' && lastNameInput.value != '' && emailInput.value != '' && textAreaInput.value != '') {
                formContainer.classList.add('hidden')
                formCompleted.classList.remove('hidden')
                formCompleted.classList.add('flex')
            }
        })



    }
}, 100);
