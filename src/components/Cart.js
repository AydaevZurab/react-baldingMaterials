/* eslint-disable jsx-a11y/alt-text */
function Cart() {
    return (
        <div style={{ display: 'none' }} className="overlay">
        <div className="drawer">
          <div className="cartNameBlock">
            <h2 className="cartName">Корзина</h2>
            <div className="btn-remove">
              <img src="img/remove.png" alt="Remove" />
            </div>
          </div>
          <div className="items">
            <div className="cartItem">
              <img className="cartItemImg" width={70} height={60} src="img/materials/2.jpg" alt="Materials" />
              <div>
                <p>Перфоратор</p>
                <b>15 999 руб.</b>
              </div>
              <div className="btn-remove">
                <img src="img/remove.png" alt="Remove" />
              </div>
            </div>
            <div className="cartItem">
              <img className="cartItemImg" width={70} height={60} src="img/materials/3.jpg" alt="Materials" />
              <div>
                <p>Ключ</p>
                <b>200 руб.</b>
              </div>
              <div className="btn-remove">
                <img src="img/remove.png" alt="Remove" />
              </div>
            </div>
          </div>
          <ul className="cartTotalBlock">
            <li>
              <span>Итого:</span>
              <div></div>
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