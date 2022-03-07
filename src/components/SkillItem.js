
import styled from "styled-components"
import { keyframes } from "styled-components"
import ink from "../images/ink.jpg"

const Liquid = keyframes`
 0%{
    background-position:left 0px top 500px;
  }
  50%{
    background-position: left 2500px top 0px;
  }

`
const OuterBox = styled.div`
    margin-top: 30px;
    width: 80px;
    height: 230px;
    border: 1px solid #242424;
    position: relative;
    border-radius: 5%;
    overflow: hidden;
    `
    const InnerBox = styled.div`
        position: absolute;
        width: 100%;
        height: 100%;
        margin-top: ${props=> props.amount};
        padding: 0;
        background-image: url(${ink});
        background-repeat: repeat-x;
        --webkit-animation: ${Liquid} 8s linear;
        animation: ${Liquid} 8s linear;
        overflow: hidden;
        animation-iteration-count:1;

`
const SkillItem = (props) => {
      return ( 
            <div>
                <OuterBox>
                <InnerBox amount={props.skills.marginTop}></InnerBox>
                </OuterBox>
                <div style={{fontSize: "20px",textAlign:"left", marginTop:"20px"}}>{props.skills.name}</div>
            </div>
     );
}
 
export default SkillItem;