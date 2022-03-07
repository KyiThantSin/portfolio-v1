import SkillItem from "./SkillItem";
import "./Skills.css"

const Skills = () =>{
    const SKILLS = [
        {name:"HTML", marginTop:"20px", id:0},
        {name:"CSS3", marginTop:"40px", id:1},
        {name:"JavaScript",marginTop:"70px", id:2},
        {name:"BootStrap",marginTop:"40px", id:3},
        {name:"JQuery", marginTop:"50px", id:4},
        {name:"Python",marginTop:"130px", id:5}
    ]
    return (
        <div className="skills">
            <h1>Languages and Tools</h1>
            
            <div className="card" >
                {SKILLS.map(item=>{
                    return(
                        <div key={item.id}>
                        <SkillItem skills={item}/>
                    </div>
                    )
                })}
            </div>
            
        </div>
    )
}

export default Skills;