import React, { Component } from "react";
import '../styles/Layout.css';
import About from "./About";
import pizza from '../img/pizza.jpg';
import sets from '../img/sets.jpg';
import wok from '../img/wok.jpg';
import rolls from '../img/rolls.jpg';
import sushi from '../img/sushi.jpg';
import soup from '../img/soup.jpg';
import salad from '../img/salad.jpg';
import beverages from '../img/beverages.jpg';
import combo from '../img/combo.jpg';
import eel from '../img/eel.jpg';
import corndog from '../img/corndog.jpg';
import chiken from '../img/chiken.jpg';
import promo from '../img/promo.jpg';

class Layout extends Component {
  render () {
    return (
      <>
        <main>
          <section className="product__list">
          <div className="product__item">
              <img src={pizza} alt="Фото пиццы с томатной пастой, базиликом и сыром."/>
            <div>Пицца</div>
          </div>
          <div className="product__item">
            <a href="#">
              <img src={sets} alt="Фото роллов и суши."/>
            </a>
            <div>Сеты</div>
          </div>
          <div className="product__item">
            <a href="#">
              <img src={wok} alt="Фото роллов и суши."/>
            </a>
            <div>Wok</div>
          </div>
          <div className="product__item">
            <a href="#">
              <img src={rolls} alt="Фото роллов и суши."/>
            </a>
            <div>Роллы</div>
          </div>
          <div className="product__item">
            <a href="#">
              <img src={sushi} alt="Фото роллов и суши."/>
            </a>
            <div>Суши</div>
          </div>
          <div className="product__item product__item--soon">
            <a href="#">
              <img src={soup} alt="Фото роллов и суши."/>
            </a>
            <div>Супы</div>
          </div>
          <div className="product__item product__item--soon">
            <a href="#">
              <img src={salad} alt="Фото роллов и суши."/>
            </a>
            <div>Салаты</div>
          </div>
          <div className="product__item">
            <a href="#">
              <img src={beverages} alt="Фото роллов и суши."/>
            </a>
            <div>Напитки</div>
          </div>
          <div className="product__item product__item--wider">
            <a href="#">
              <img src={combo} alt="Фото роллов и суши."/>
            </a>
            <div className="product__title--bottom">Комбо</div>
          </div>
          <div className="product__item">
            <a href="#">
              <img src={eel} alt="Фото роллов и суши."/>
            </a>
            <div className="product__title--bottom">Угорь</div>
          </div>
          <div className="product__item">
            <a href="#">
              <img src={corndog} alt="Фото роллов и суши."/>
            </a>
            <div className="product__title--bottom">Корн дог</div>
          </div>
          <div className="product__item product__item--wider">
            <a href="#">
              <img src={chiken} alt="Фото роллов и суши."/>
            </a>
            <div className="product__title--bottom">Чикен</div>
          </div>
          <div className="product__item product__item--wider">
            <a href="#">
              <img src={promo} alt="Фото роллов и суши."/>
            </a>
            <div className="product__title--bottom">Акции</div>
          </div>
          </section>
          <About />
        </main>
      </>
    )
  }
}


export default Layout;