import "./About.css";
import Education from "./Education";
import Zoom from "react-reveal/Zoom"


const About = () => {
    return ( 
        <div>   
            <h1>About</h1>

            <div className="profile">
                <Zoom>
                    <img src={require("../images/Img.jpeg")} alt="profile"/>
                </Zoom>              
                <div>
                    <p>
                    Hi, My name is <span className="effect"> Kyi Thant Sin </span>, a web designer and developer from Mandalay, Myanmar. 
                    </p>
                    <p>
                    I design and build responsive websites. I love turning exciting ideas into beautiful products.
                    </p>
                    <p>If you'd like to work on a project with me or just say hello, you can 
                    hit the contact section. Enjoy your stay.
                    </p>
                </div>
            </div>

           <Education />
        </div>
     );
}
 
export default About;