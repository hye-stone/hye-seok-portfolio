import "./contact.css"
import Address from "../../img/address.png"
import Email from "../../img/email.png"
import Phone from "../../img/phone.png"
const Contact = () => {
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              010-9203-3689
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              kang95hs@naver.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Ilsan
            </div>
          </div>
        </div>
        <div className="c-right">
          <div className="wrapper">
            <div className="icon instagram">
              <div className="tooltip">Instagram</div>
              <a href="https://www.instagram.com/khs_lisa_/?hl=en">
                <span><i className="gg-instagram"></i></span>
              </a>
            </div>
            <div className="icon github">
              <div className="tooltip">Github</div>
              <a href="https://github.com/hye-stone">
                <span><i className="fab fa-github"></i></span>
              </a>
            </div>
            <div className="icon email">
              <div className="tooltip">Email</div>
              <a href="mailto:kang95hs@naver.com">
                <span><i className="gg-mail"></i></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
