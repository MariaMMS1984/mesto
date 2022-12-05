const popupEl = document.querySelector('.popup');     //это НЕ попап профиля, это элемент именно для класса всех попапов для создания универсальных функций
const profilePopup = document.querySelector('.profile-popup');    //вот константа для попапа профиля, ей задан конкретный селектор для профиля, в дальнейшем эта константа используется для открытия и закрытия попапа профиля
const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const closeButtons = document.querySelectorAll('.popup__close-button');
const popupCard = document.querySelector('.cardpopup');
const buttonOpenPopupCard = document.querySelector('.profile__add-button');
const heartElem = document.querySelectorAll('.card__like-button');
const formElement = document.querySelector('.popup__container');
const formCard = document.querySelector('.cardpopup__container');
const nameInput = document.querySelector('.popup__input_data_name');
const jobInput = document.querySelector('.popup__input_data_profession');
const inputNameCard = document.querySelector('.cardpopup__input_data_name');
const linkInput = document.querySelector('.cardpopup__input_data_link');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const cardName = document.querySelector('.card__title');
const cardLink = document.querySelector('.card__image');
const recycleElem = document.querySelector('.card__delete-button');
const popupImage = document.querySelector('.imagepopup');
const nameImage = document.querySelector('.popup__imgtitle');
const linkImage = document.querySelector('.popup__image');
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
    closePopup(profilePopup);
}
function openPopup(popupEl) {
    popupEl.classList.add('popup_opened');
    document.addEventListener('keydown', function (evt) {
        if (evt.key === 'Escape') {
            const popup = document.querySelector('.popup_opened');
            closePopup(popup);
        }
    });
}
function openProfilePopup() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileProfession.textContent;
    openPopup(profilePopup);
}
function closePopup(popupEl) {
    popupEl.classList.remove('popup_opened');
    document.removeEventListener('keydown', function (evt) {
        if (evt.key === 'Escape') {
            const popup = document.querySelector('.popup_opened');
            closePopup(popup);
        }
    });
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
    stopCreate(validParametrs);
}
function submitCardFormHandler(evt) {
    evt.preventDefault();
    addCard({ name: inputNameCard.value, link: linkInput.value });
    closePopup(popupCard);
}
function render() {
    cardsInfo.forEach(addCard);
}

function createCard({ name, link }) {
    const cardsElement = cardsTemplate
        .querySelector(".card")
        .cloneNode(true);
    const cardsImg = cardsElement.querySelector(".card__image");
    cardsElement.querySelector(".card__title").textContent = name;
    cardsImg.src = link;
    cardsImg.alt = name;
    cardsElement.querySelector('.card__delete-button').addEventListener('click', () => { cardsElement.remove(); });
    cardsElement.querySelector('.card__like-button').addEventListener('click', () => {
        cardsElement.querySelector('.card__like-button').classList.toggle('card__like-button_active')
    });
    cardsElement.querySelector('.card__image').addEventListener('click', () => openImagePopup({ name, link }));
    return cardsElement;
}

render();

function addCard({ name, link }) {
    elements.prepend(createCard({ name, link }));
}

function openImagePopup({ name, link }) {
    nameImage.textContent = name;
    linkImage.src = link;
    linkImage.alt = name;
    openPopup(popupImage);
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


