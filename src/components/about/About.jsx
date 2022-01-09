import "./about.css"
import Me from "../../img/me.jpeg"
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Me} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <div className="textFlex">
          <p className="a-desc">저는</p>
          <div className="a-title">
            <div className="a-title-wrapper">
              <div className="a-title-item">새로운 것에 도전하는</div>
              <div className="a-title-item">배울 자세가 되어있는</div>
              <div className="a-title-item">항상 긍정적인</div>
              <div className="a-title-item">성실한</div>
            </div>
          </div>
          <p className="a-desc">사람입니다.</p>
        </div>
        <div className="a-award">
          <div className="a-award-texts">
            <p className="a-award-desc">안녕하세요 프론트엔드 개발자를 지향하는 강혜석입니다.</p>
          </div>
          <div className="a-award-texts">
            <h2 className="a-award-title">🧚 주사용 기술</h2>
            <p className="a-award-desc">React(Functional Component), Styled Components, JavaScript, JQuery, HTML/CSS, SCSS, Bootstrap.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
