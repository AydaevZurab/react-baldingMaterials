function Card() {
    return (
        <div className="card">
            <div className="favorite">
              <img src="img/liked.png" alt="liked" />
            </div>
            <div className="cardMarginLeft">
              <img className="imageCenter" width={133} height={112} src="img/materials/1.jpeg" alt="Materials" />
              <h5>Угловая шлифмашина</h5>
              <div className="cardBottom">
                <div className="space">
                  <div className="price">Цена:</div>
                  <b>10 999 руб.</b>
                </div>
                <div className="button">
                  <img src="img/unplus.png" alt="Plus" />
                </div>
              </div>
            </div>
          </div>
    )
};

export default Card;