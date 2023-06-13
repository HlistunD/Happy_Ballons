import photo from "./images/photo.png";
import dottedLine from "./images/dottedLine.png";
import circlePink from "./images/PinkCircle.png";
import circleMint from "./images/MintCircle.png";


function About() {
    return (
        <div className="about">
            <div className="backgroundAboutRose">
                    <div className="backgroundAboutCircleMint">
                        <img src={circleMint} alt="decoration" />
                    </div>
                    <div className="backgroundAboutCirclePink">
                        <img src={circlePink} alt="decoration" />
                    </div>
                <div className="backgroundAboutMint">
                    <div className="backgroundAboutDotted">
                        <img src={dottedLine} alt="dottedLine" />
                    </div>
                    <div className="aboutContainer">
                        <div className="aboutPhoto">
                            <img src={photo} alt="my_photo" />
                        </div>
                        <div className="aboutText">
                            <h2>About me</h2>
                            <p>
                                My name is Dasha, and I am based in the vibrant Orange
                                County, California. My business is not just a hobby, it's my
                                passion. I find satisfaction in creating beautiful designs
                                that bring joy to others. Every work I create is a source of
                                pride because I put my heart and soul into creating
                                unforgettable experiences for you. Your happiness my reward.
                                Let's create unforgettable moments together.
                            </p>
                            <button>Contact me</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;
