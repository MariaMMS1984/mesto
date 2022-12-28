
const cardData = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
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

const cardSelector = document.querySelector('#cards-template');
const popupImage = document.querySelector('.popup__image');
const popupTitle = document.querySelector('.popup__imgtitle');
const popupImg = document.querySelector('.imagepopup');
const closePopupByEsc = () => {                                  // иначе ошибка "Uncaught TypeError: Cannot read properties of undefined (reading 'key')"
    document.addEventListener('keydown', () => {
        popupImg.classList.remove('popup_opened')
    })
};
class Card {
    constructor(cardData, cardSelector) {
        this._name = cardData.name;
        this._link = cardData.link;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardsElement = cardSelector.content.querySelector('.card').cloneNode(true);
        return cardsElement
    }

    _handleLikeClick() {
        this._like = this._element.querySelector('.card__like-button');
        this._like.addEventListener('click', () => {
            this._like.classList.toggle('card__like-button_active');
        });
    };

    _handleDeleteCard() {
        this._remove = this._element.querySelector('.card__delete-button');
        this._remove.addEventListener('click', () => {
            this._remove.closest('.card').remove();
        });
    };

    _openBigImage() {
        this._image = this._element.querySelector('.card__image')
        this._image.addEventListener('click', () => {
            this._openImagePopup();
        });
    }
    createCard() {
        this._element = this._getTemplate();
        const cardsImg = this._element.querySelector('.card__image');

        this._element.querySelector('.card__title').textContent = this._name;
        cardsImg.src = this._link;
        cardsImg.alt = this._name;

        this._handleLikeClick();
        this._handleDeleteCard();
        this._openBigImage();

        return this._element;
    };

    _openImagePopup() {
        popupTitle.textContent = this._name;
        popupImage.src = this._link;
        popupImage.alt = this._name;
        this._openPopup();
    }

    _openPopup() {
        popupImg.classList.add('popup_opened');
        closePopupByEsc();
    }

}

export { Card }