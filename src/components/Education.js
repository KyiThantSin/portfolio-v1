import styled from "styled-components"
import cat from "../images/9Vq31DO.gif"
import bg from "../images/whiteWall.jpg";
import withReveal from "react-reveal/withReveal"
import Fade from "react-reveal/Fade";

const Details = styled.div`
background-image: url(${bg});
`
const Edu = styled.div`
    justify-content:space-evenly;
    margin-top:3%;
    display:flex;
    flex-wrap:wrap;
    flex-direction : row;
`
const Exp = styled.div`
    margin-bottom:20px;
    justify-content: space-around;
    margin-top:8%;
    display:flex;
    flex-wrap:wrap-reverse;
    flex-direction : row;

    & img{
        width:90%;
    }
`
//8C8A8A
const Card = withReveal(styled.div`
    margin:10px;
    padding:10px;
    border:1px solid transparent;
    border-radius:5px;
    color:white;
    background-color: #414243;

    & p {
        font-size:16px;
    }
`,<Fade left/>)
const Education = () =>{
    return (
        <Details >
            <h1 style={{marginTop:"8%"}}>Education</h1>
            <Edu>
                <div> 
                    <Card>
                        <h3>
                        Mandalay Technological University 
                        <br />
                        (MTU / MIT)
                        </h3>
                        <p>
                            Major-Computer Engineering and Information Technology
                            <br />
                            <b>2017 - Present</b>
                        </p>
                    </Card>
                </div>

                <div>
                    <Card>
                            <h3>
                            Mandalay Uniersity of Foreign Languages
                            <br />
                            (MUFL)
                            </h3>
                            <p>
                            Diploma In English
                                <br />
                                <b>2017 - 2019</b>
                            </p>
                    </Card>         
                </div>

            </Edu>

            <Exp>
                <div>
                    <img src={cat} alt="gif"/>
                </div>
                <div>
                    <h1>Volunteering & Experience</h1>   
                    <Card>
                        <h3>
                        Participant
                        </h3>
                        <p>
                        KMITL ASEAN Engineering Summer Camp 
                            <b> 2018</b>
                        </p>
                    </Card>
                    <Card>
                        <h3>
                        Front-end Web Developer Intern
                        </h3>
                        <p>
                        "Thuma" Community Organization
                            <br />
                            <b>2021 Aug - 2021 Dec</b>
                        </p>
                </Card>                 
                </div>
            </Exp>
            
        </Details>
    )
}

export default Education;