import { Component } from "react";

class Menu extends Component {
  render() {
    return(
      <main>
        <section className="menu__container">
          <h2>Сеты</h2>
          <div className="menu__sorting">
            <div className="sort__icon"><span></span></div>
            <div className="sort__btn">Сортировка</div>
            <div className="sort__arrow"></div>
          </div>
          <ul className="cards__list">
            <li className="card__item">
              <h5 className="card__title">Филадельфия и Лосось сет</h5>
              <img scr="#" alt="" />
              <p className="card__desc">1050 грамм, 30 кусочков</p>
              <p className="card__price">1500 СОМ</p>
              <button className="card__btn" type="button">Хочу!</button>
            </li>
          </ul>
        </section>
      </main>
    );
  }
}
export default Menu;
