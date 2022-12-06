const validParametrs = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(validParametrs.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validParametrs.errorClass);
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(validParametrs.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(validParametrs.errorClass);
};

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement)
    }
};

const setEventListeners = (formElement, validParametrs) => {
    const inputList = Array.from(formElement.querySelectorAll(validParametrs.inputSelector));
    const buttonElement = formElement.querySelector(validParametrs.submitButtonSelector);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
            changeButton(inputList, buttonElement, validParametrs.inactiveButtonClass);
        });
    });
};

function checkValidity(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

function changeButton(inputList, buttonElement) {
    if (checkValidity(inputList)) {
        buttonElement.disabled = true;
        buttonElement.classList.add('popup__save-button_disabled');
    } else {
        buttonElement.disabled = false;
        buttonElement.classList.remove('popup__save-button_disabled');
    }
}

function enableValidation(validParametrs) {
    const formList = Array.from(document.querySelectorAll(validParametrs.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement, validParametrs);
    });
}

enableValidation(validParametrs);

function stopCreate(validParametrs) {
    saveButton.disabled = true;
    saveButton.classList.add(validParametrs.inactiveButtonClass);
};






