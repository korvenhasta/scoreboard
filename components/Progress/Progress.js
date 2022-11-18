import react from "react";
import styles from "./Progress.module.css"

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