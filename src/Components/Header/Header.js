import Navigation from "./Navigation/Navigation";
import Container from "./Container/Container";
import styles from "./Header.module.css";

function Header() {
    return (
        <div className={styles.header}>
            <Navigation />
            <Container />
        </div>
        
    );
}

export default Header;