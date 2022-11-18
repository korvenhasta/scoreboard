import react from "react";
import styles from "./Footer.module.css"

export default function Footer({
    children,
    ...props
}) {
    return (
        <footer
            {...props}
            className={styles.footer}
        >
            {children}
        </footer>
    )
}