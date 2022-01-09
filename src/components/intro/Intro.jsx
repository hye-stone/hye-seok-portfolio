import "./intro.css"
import Typewriter from "typewriter-effect"
const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h2 className="i-name">Kang hye-seok</h2>
          <div className="i-title">
            <Typewriter className="i-title-item"
              options={{
                strings: [
                  "< I'm a Webpublisher./>",
                  "< I'm a Front-end Developer./>",
                ],
                autoStart: true,
                loop: true,
                delay: 70,
                deleteSpeed: 30,
                pauseFor: 3000,
              }}
            />
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
      </div>
    </div>
  )
}

export default Intro
