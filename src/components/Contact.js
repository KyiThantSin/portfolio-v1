import styled from "styled-components";
import Zoom from "react-reveal/Zoom"

 const ContactPage = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    font-size: 20px;

    & ul li{
        padding:10px;
        list-style:none;
        padding-top:10px;
    }
    & ul li>a{
        color:#242424;
        text-decoration : none;
    }
    & ul li:hover{
        border-radius:10px;
        background-color:#414243;
        color:white;
    }
    & ul li>a:hover{
        color:white;
    }
 `
const Contact = (props) => {
    return (
        <Zoom style={{marginTop:"4%"}}>
            <h1>How to reach me ?</h1>
            <ContactPage>
            <div>
                <ul>
                    <li>
                    <b>Github: </b><a href={props.socialLinks.github}>KyiThantSin</a>
                    </li>
                    <li>
                        <b>Linkedin: </b><a href={props.socialLinks.Linkedin}>KyiThantSin</a>
                        </li>
                    <li>
                        <b>Phone:</b> <a href={props.socialLinks.phNo}>+959 441040568</a>
                        </li>
                </ul>
            </div>

            <div>
                <ul>
                    <li>
                        <b>Gmail:</b><a href={`mailto:${props.socialLinks.email}`}> Kyithantsin4321@gmail.com</a>
                    </li>
                    <li>
                        <b>Edu Mail: </b><a href={`mailto:${props.socialLinks.edumail}`}>Kyithantsin@mtu.edu.mm</a>
                    </li>
                </ul>
            </div>
       </ContactPage>

        </Zoom>
     );
}
 
export default Contact;