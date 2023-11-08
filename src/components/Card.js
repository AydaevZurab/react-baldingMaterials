function Card(props) {
  // const onClickButton = () => {
  //   alert(props.name)
  // }
    return (
        <div className="card">
            <div className="favorite">
              <img src="img/liked.png" alt="liked" />
            </div>
            <div className="cardMarginLeft">
              <img className="imageCenter" width={133} height={112} src={props.imageUrl} alt="Materials" />
              <h5>{props.name}</h5>
              <div className="cardBottom">
                <div className="space">
                  <div className="price">Цена:</div>
                  <b>{props.price} руб.</b>
                </div>
                <div className="button" onClick={props.onClick}>
                  <img src="img/unplus.png" alt="Plus" />
                </div>
              </div>
            </div>
          </div>
    )
};

export default Card;