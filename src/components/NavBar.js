import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <div className={styles.navbar}>
            <h2 className={styles.logo}>Kyi</h2>
            <ul className={styles.menu}>
                <li>
                    <Link to="/" 
                        style={{color: "black"}}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/work" 
                        style={{color: "black"}}
                    >
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="/about" 
                        style={{color: "black"}}
                        > 
                        About 
                    </Link>
                </li>
            </ul>
        </div>
     );
}
 
export default NavBar;