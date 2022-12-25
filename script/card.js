class Card {
    constructor(initialCards) {
        this._name = initialCards.name;
        this._link = initialCards.link;
    }

    _getTemplate() {
        const cardsElement = document.querySelector('#cards-template').content
            .querySelector(".card").
            cloneNode(true);
        return cardsElement;
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
        document.querySelector('.popup__imgtitle').textContent = this._name;
        document.querySelector('.popup__image').src = this._link;
        document.querySelector('.popup__image').alt = this._name;
        openPopup(popupImage);
    }
}

