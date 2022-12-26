import { Card } from './card.js'
const profilePopup = document.querySelector('.profile-popup');    //вот константа для попапа профиля, ей задан конкретный селектор для профиля, в дальнейшем эта константа используется для открытия и закрытия попапа профиля
const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const closeButtons = document.querySelectorAll('.popup__close-button');
const popupCard = document.querySelector('.cardpopup');
const buttonOpenPopupCard = document.querySelector('.profile__add-button');
const formElement = document.querySelector('.popup__container');
const editFormPopup = document.querySelector('.profilepopup__container');
const formCard = document.querySelector('.cardpopup__container');
const nameInput = document.querySelector('.popup__input_data_name');
const jobInput = document.querySelector('.popup__input_data_profession');
const inputNameCard = document.querySelector('.cardpopup__input_data_name');
const linkInput = document.querySelector('.cardpopup__input_data_link');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const popupImage = document.querySelector('.imagepopup');
const saveButton = popupCard.querySelector('.popup__save-button');
const elements = document.querySelector('.elements');
const initialCards = [
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

const cardsInfo = initialCards.map(function (item) {
    return {
        name: item.name,
        link: item.link
    };
});

function submitFormHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;
    closePopup(profilePopup);
}

const closePopupByEsc = (evt) => {
    if (evt.key === 'Escape') {
        const popup = document.querySelector('.popup_opened');
        closePopup(popup);
    }
};

function openPopup(popupEl) {
    popupEl.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEsc);
}
function openProfilePopup() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileProfession.textContent;
    openPopup(profilePopup);
}
function closePopup(popupEl, closePopupByEsc) {
    popupEl.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEsc);
}
function closeProfilePopup() {
    closePopup(profilePopup);
}
function closeCardPopup() {
    closePopup(popupCard);
}
function closeImagePopup() {
    closePopup(popupImage);
}
function openCardPopup() {
    inputNameCard.value = "";
    linkInput.value = "";
    openPopup(popupCard);
    stopCreate();
}
function submitCardFormHandler(evt) {
    evt.preventDefault();
    addCard({ name: inputNameCard.value, link: linkInput.value });
    closePopup(popupCard);
}

function stopCreate() {
    saveButton.disabled = true;
    saveButton.classList.add('popup__save-button_disabled');
};

function render() {
    cardsInfo.forEach(addCard);
}


render();

function addCard(initialCards) {
    const card = new Card(initialCards, '.card');
    const cardCreate = card.createCard();
    elements.prepend(cardCreate);
}


buttonOpenPopupProfile.addEventListener('click', openProfilePopup);
formElement.addEventListener('submit', submitFormHandler);

document.querySelectorAll('.popup__close-button').forEach(closeButtons => {
    closeButtons.addEventListener('click', (evt) => {
        const popup = document.querySelector('.popup_opened');
        closePopup(popup);
    });
})
buttonOpenPopupCard.addEventListener('click', openCardPopup);
formCard.addEventListener('submit', submitCardFormHandler);

document.querySelectorAll('.popup').forEach(popupEl => {
    popupEl.addEventListener('click', (evt) => {
        if (evt.target === evt.currentTarget && evt.target.classList.contains('popup_opened')) {
            closePopup(evt.currentTarget);
        };
    });
})


export { profilePopup, popupCard }