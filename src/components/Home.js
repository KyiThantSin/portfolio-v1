import "./Home.css"
import cat from "../images/cat.svg"
import styled from "styled-components";
import { Link } from "react-router-dom";
import withReveal from "react-reveal/withReveal"
import Fade from "react-reveal/Fade"

const ShortContacts = styled.ul`
    font-weight:400;
    flex-wrap:wrap;
    margin-left: 8px;
    display: flex;
    justify-content: space-evenly;
    list-style:circle;
    
    @media (max-width: 768px) {
        flex-direction: column;
      }

    & a{
        color: #242323;
        text-decoration: none;
    }
    & li a:hover{
        text-decoration: underline wavy;
        text-decoration-color: black;
        text-decoration-thickness: 3px;
        cursor: pointer;
    }
   
`
const Footer = withReveal(styled.div`
    padding-top:6%;
    margin:4%;
    display:flex;
    flex-wrap:wrap;
    justify-content: flex-start;
    font-size:12px;
    line-height:20px;
`, <Fade left/>)

const Home = (props) => {
    const title = "Hello World!";
    return ( 
        <div>
            <h1>{title}</h1>
            <div className="intro">

                <img src={cat} className="intro-cat" alt="Cat"/>
                <div className="intro-paragraph">
                    I am Kyi Thant Sin.<br/>
                    A Front-end Web Developer Who Love Cats.
                    <ShortContacts>
                        <li>
                            <a href={props.socialLinks.Linkedin }>LinkedIn</a>
                        </li>
                        <li>
                            <a href={props.socialLinks.Instagram}>Instagram</a>
                        </li>
                        <li>
                            <a href={props.socialLinks.github}>Github</a>
                        </li>
                    </ShortContacts>
                </div>
            </div>
            <div className="next">
                <Link to="/work">
                <img src={require("../images/down-arrow.png")} alt="down-arrow"/>
                </Link>
            </div>

            <Footer>
                
                    <b>
                  <em>Icons and Vectors are from "Flaticon" & "Freepik"
                    <br/> Designed and Coded by KyiThantSin
                </em>
                </b>
             
            </Footer>
        </div>
     );
}
 
export default Home;