import PropTypes from "prop-types"
import styles from "./Button.module.css"

function Button({text}) {
/* button 태그 내부에 직접 style을 입력하는 방법도 있지만, 효율적이지 않다.*/
    // return <button
    //     style ={{
    //         padding: "0.5rem",
    //         backgroundColor: "tomato",
    //         color: "white",
    //         fontSize: "16px",
    //     }}
    // >
    //     {text}
    // </button>
    return <button className={styles.btn}>{text}</button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Button;