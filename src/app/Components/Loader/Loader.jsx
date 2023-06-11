import styles from "./Loader.module.css"
export const Loader = ({ size = 20 }) => {
    return (
        <div style={{ width: size, height: size }} className={styles.spinner} />
    );
};