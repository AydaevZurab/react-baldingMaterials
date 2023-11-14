/* eslint-disable jsx-a11y/alt-text */

function Cart({items = [], onClickClose}) {

  return (
    <div className="overlay">
      <div className="drawer">
        <div className="cartNameBlock">
          <h2 className="cartName">Корзина</h2>
          <div onClick={onClickClose}>
            <img src="img/remove.png" alt="Remove" />
          </div>
        </div>
        <div className="items">
          {items.map((obj) => (
            <div className="cartItem">
              <img className="cartItemImg" width={70} height={60} src={obj.imageUrl} alt="Materials" />
              <div>
                <p>{obj.name}</p>
                <b>{obj.price} руб.</b>
              </div>
              <div className="btn-remove" onClick={''}>
                <img src="img/remove.png" alt="Remove" />
              </div>
            </div>
          ))}
        </div>
        <ul className="cartTotalBlock">
          <li>
            <span>Итого:</span>
            <b>16 199 руб.</b>
          </li>
          <li>
            <span>Налог 5%:</span>
            <div></div>
            <b>809 руб.</b>
          </li>
        </ul>
        <button className="greenBtn">
          <p>Оформить заказ</p>
          <img src="img/strelka.png" />
        </button>
      </div>
    </div>
  )
};

export default Cart