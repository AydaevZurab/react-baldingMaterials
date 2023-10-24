/* eslint-disable jsx-a11y/alt-text */
function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="drawer"></div>
      </div>
      <header>
        <div className="headerLeft">
          <img className="logo" width={40} height={40} src="img/logo.png" />
          <div className="headerInfo">
            <h3 className="heading">building materials</h3>
            <p className="paragraf">Лучшие строительные материалы</p>
          </div>
        </div>
        <div className="headerRight">
          <div>
            <img width={18} height={18} src="img/carzina.png" />
            <span className="balans">1205 руб.</span>
          </div>
          <div className="user">
            <img width={18} height={18} src="img/user.png" />
          </div>
        </div>
      </header> 
      <div className="content">
        <div className="content-search">
          <h1 className="contentH1">Все материалы</h1>
          <div className="search-block">
            <img src="img/search.png" alt="Search" />
            <input className="searchInput" placeholder="Поиск..." /> 
          </div>
        </div>

        <div className="materials">
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
                <button className="button">
                  <img width={11} height={11} src="img/unplus.png" alt="Plus" />
                </button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="cardMarginLeft">
              <img className="imageCenter" width={133} height={112} src="img/materials/2.jpg" alt="Materials" />
              <h5>Перфоратор</h5>
              <div className="cardBottom">
                <div className="space">
                  <div className="price">Цена:</div>
                  <b>15 999 руб.</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src="img/unplus.png" alt="Plus" />
                </button>
              </div>
            </div>
          </div><div className="card">
            <div className="cardMarginLeft">
              <img className="imageCenter" width={133} height={112} src="img/materials/3.jpg" alt="Materials" />
              <h5>Ключ</h5>
              <div className="cardBottom">
                <div className="space">
                  <div className="price">Цена:</div>
                  <b>200 руб.</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src="img/unplus.png" alt="Plus" />
                </button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="cardMarginLeft">
              <img className="imageCenter" width={133} height={112} src="img/materials/4.jpg" alt="Materials" />
              <h5>Плоскогупцы</h5>
              <div className="cardBottom">
                <div className="space">
                  <div className="price">Цена:</div>
                  <b>400 руб.</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src="img/unplus.png" alt="Plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
