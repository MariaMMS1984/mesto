import { closePopupByEsc, closePopup } from './constants.js'
const cardSelector = document.querySelector('#cards-template');   //Card.js:18 Uncaught ReferenceError: cardSelector is not defined, если его удалю. Да это и логично. Где-то же должно быть определено, что такое cardSelector
const popupImage = document.querySelector('.popup__image');      //для того, чтобы передать его в конструктор класса, нужно же определить, что мы передаем. И ошибка в консоли при удалении данной переменной об этом говорит.
// если логика совсем другая, прошу пояснить
const popupTitle = document.querySelector('.popup__imgtitle');
const popupImg = document.querySelector('.imagepopup');
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
        document.addEventListener('keydown', closePopupByEsc);
    }

}

export { Card }