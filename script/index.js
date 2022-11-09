const popupElem = document.querySelector('.popup');
const openPopupButtonElem = document.querySelector('.profile__edit-button');
const closePopupButtonElem = document.querySelector('.popup__close-button');
const heartElem = document.querySelectorAll('.card__like-button');
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__input_data_name');
let jobInput = document.querySelector('.popup__input_data_profession');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;
    closePopup();
}

function openPopup() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileProfession.textContent;
    popupElem.classList.add('popup_opened');
}

function closePopup() {
    popupElem.classList.remove('popup_opened');
}

document.querySelectorAll('.card__like-button').forEach(heartElem => {
    heartElem.addEventListener('click', () => {
        heartElem.classList.toggle('card__like-button_active');
    })
})

openPopupButtonElem.addEventListener('click', openPopup);

formElement.addEventListener('submit', formSubmitHandler);

closePopupButtonElem.addEventListener('click', closePopup);