import react from "react";
import styles from "./Button.module.css"

export default function Button({
    children,
    ...props
}) {
    <button
        {...props}
        className={styles.button}
    >
        {children}
    </button>
}