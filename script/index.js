const popupElem = document.querySelector('.popup');
const openPopupButtonElem = document.querySelector('.profile__edit-button');
const closePopupButtonElem = document.querySelector('.popup__close-button');
const popupCardElem = document.querySelector('.cardpopup');
const openPopupCardButtonElem = document.querySelector('.profile__add-button');
const closePopupCardButtonElem = document.querySelector('.cardpopup__close-button');
const heartElem = document.querySelectorAll('.card__like-button');
let formElement = document.querySelector('.popup__container');
let formCardElement = document.querySelector('.cardpopup__save-button');
let nameInput = document.querySelector('.popup__input_data_name');
let jobInput = document.querySelector('.popup__input_data_profession');
let nameCardInput = document.querySelector('.cardpopup__input_data_name');
let linkInput = document.querySelector('.cardpopup__input_data_link');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');
let cardName = document.querySelector('.card__title');
let cardLink = document.querySelector('.card__image');

let initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

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

function openCardPopup() {
    nameCardInput.value = "Название";
    linkInput.value = "Ссылка на картинку";
    popupCardElem.classList.add('cardpopup_opened');
}

function closeCardPopup() {
    popupCardElem.classList.remove('cardpopup_opened');
}

function formCardSubmitHandler(evt) {
    evt.preventDefault();
    addCard({ name: nameCardInput.value, link: linkInput.value });
    closeCardPopup();
}

openPopupButtonElem.addEventListener('click', openPopup);

formElement.addEventListener('submit', formSubmitHandler);

closePopupButtonElem.addEventListener('click', closePopup);

openPopupCardButtonElem.addEventListener('click', openCardPopup);

closePopupCardButtonElem.addEventListener('click', closeCardPopup);

formCardElement.addEventListener('submit', formCardSubmitHandler);

const cardsInfo = initialCards.map(function (item) {
    return {
        name: item.name,
        link: item.link
    };
});

const elements = document.querySelector('.elements');
const cardsTemplate = document.querySelector("#cards-template").content;

function render() {
    cardsInfo.forEach(renderCard);
}

function renderCard({ name, link }) {
    const cardsElement = cardsTemplate
        .querySelector(".card")
        .cloneNode(true);
    cardsElement.querySelector(".card__title").textContent = name;
    cardsElement.querySelector(".card__image").src = link;
    cardsElement.querySelector(".card__image").alt = name;
    cardsElement.querySelectorAll('.card__like-button').forEach(heartElem => {
        heartElem.addEventListener('click', () => {
            heartElem.classList.toggle('card__like-button_active');
        })
    })
    elements.append(cardsElement);
}

render();

