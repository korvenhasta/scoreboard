import react from "react";
import styles from "./Label.module.css"

export default function Label({
    children,
    ...props
}) {
    return(
        <label
            {...props}
            className={styles.label}
        >
            {children}
        </label>
    )
}