import styles from "./Header.module.css";
import {Box} from "@mui/material";

const Header = () => {
    return (
        <Box component={'header'} className={styles.header}>
            <Box component={"h1"} sx={{ p: 1, border: '1px solid #ffffff', fontSize: '0.75rem', display: 'inline-block', fontWeight: 500 }}>
                ПОКЕМОНЫ API
            </Box>
        </Box>
    )
};

export default Header;