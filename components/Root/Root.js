import react from "react";
import styles from "./Root.module.css"

export default function Root({
    children,
    ...props
}) {
    return (
        <main
            {...props}
            className={styles.root}
        >
            {children}
        </main>
    )
}