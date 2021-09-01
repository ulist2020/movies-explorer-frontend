import React from "react";
import './InfoTooltip.css';

function InfoTooltip({isOpen, onClose, isSuccess }) {
  return (
    <section 
    className={isOpen ? 'popup popup_opened' : 'popup'} 
    id="InfoTooltip">
      <div className="popup__cont">
        <button
          className="popup__close-but"
          type="button"
          onClick={onClose}
        />
        {isSuccess ? (
          <>
            <div className="popup__img" />
            <h2 className="popup__header">Успешно!</h2>
          </>
        ) : (
          <>
            <div className="popup__img popup__img_fail" />
            <h2 className="popup__header popup__header_info">Что-то пошло не так. Попробуйте ещё раз!</h2>
          </>
        )}
      </div>
    </section>
  );
}

export default InfoTooltip;