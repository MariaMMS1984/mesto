const validParametrs = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

class FormValidator {
    constructor(validParametrs, formSelector) {
        this._inputSelector = validParametrs.inputSelector;
        this._submitButtonSelector = validParametrs.submitButtonSelector;
        this._inactiveButtonClass = validParametrs.inactiveButtonClass;
        this._errorClass = validParametrs.errorClass;
        this._formSelector = formSelector;
        this._inputErrorClass = validParametrs.inputErrorClass;
        this._inputList = Array.from(this._formSelector.querySelectorAll(this._inputSelector));
        this._buttonElement = this._formSelector.querySelector(this._submitButtonSelector);
    };

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formSelector.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    };

    _hideInputError(inputElement) {
        const errorElement = this._formSelector.querySelector(`.${inputElement.id}-error`);
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
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._changeButton();
            });
        });
    };

    _checkValidity() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _changeButton() {
        if (this._checkValidity()) {
            this._buttonElement.disabled = true;
            this._buttonElement.classList.add(validParametrs.inactiveButtonClass);
        } else {
            this._buttonElement.disabled = false;
            this._buttonElement.classList.remove(validParametrs.inactiveButtonClass);
        }
    }

    enableValidation() {
        this._setEventListeners();
    }

    disableSubmitButton() {
        this._buttonElement.disabled = true;
        this._buttonElement.classList.add(validParametrs.inactiveButtonClass);
    };
}


export { FormValidator, validParametrs }