import styled from "styled-components";
import error from "../images/404.svg"

const ErrorPage = styled.div`
    & img{
        width:50%;
    }
`

const NotFound = () => {
    return ( 
        <ErrorPage>
            <img src={error} alt="404 page" />
        </ErrorPage>
     );
}
 
export default NotFound;

