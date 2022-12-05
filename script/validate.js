const inputElement = document.querySelector('.popup__input');

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

function changeButton(inputList, buttonElement, inactiveButtonClass) {
    if (checkValidity(inputList)) {
        buttonElement.disabled = true;
        buttonElement.classList.add(inactiveButtonClass);
    } else {
        buttonElement.disabled = false;
        buttonElement.classList.remove(inactiveButtonClass);
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
    const saveElement = document.querySelector('.popup__save-button');
    const submitButtons = Array.from(document.querySelectorAll('.popup__save-button'));
    submitButtons.forEach((saveElement) => {
        saveElement.disabled = true;
        saveElement.classList.add(validParametrs.inactiveButtonClass);
    });
};






