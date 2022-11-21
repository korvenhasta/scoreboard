import react from "react";
import styles from "./Progress.module.css"

function progressBarColor(score) {
    if (score > 0 &&  score <= 10) {
      return "#d3455a"
    }
    else if (score > 10 &&  score <= 45) {
      return "#f7c225"
    }
    else {
      return "#1aae9f"
    }
  }
  
export default function Progress({
    children,
    ...props
}) {
    return(
        <progress
            {...props}
            className={styles.progress}
        >
            {children}
        </progress>
    )
}