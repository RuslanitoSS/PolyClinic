import { useState } from 'react';
import './ItemCard.css'
import Modal from "@/components/Modal/Modal.jsx";

const ItemCard = ({
    itemName,
    itemImgUrl,
    producers,
    studios,

}) => {
    const [modalActive, setModalActive] = useState(false);
    const [isFavourite, setIsFavourite] = useState(false)

    return (
        <div className="item--card">
            <Modal active={modalActive} setActive={setModalActive}>
                <div className="card--modal-content">
                    <div className="modal-content--close" onClick={() => { setModalActive(false) }}>
                        <img className="close--icon" src="https://upload.wikimedia.org/wikipedia/commons/a/a0/OOjs_UI_icon_close.svg" alt="" />
                    </div>
                    <img src={itemImgUrl} alt="" className='modal-content--img' />
                    <h2 className='modal-content--heading'>
                        А Вы, су..щество эдакое, зареганы на Pinterest'е??
                    </h2>
                    <p className='modal-content--p'>
                        Регистрируйтесь, чтобы увидеть больше
                    </p>
                    <div className="modal-content--login">
                        <div className="login--pinterest">
                            Ввести адрес электронной почты
                        </div>
                        <div className="login--facebook">
                            Войти через Facebook
                        </div>
                    </div>
                </div>
            </Modal>
            <div className="card-top">
                <button className="modal-activator" onClick={() => setModalActive(true)}>
                </button>
                <img src={itemImgUrl} alt="" className="card-top-img" />
            </div>
            <div className="card-bot">
                <div className="card-bot-header">
                    <span className="card-bot--name"> {itemName} </span>
                    <button
                        className={isFavourite ? "card-bot--favourite favourited" : "card-bot--favourite"}
                        onClick={() => { setIsFavourite(!isFavourite)}}
                    >
                        <svg viewBox="0 0 24.00 24.00" fill='none' stroke="#fff" xmlns="http://www.w3.org/2000/svg">

                            <path d="M12 3L14.0357 8.16153C14.2236 8.63799 14.3175 8.87622 14.4614 9.0771C14.5889 
                            9.25516 14.7448 9.41106 14.9229 9.53859C15.1238 9.68245 15.362 9.77641 15.8385 9.96432L21 
                            12L15.8385 14.0357C15.362 14.2236 15.1238 14.3175 14.9229 14.4614C14.7448 14.5889 14.5889 14.7448 
                            14.4614 14.9229C14.3175 15.1238 14.2236 15.362 14.0357 15.8385L12 21L9.96432 15.8385C9.77641 15.362 
                            9.68245 15.1238 9.53859 14.9229C9.41106 14.7448 9.25516 14.5889 9.0771 14.4614C8.87622 14.3175 8.63799 
                            14.2236 8.16153 14.0357L3 12L8.16153 9.96432C8.63799 9.77641 8.87622 9.68245 9.0771 9.53859C9.25516 
                            9.41106 9.41106 9.25516 9.53859 9.0771C9.68245 8.87622 9.77641 8.63799 9.96432 8.16153L12 3Z"
                                 stroke-width="0.9600000000000002" stroke-linecap="round" stroke-linejoin="round">
                            </path>

                        </svg>
                    </button>
                </div>

                <div className="card-bot--author">
                    <div className="author-data">
                        <span className="author-name">
                            {studios.map(studio => 
                                studio.name + ' '
                                )}
                        </span>
                        <span className="author-subs">
                            {producers.map(producer => 
                                producer.name + ' '
                                )}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard;