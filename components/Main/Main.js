import react from "react";
import styles from "./Main.module.css"

export default function Main({
    children,
    ...props
}) {
    return (
        <main
            {...props}
            className={styles.main}
        >
            {children}
        </main>
    )
}