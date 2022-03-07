import "./Work.css"
import leftArrow from "../images/left-arrow.svg"
import WorkItem from "./WorkItem";
import { Link } from "react-router-dom";
import Skills from "./Skills";
import Contact from "./Contact";

const Work = (props) => {
    const workItems=[
        {src:require("../images/weather.jpg"), alt:"weather", name:"Weather Website", link:"https://kyithantsin.github.io/Weather/",id:0},
        {src:require("../images/3227455.jpg"), alt:"web search", name:"Url Shortener Website", link:"https://kyithantsin.github.io/Short-Url/main.html", id:1},
        {src:require("../images/mini.jpg"), alt:"vector", name:"Mini JavaScript Projects", link:"https://github.com/KyiThantSin/JavaScript_Projects", id:2},
    ]
    return ( 
        <div className="work">
            <h1>Latest Work</h1>

            <div className="box">
                {workItems.map(item=>{
                    return(
                        <div key={item.id}>
                            <WorkItem item={item}/>
                        </div>
                    )
                })}
            </div>

            <div className="github-box">
                <div className="toGithub">
                    <b><a href={props.socialLinks.github}>More on Github...</a></b>
                </div>
            </div>
        
            <Skills />
            <Contact socialLinks={props.socialLinks}/>
            <div className="back">
                <Link to="/">
                    <img src={leftArrow} alt="left-arrow"/>
                </Link>
            </div>

        </div>
     );
}
 
export default Work;