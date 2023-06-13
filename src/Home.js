import background from "./images/background.mov";
import photoshootPic from "./images/photoshootPic.png"
import weddingPic from "./images/weddingPic.png"
import babyShower from "./images/babyShower.png"
import sweetSixteen from "./images/sweetSixteen.png"
import birthday from "./images/birthdayPic.png"
import line from "./images/line.png"


function Home () {
    return (
        <div>
            <div className="container background_Video">
                <video src={background} autoPlay loop muted />
                <h1>Designing Any Holiday And <br />
                    Making All Your Wishes Come True</h1>
            </div>

            <div className="containerCircles">
                <div className="line">
                    <img src={line} alt="decoration"/>
                </div>
                <div className="rowOne">
                    <div className="circle">
                        <div className="picInsideCirOne">
                            <img src={photoshootPic} alt="photoshootPic" />
                        </div>
                        <div className="textUnderCircle">
                            <p>Photoshoot</p>
                        </div>
                    </div>
                    <div className="circle">
                        <div class="picInsideCirOne">
                            <img src={birthday} alt="circlePicFive" />
                        </div>
                        <div className="textUnderCircle">
                            <p>Birthdays</p>
                        </div>
                    </div>
                    <div className="circle">
                        <div className="picInsideCirOne">
                            <img src={babyShower} alt="circlePicThree" />
                        </div>
                        <div className="textUnderCircle">
                            <p>Baby Shower</p>
                        </div>
                    </div>
                </div>

                <div className="rowTwo">
                    <div className="circle circleGroup">
                        <div className="picInsideCirTwo">
                            <img src={weddingPic} alt="weddingPic" />
                        </div>
                        <div className="textUnderCircle">
                            <p>Weddings</p>
                        </div>
                    </div>
                    <div className="circle circleGroup">
                        <div className="picInsideCirTwo">
                            <img src={sweetSixteen} alt="sweetSixteen" />
                        </div>
                        <div className="textUnderCircle">
                            <p>Sweet 16</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;