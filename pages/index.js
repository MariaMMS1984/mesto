const popupElem = document.querySelector('.popup');
const openPopupButtonElem = document.querySelector('.profile__edit-button');
const closePopupButtonElem = document.querySelector('.popup__close-button');


openPopupButtonElem.addEventListener('click', () => {
    popupElem.classList.add('popup_opened');
    qs('.popup__name').value = qs('.profile__name').textContent;
    qs('.popup__profession').value = qs('.profile__profession').textContent;
});

closePopupButtonElem.addEventListener('click', () => {
    popupElem.classList.remove('popup_opened');
});

let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__profession');
function qs(selector) {
    return document.querySelector(selector);
}
function formSubmitHandler(evt) {
    evt.preventDefault();
    qs('.profile__name').textContent = qs('.popup__name').value;
    qs('.profile__profession').textContent = qs('.popup__profession').value;
}

formElement.addEventListener('submit', formSubmitHandler); 