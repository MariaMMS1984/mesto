const formElement = document.querySelector('.popup__container');
const popupCard = document.querySelector('.cardpopup');
const saveButton = popupCard.querySelector('.popup__save-button');
const validParametrs = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

class FormValidator {
    constructor(validParametrs, formElement) {
        this._inputSelector = validParametrs.inputSelector;
        this._submitButtonSelector = validParametrs.submitButtonSelector;
        this._inactiveButtonClass = validParametrs.inactiveButtonClass;
        this._errorClass = validParametrs.errorClass;
        this._formElement = formElement;
        this._inputErrorClass = validParametrs.inputErrorClass;
    };

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    };

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.textContent = '';
        errorElement.classList.remove(this._errorClass);
    };

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement)
        }
    };

    _setEventListeners() {
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._changeButton();
            });
        });
    };

    _checkValidity() {
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _changeButton() {
        const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        if (this._checkValidity()) {
            buttonElement.disabled = true;
            buttonElement.classList.add(validParametrs.inactiveButtonClass);
        } else {
            buttonElement.disabled = false;
            buttonElement.classList.remove(validParametrs.inactiveButtonClass);
        }
    }

    enableValidation() {
        this._setEventListeners();
    }

    stopCreate() {
        saveButton.disabled = true;
        saveButton.classList.add('popup__save-button_disabled');
    };
}


export { FormValidator, validParametrs }