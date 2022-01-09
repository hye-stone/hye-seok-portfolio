import "./product.css"
import Holbein from "../../img/holbein.png"
import Shop from "../../img/shop.png"
import Porsche from "../../img/porsche.png"
import Jeju from "../../img/jeju.png"
import Portfolio from "../../img/portfolio.png"
const Product = () => {
  return (
    <div className="p">
      <ul className="cards">
        <li>
          <div className="card">
            <img src={Porsche} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <div className="card__header-text">
                  <h3 className="card__title">Porsche Website</h3>
                  <span className="card__status">참여도 100%</span>
                </div>
              </div>
              <p className="card__description">HTML, CSS, jvascript, jQuery를 사용하여 포르쉐 사이트 리디자인 하여 웹페이지 제작</p>
              <div className="links">
                <p className="link"><a href="https://github.com/hye-stone/porsche-project" target='_blank' rel="noreferrer">👨‍💻 GitHub</a></p>
                <p className="link"><a href="http://stonehey.dothome.co.kr/" target='_blank' rel="noreferrer">🖥️ Demo</a></p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="card">
            <img src={Holbein} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <div className="card__header-text">
                  <h3 className="card__title">Holbein Website</h3>
                  <span className="card__status">참여도 100%</span>
                </div>
              </div>
              <p className="card__description">HTML, CSS, Bootstrap, jvascript, jQuery를 사용하여 Hobein 사이트를 리디자인하여 웹페이지 제작</p>
              <div className="links">
                <p className="link"><a href="https://github.com/hye-stone/holbein-project" target='_blank' rel="noreferrer">👨‍💻 GitHub</a></p>
                <p className="link"><a href="https://hye-stone.github.io/holbein-project/" target='_blank' rel="noreferrer">🖥️ Demo</a></p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="card">
            <img src={Jeju} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <div className="card__header-text">
                  <h3 className="card__title">Jeju-Airline</h3>
                  <span className="card__status">참여도 100%</span>
                </div>
              </div>
              <p className="card__description">HTML, Scss, jvascript, jQuery를 사용하여 제주 항공 사이트를 리디자인하여 웹 페이지 제작</p>
              <div className="links">
                <p className="link"><a href="https://github.com/hye-stone/Jeju-Airline-project" target='_blank' rel="noreferrer">👨‍💻 GitHub</a></p>
                <p className="link"><a href="http://heystone.dothome.co.kr/jeju.html" target='_blank' rel="noreferrer">🖥️ Demo</a></p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="card">
            <img src={Shop} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <div className="card__header-text">
                  <h3 className="card__title">react-Shoes #</h3>
                  <span className="card__status">참여도 100%</span>
                </div>
              </div>
              <p className="card__description">React를 이용한 상품 목록 및 장바구니 페이지 구현</p>
              <div className="links">
                <p className="link"><a href="https://github.com/hye-stone/react-shop" target='_blank' rel="noreferrer">👨‍💻 GitHub</a></p>
                <p className="link"><a href="https://hye-stone.github.io/" target='_blank' rel="noreferrer">🖥️ Demo</a></p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="card">
            <img src={Portfolio} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <div className="card__header-text">
                  <h3 className="card__title">Portfolio</h3>
                  <span className="card__status">참여도 100%</span>
                </div>
              </div>
              <p className="card__description">React를 이용한 포트폴리오</p>
              <div className="links">
                <p className="link"><a href="https://github.com/hye-stone/portfolio" target='_blank' rel="noreferrer">👨‍💻 GitHub</a></p>
                <p className="link"><a href="https://github.com/hye-stone/holbein-project" target='_blank' rel="noreferrer">🖥️ Demo</a></p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Product
