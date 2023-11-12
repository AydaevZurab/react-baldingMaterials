import React from "react";

function Card({imageUrl, name, price, onPlus}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const onClickPlus = () => {
    onPlus({imageUrl, name, price}) 
    setIsAdded(!isAdded)
  }

  const [isLiked, unLiked] = React.useState(false)
  
  const onClickFavorite = () => {
    unLiked(!isLiked)
  }

    return (
        <div className="card">
            <div className="favorite" onClick={onClickFavorite}>
              <img width={17 } height={17} src={isLiked ? "img/liked.png" : "img/unliked.png"} alt="liked" />
            </div>
            <div className="cardMarginLeft">
              <img className="imageCenter" width={133} height={112} src={imageUrl} alt="Materials" />
              <h5>{name}</h5>
              <div className="cardBottom">
                <div className="space">
                  <div className="price">Цена:</div>
                  <b>{price} руб.</b>
                </div>
                <div className="button" onClick={onClickPlus}>
                  <img src={isAdded ? "img/added.png" : "img/unplus.png"} alt="Plus" />
                </div>
              </div>
            </div>
          </div>
    )
};

export default Card;