const popupElem = document.querySelector('.popup');
const openPopupButtonElem = document.querySelector('.profile__edit-button');
const closePopupButtonElem = document.querySelector('.popup__close-button');
const savePopupButtonElem = document.querySelector('.popup__save-button');
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__input_data_name');
let jobInput = document.querySelector('.popup__input_data_profession');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');




openPopupButtonElem.addEventListener('click', () => {
    popupElem.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileProfession.textContent;
});

closePopupButtonElem.addEventListener('click', 'submit', () => {
    popupElem.classList.remove('popup_opened');
});


function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);