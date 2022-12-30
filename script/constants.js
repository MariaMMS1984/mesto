
const closePopupByEsc = (evt) => {
    if (evt.key === 'Escape') {
        const popup = document.querySelector('.popup_opened');
        closePopup(popup);
    }
};

function closePopup(closePopupByEsc) {
    const popupEl = document.querySelector('.imagepopup');
    popupEl.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEsc);
}

export { closePopupByEsc, closePopup }


//как вы предложили программа не дает назвать этот файл ("выберите другое название")