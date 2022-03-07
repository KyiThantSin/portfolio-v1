import styles from "./WorkItem.module.css";


const WorkItem = (props) => {
    return ( 
        <div>
              <div className={styles.projectBox}>
               <a href={props.item.link}>
                 <img src={props.item.src} alt={props.item.alt} />
               </a>
             </div>
             <div className={styles.caption}>{props.item.name}</div>
        </div>
     );
}
 
export default WorkItem;