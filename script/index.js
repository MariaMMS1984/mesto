const popupElem = document.querySelector('.popup');
const openPopupButtonElem = document.querySelector('.profile__edit-button');
const closePopupButtonElem = document.querySelector('.popup__close-button');
const popupCardElem = document.querySelector('.cardpopup');
const openPopupCardButtonElem = document.querySelector('.profile__add-button');
const closePopupCardButtonElem = document.querySelector('.cardpopup__close-button');
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
const deleteButtonElem = document.querySelector('card__delete-button');

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
    console.log('close');
    popupCardElem.classList.remove('cardpopup_opened');
}

function formCardSubmitHandler(evt) {
    evt.preventDefault();
    renderCard({ name: nameCardInput.value, link: linkInput.value });
    closeCardPopup();
}

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
    elements.prepend(cardsElement);
}

render();


openPopupButtonElem.addEventListener('click', openPopup);

formElement.addEventListener('submit', formSubmitHandler);

closePopupButtonElem.addEventListener('click', closePopup);

openPopupCardButtonElem.addEventListener('click', openCardPopup);

closePopupCardButtonElem.addEventListener('click', closeCardPopup);

formCardElement.addEventListener('submit', formCardSubmitHandler);

deleteButtonElem.addEventListener('click', newFunction());

function newFunction() {
    return console.log('close');
}
