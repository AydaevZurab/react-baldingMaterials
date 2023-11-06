/* eslint-disable jsx-a11y/alt-text */

import Card from "./components/Card";
import Cart from "./components/Cart";
import Header from "./components/Header";

const arr = [{
  name: "Угловая шлифмашина",
  price: 10999,
  imageUrl: "img/materials/1.jpeg",
},
{
  name: "Перфаратор",
  price: 19600,
  imageUrl: "img/materials/2.jpg",
},
{
  name: "Гаичный Ключ",
  price: 560,
  imageUrl: "img/materials/3.jpg",
},
{
  name: "Плоскогубцы",
  price: 1200,
  imageUrl: "img/materials/4.jpg",
},
];

function App() {
  return (
    <div className="wrapper">
      <Cart />
      <Header />
      <div className="content">
        <div className="content-search">
          <h1 className="contentH1">Все материалы</h1>
          <div className="search-block">
            <img src="img/search.png" alt="Search" />
            <input className="searchInput" placeholder="Поиск..." />
          </div>
        </div>
        <div className="materials">

          {arr.map((obj) => (
            <Card
              name={obj.name}
              price={obj.price}
              imageUrl={obj.imageUrl}
            />
          ))}

        </div>
      </div>
    </div>
  );
}

export default App;
