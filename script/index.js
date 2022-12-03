const popupEl = document.querySelector('.popup');     //это НЕ попап профиля, это элемент именно для класса всех попапов для создания универсальных функций
const profilePopupElem = document.querySelector('.profile-popup');    //вот константа для попапа профиля, ей задан конкретный селектор для профиля, в дальнейшем эта константа используется для открытия и закрытия попапа профиля
const openPopupButtonElem = document.querySelector('.profile__edit-button');
const closePopupButtonElem = document.querySelector('.popup__close-button');
const closeCardPopupButtonElem = document.querySelector('.cardpopup__close-button');
const closeImagePopupButtonElem = document.querySelector('.imagepopup__close-button');
const popupCardElem = document.querySelector('.cardpopup');
const openPopupCardButtonElem = document.querySelector('.profile__add-button');
const heartElem = document.querySelectorAll('.card__like-button');
const formElement = document.querySelector('.popup__container');
const formCardElement = document.querySelector('.cardpopup__container');
const nameInput = document.querySelector('.popup__input_data_name');
const jobInput = document.querySelector('.popup__input_data_profession');
const nameCardInput = document.querySelector('.cardpopup__input_data_name');
const linkInput = document.querySelector('.cardpopup__input_data_link');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const cardName = document.querySelector('.card__title');
const cardLink = document.querySelector('.card__image');
const recycleElem = document.querySelector('.card__delete-button');
const popupImageElem = document.querySelector('.imagepopup');
const nameImage = document.querySelector('.imagepopup__title');
const linkImage = document.querySelector('.imagepopup__image');
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
const elements = document.querySelector('.elements');
const cardsTemplate = document.querySelector("#cards-template").content;
function submitFormHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;
    closePopup(profilePopupElem);
}
function openPopup(popupEl) {
    popupEl.classList.add('popup_opened');
}
function openProfilePopup() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileProfession.textContent;
    openPopup(profilePopupElem);
}
function closePopup(popupEl) {
    popupEl.classList.remove('popup_opened');
}
function closeProfilePopup() {
    closePopup(profilePopupElem);
}
function closeCardPopup() {
    closePopup(popupCardElem);
}
function closeImagePopup() {
    closePopup(popupImageElem);
}
function openCardPopup() {
    nameCardInput.value = "";
    linkInput.value = "";
    openPopup(popupCardElem);
}
function submitCardFormHandler(evt) {
    evt.preventDefault();
    addCard({ name: nameCardInput.value, link: linkInput.value });
    closePopup(popupCardElem);
}
function render() {
    cardsInfo.forEach(addCard);
}

function renderCard({ name, link }) {
    const cardsElement = cardsTemplate
        .querySelector(".card")
        .cloneNode(true);
    cardsElement.querySelector(".card__title").textContent = name;
    cardsElement.querySelector(".card__image").src = link;
    cardsElement.querySelector(".card__image").alt = name;
    cardsElement.querySelector('.card__delete-button').addEventListener('click', () => { cardsElement.remove(); });
    cardsElement.querySelector('.card__like-button').addEventListener('click', () => {
        cardsElement.querySelector('.card__like-button').classList.toggle('card__like-button_active')
    });
    cardsElement.querySelector('.card__image').addEventListener('click', () => openImagePopup({ name, link }));
    return cardsElement;
}

render();

function addCard({ name, link }) {
    elements.prepend(renderCard({ name, link }));
}

function openImagePopup({ name, link }) {
    nameImage.textContent = name;
    linkImage.src = link;
    linkImage.alt = name;
    openPopup(popupImageElem);
}
openPopupButtonElem.addEventListener('click', openProfilePopup);
formElement.addEventListener('submit', submitFormHandler);
closePopupButtonElem.addEventListener('click', closeProfilePopup);
closeCardPopupButtonElem.addEventListener('click', closeCardPopup);
closeImagePopupButtonElem.addEventListener('click', closeImagePopup);
openPopupCardButtonElem.addEventListener('click', openCardPopup);
formCardElement.addEventListener('submit', submitCardFormHandler);


document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
        closeProfilePopup();
        closeCardPopup();
        closeImagePopup();
    }
});

document.querySelectorAll('.popup').forEach(popupEl => {
    popupEl.addEventListener('click', (evt) => {
        if (evt.target === evt.currentTarget) {
            closeProfilePopup();
            closeCardPopup();
            closeImagePopup();
        }
    });
})


