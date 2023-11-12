/* eslint-disable jsx-a11y/alt-text */

function Header(props) {
  return (
    <header>
      <div className="headerLeft">
        <img className="logo" width={40} height={40} src="img/logo.png" />
        <div className="headerInfo">
          <h3 className="heading">building materials</h3>
          <p className="paragraf">Лучшие строительные материалы</p>
        </div>
      </div>
      <div className="headerRight">
        <div onClick={props.onClickCart}>
          <img width={18} height={18} src="img/carzina.png" />
          <span>1205 руб.</span>
        </div>
        <img className="logoUser" width={18} height={18} src="img/user.png" />
      </div>
    </header>
  )
};

export default Header;