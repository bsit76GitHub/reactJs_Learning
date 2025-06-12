// Muduler css
import styles from './Button.module.css'
function Button() {
    return (<>
        <button className={styles.button}>Button</button>
    </>);
}

//         {/* inline css */}
// function Button() {
//     const styles = {
//         backgroundColor: "hsl(143, 98.30%, 77.10%)",
//         color: "#6269f0",
//         borderRadius: "5px",
//         cursor: "pointer",
//         padding: "5px",
//         margin: "5px",
//         border: "none",
//         boxShadow: "2px 2px gray"
//     }
//     return (<>
//         <button style={styles}>Click Me</button>
//     </>);
// }

// {/* ============================= */ }


export default Button